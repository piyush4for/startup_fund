// used this to create new instance of web3 that uses the provider from metamask
//given to web page

import Web3 from "web3";

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !=='undefined') {
        //we are in browser and metamask is running
        web3 = new Web3(window.web3.currentProvider);
} else {
    //we are on server or user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        //totally fine to share this key
        'https://rinkeby.infura.io/v3/8eca61ae2a994437b4b6c199d9772b3f'
    );
    web3 = new Web3(provider);
}

export default web3;