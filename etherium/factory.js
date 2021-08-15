//Tell web3 that a deployed copy of the campaignFactory exists
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'
import { exportDefaultDeclaration } from 'babel-types';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x2B0a7A5B31CA1D3af842b46A4d1dAd262339eE49'
);

export default instance;