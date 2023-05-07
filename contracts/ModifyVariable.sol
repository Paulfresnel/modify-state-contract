//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract ModifyVariable{

    uint public x;
    string public secretString;
    uint public y=20;

    constructor(uint _x, uint _y){
        x = _x;
        _y = y;
        secretString = "Let's try to modify this";
    }

    function getLeet() public {
        x = 1337;
    }

    function customLeet(uint h) public {
        x = h;
    }

    function differenceWith(uint z) public view returns(uint){
        require(x>=z, "Too small");
        return x-z;
    }

    function senderIs() public view returns(address){
        return msg.sender;
    }

    function changeString(string memory userWord) public {
        secretString = userWord;
    }
}