package middleware

import (
	"net"
	"net/http"

	"github.com/gorilla/mux"
	log "github.com/sirupsen/logrus"
	"github.com/svbh/middleware/types"
)

//// Response captures the HTTP Response sent by Agent REST Server
//type Response struct {
//	StatusCode int      `json:"status-code,omitempty"`
//	Error      string   `json:"error,omitempty"`
//}

// RestServer is the REST api server
type RestServer struct {
	listenURL           string
	listener            net.Listener
	httpServer          *http.Server
	requirementResolver types.RequirementResolver
}
type routeAddFunc func(*mux.Router, *RestServer)

func NewRestServer(contract types.RequirementResolver, listenURL string) (*RestServer, error) {
	// create server instance
	srv := RestServer{
		listenURL: listenURL,
	}

	// if no URL was specified, just return (used during unit/integ tests)
	if listenURL == "" {
		return &srv, nil
	}

	// setup the top level routes
	router := mux.NewRouter()
	prefixRoutes := map[string]routeAddFunc{
		//"/api/requirements/": addRequirementAPIRoutes,
	}

	for prefix, subRouter := range prefixRoutes {
		sub := router.PathPrefix(prefix).Subrouter().StrictSlash(true)
		subRouter(sub, &srv)
	}

	log.Infof("Starting server at %s", listenURL)

	// listener
	listener, err := net.Listen("tcp", listenURL)
	if err != nil {
		log.Errorf("Error starting listener. Err: %v", err)
		return nil, err
	}
	srv.listener = listener

	// create a http server
	srv.httpServer = &http.Server{Addr: listenURL, Handler: router}
	go srv.httpServer.Serve(listener)

	return &srv, nil
}

// Stop stops the http server
func (s *RestServer) Stop() error {
	if s.httpServer != nil {
		s.httpServer.Close()
	}

	return nil
}
