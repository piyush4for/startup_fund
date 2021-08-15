import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../etherium/factory";
import Layout from "../components/Layout";

class CampaignIndex extends Component {
  //yo use rendering in next use getInitialProps
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaign().call();

    return { campaigns };
  }

  renderCampaign() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
        //all that layout will pass through props.children in component Layout
      <Layout>
        <div>

          <h3>Open Campaign</h3>

          <Button
           floated="right"
           content="Create Campaign"
           icon="add circle" 
           primary 
          />
          
          {this.renderCampaign()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
