const ApprovalContract = artifacts.require('../../contracts/ApprovalContract.sol');


contract('ApprovalContract', function(accounts ){
  it('initiates contract', async function(){
    const contract = await ApprovalContract.deployed();
    const approval = await contract.approver.call();

    assert.equal(approver, value, "approvers dont match");

  });


  it('it takes a deposit', async function(){
         const contract = await ApprovalContract.deployed();
         await contract.deposit(account[0], {
           value: 1e+18, from: accounts[1]
         });
         assert.equal(web3.eth.getBalance(contract.address), 1e+18, "amount did not match");
  });
});
