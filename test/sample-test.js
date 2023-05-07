// import testing libraries: https://www.chaijs.com/guide/styles/ 
const { expect, assert } = require("chai");

// the `describe` scope encapsulates an entire test called `TestModifyVariable`
// the `it` says the behavior that should be expected from the test
describe("TestModifyVariable", function () {
  it("should change x to 1337", async function () {
    // this line creates an ethers ContractFactory abstraction: https://docs.ethers.org/v5/api/contract/contract-factory/
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");

    // we then use the ContractFactory object to deploy an instance of the contract
    const contract = await ModifyVariable.deploy(10);

    // wait for contract to be deployed and validated!
    await contract.deployed();

    // modify x from 10 to 1337 via this function!
    await contract.getLeet();
    // getter for state variable x
    const newX = await contract.x();
    assert.equal(newX.toNumber(), 1337);

    const customX = await contract.customLeet(25);
    console.log("customX:",await contract.x());
    const whoIsSender = await contract.senderIs();
    console.log("whoIsSender:",whoIsSender);
    const difference = await contract.differenceWith(5);
    console.log("difference:",difference);


  });
  it ('should change x to custom value', async function(){
    // this line creates an ethers ContractFactory abstraction: https://docs.ethers.org/v5/api/contract/contract-factory/
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");

    // we then use the ContractFactory object to deploy an instance of the contract
    const contract = await ModifyVariable.deploy(10);

    // wait for contract to be deployed and validated!
    await contract.deployed();

    // modify x from 10 to 1337 via this function!
    await contract.customLeet(25);
    // getter for state variable x
    const newX = await contract.x();
    assert.notEqual(newX.toNumber(), 0);

    const stringChange = await contract.changeString('State string variable modified successfully');
    console.log("stringChange:", await contract.secretString())
  })
});