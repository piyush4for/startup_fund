//Tell web3 that a deployed copy of the campaignFactory exists
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'
//import { exportDefaultDeclaration } from 'babel-types';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x302F8757f8212e953c99f77Ff68D97138d8fC9a2'
);

export default instance;