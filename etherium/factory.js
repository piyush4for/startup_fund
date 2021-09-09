//Tell web3 that a deployed copy of the campaignFactory exists
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'
import { exportDefaultDeclaration } from 'babel-types';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x3d00cC40b2e3c0D345b3AEC4D5FD11D3bc11DfAA'
);

export default instance;