//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Lottery {
    address public manager;
    address payable[] participants;

    event WinnerDeclared(address winner, uint amount);

    modifier onlyManager {
        require(msg.sender == manager, "Unauthorized!");
        _;
    }

    constructor() {
        manager = msg.sender;
    }

    receive() external payable {
        require(msg.value == 1 gwei, "Please pay 1 gwei to participate!");
        participants.push(payable(msg.sender));
    }

    function balanceOf() public view onlyManager returns(uint) {
        return address(this).balance;
    }

    function genRandom() public view returns(uint) {
        return uint(keccak256(abi.encodePacked(block.timestamp, participants.length)));
    }

    function declareWinner() public payable onlyManager {
        require(participants.length > 3, "Not enough participants!");

        address payable winner = participants[genRandom()%participants.length];
        uint amount = balanceOf();

        winner.transfer(amount);

        participants = new address payable[](0);

        emit WinnerDeclared(winner, amount);
    }
}

