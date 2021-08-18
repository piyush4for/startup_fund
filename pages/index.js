import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../etherium/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  //yo use rendering in next use getInitialProps
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaign().call();

    return { campaigns };
  }

  renderCampaign() {
    // used items, card blah blah for semantic-ui-react desgin of Card group item
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        //fluid is some design shit
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
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderCampaign()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
