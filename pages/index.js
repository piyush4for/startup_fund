import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../etherium/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
import Campaign from '../etherium/campaign';

class CampaignIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: null,
      summary: null
    }
  }
  
  //yo use rendering in next use getInitialProps
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaign().call();

    return { campaigns };
  }

  async componentDidMount(){
    const c = Campaign(this.props.campaigns[0]);
    const summary = await Promise.all(this.props.campaigns.map((campaign, i) => Campaign(this.props.campaigns[i]).methods.getSummary().call()));
    this.setState({summary});
  }

  renderCampaign() {
    // used items, card blah blah for semantic-ui-react desgin of Card group item
    let Summary;
    const items = this.props.campaigns.map((address, i) => {
      if (this.state.summary) Summary = this.state.summary[i];
      else Summary = {"5": "null", "7": "null"};
      return {
        key:i,
        image: <img src={Summary[7]} style={ {width:150}} />,
        header: Summary[5],
        meta: address,
        description: <div>
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
          </div>,
        //fluid is some design shit
        fluid: true,
        style: {overflowWrap: 'break-word'}
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
