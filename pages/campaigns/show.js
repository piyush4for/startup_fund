//show user details about particular campaign
import React, { Component } from 'react';
import Layout from '../../components/Layout';

class CampaignShow extends Component {
    // just use it for getting specific address from contract
    static async getInitialProps(props) {
       console.log(props.query.address);
       return {};
    }


    render() {
        return(
            <Layout>
                <h3>Campaign Show</h3>;
            </Layout>
        ) 
    }
}

export default CampaignShow;