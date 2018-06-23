pragma solidity ^0.4.22;


contract nonProfit {
  uint private requirement_detail;
  uint private minimum_vendor_bid;
  uint private maxBids;
  address private vendor;
  address private donor;
  address private nonprofit;
  uint private requirement_status;

  function createRequirement(uint detail, address creator, uint bids) public {
      requirement_detail = detail;
      nonprofit = creator;
      maxBids = bids;

      minimum_vendor_bid = 2**256 - 1;
      vendor = 0x123;
  }
}
