pragma solidity ^0.4.17;

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    //used map instead array for saving gas
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function Compaign(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string description, uint value, address recipient)
        public restricted {
            //we use memory variable here becoz request[] is in memory we cant make new object in storage
            
            //whenever user use this function it will stored as requests index 1,2.....
            Request memory  newRequest = Request({
               description: description,
               value: value,
               recipient: recipient,
               complete: false,
               approvalCount: 0
            });
            
            requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        
        //shortcut for repeated requests[index]
        Request storage request = requests[index];
        
        //check is it contributor
        require(approvers[msg.sender]);
        //check is it already voted by approvals map so only new voters can do so
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    //to complete finalize the compaogn so no more changes
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        //checking 50% votes
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
        
    }
}




