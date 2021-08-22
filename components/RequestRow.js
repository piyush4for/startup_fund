// Dummy
import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../etherium/web3";
import Campaign from "../etherium/campaign";

class RequestRow extends Component {
  onApprove = async () => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0],
    });
  };

  onFinalize = async () => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id).send({
      from: accounts[0],
    });
  };

  render() {
    //again destructuring this.props and tablel or lowering repeated typing
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    const readytoFinalize = request.approvalCount > approversCount /2;

    return (
      <Row disabled={request.complete} positive={readytoFinalize && !request.complete}>
        <Cell>{id}</Cell>
        <Cell>
          <img src={request.imageURL} style={{ width: 50 }} />
        </Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount}/{approversCount}
        </Cell>

        <Cell>
          {request.complete ? null : (
            <Button color="green" basic onClick={this.onApprove}>
              Approve
            </Button>
          )}
        </Cell>

        <Cell> 
          {request.complete ? null : (
            <Button color="teal" basic onClick={this.onFinalize}>
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
