//Tell web3 that a deployed copy of the campaignFactory exists
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'
import { exportDefaultDeclaration } from 'babel-types';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x6a31e79948af4E1554d14A9bFcda7fe39043d7bA'
);

export default instance;