import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../etherium/factory";
import web3 from "../../etherium/web3";
import { Router} from '../../routes';

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    description: "",
    campaignName:"",
    campaignImage:"",
    errorMessage: "",
    loading: false
  };
  //made this state only for input recording

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: ''});
    
    try {
        const accounts = await web3.eth.getAccounts();
        await factory.methods
        .createCampaign(this.state.minimumContribution, this.state.campaignName, this.state.description, this.state.campaignImage)
        .send({
            from: accounts[0],
        });

        Router.pushRoute('/');
    } catch (err) {
        this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false});
};

  render() {
    return (
      <Layout>
        <h3>Create a campaiagns</h3>

        {/* !! is a tricck to convert string to boolean */}
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={(event) =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Campaign Name</label>
            <Input 
              value={this.state.campaignName} onChange={
              event => this.setState({campaignName: event.target.value})
            }
          />
          </Form.Field>
          <Form.Field>
            <label>Campaign Description</label>
            <Input 
              value={this.state.description}
              onChange={
                event => this.setState({description: event.target.value})
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Campaign Image</label>
            <Input 
              value={this.state.campaignImage}
              onChange={
                event => this.setState({campaignImage: event.target.value})
              }
            />
          </Form.Field>

          <Message error header="Oops" content={this.state.errorMessage} />
          <Button loading={ this.state.loading } primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
