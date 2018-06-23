package types

const (
	CategoryBooks = iota
	CategoryStationery
)

const (
	OPEN = iota
	CLOSED
)

type RequirementDetail int
type RequirementStatus int

type Contract struct {
	RequirementDetail RequirementDetail
	MinimumBid        uint64
	VendorAddress     string
	DonorAddress      string
	RequirementStatus RequirementStatus
}

type RequirementResolver interface {
	CreateRequirement(c *Contract) error
	UpdateRequirement() error
	SetVendorBid(bid int) error
	SetDonor(donorAddress string) error
}
