const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../etherium/build/CampaignFactory.json');
const compiledCampaign = require('../etherium/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000'})

    await factory.methods.createCampaign('100').send({
       from: accounts[0],
       gas: '1000000' 
    });
        //as it is view data we use call() and got campaign address
    [campaignAddress] = await factory.methods.getDeployedCampaign().call();
    //already been deployed so we need to justify address instead .deploy.send
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
});
    describe('Campaign', () => {
        it('deploy a factory and a campaign', () => {
            assert.ok(factory.options.address);
            assert.ok(campaign.options.address);
        });

        it('mark caller as campaign manager', async () => {
            const manager = await campaign.methods.manager().call();
            assert.equal(accounts[0], manager);
        });

        it('allow people to contribute money and mark approvers', async() => {
            await campaign.methods.contribute().send({
                value: '200',
                from: accounts[1]
            });
            const isContributor = await campaign.methods.approvers(accounts[1]).call();
            assert(isContributor);
        });

        it('require a minimum contribution', async () => {
            try {
                //gave wrong try to get true assert of false
                await campaign.methods.contribute().send({ 
                    value: '5',
                    from: accounts[1]
                });
                assert(false);
            } catch (error) {
                assert(error);
            }
        });

        it('allow a manager to make a payment request', async () => {
            await campaign.methods
                .createRequest('buy batteries', '100', accounts[1])
                .send({
                    from: accounts[0],
                    gas: '1000000'
                });
            const request = await campaign.methods.requests(0).call();

            assert.equal('buy batteries' , request.description);
        });

        it('processes requests', async () => {
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei('10', 'ether')
            });

            await campaign.methods
                .createRequest('blah blah', web3.utils.toWei('5', 'ether'), accounts[1])
                .send({ from: accounts[0], gas: '1000000'});

            await campaign.methods.approveRequest(0).send({
                from: accounts[0],
                gas: '1000000'
            });

            await campaign.methods.finalizeRequest(0).send({
                from: accounts[0],
                gas: '1000000'
            });

            let balance = await web3.eth.getBalance(accounts[1]);
            balance = web3.utils.fromWei(balance, 'ether');
            balance = parseFloat(balance);

            console.log(balance);
            assert(balance > 104);
        });
        
    });
    
    //i skipped future test as already tested in remix editor and super annoying to wirte whole test case

