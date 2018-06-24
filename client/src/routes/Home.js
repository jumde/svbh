import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { Image, List } from 'semantic-ui-react'

export default () => (
	<div>	
		<Grid centered columns={2}>
	    <Grid.Column>
				<Grid.Row>
					<div className="hero">	
						<div className="dark-frame"></div>
						<Image className="image-hero" src='/images/bill-melinda-gates.jpg' size='massive' />
			    	<h1 className="image-hero-text">Bill & Melinda Gates Foundation</h1>
		    	</div>
		    </Grid.Row>
	    </Grid.Column>
	  </Grid>
	</div>
);


/*
	<div>	
		<div>lala</div>
		<ul>
		  <li>
		    <Link to="/">Home</Link>
		  </li>
		  <li>
		    <Link to="/company">Company</Link>
		  </li>
		</ul>
	</div>
*/

