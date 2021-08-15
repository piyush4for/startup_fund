import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from '../../etherium/factory';
import web3 from '../../etherium/web3';

class CampaignNew extends Component {
    state = {
        minimumContribution: ''
    };
    //made this state only for input recording

    onSubmit = async (event) => {
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();
        await factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            });
    };

    render() {
        return (
            <Layout>
                <h3>Create a campaiagns</h3>

                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                            label="wei" 
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event =>
                                 this.setState({ minimumContribution: event.target.value })}
                        />
                    </Form.Field>

                    <Button primary>Create!</Button>
                </Form>
            </Layout>
        )
    }
}

export default CampaignNew;