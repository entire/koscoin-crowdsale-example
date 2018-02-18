pragma solidity ^0.4.18;

import "./../node_modules/zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract KosCoin is MintableToken {
    string public name = "KosCoin";
    string public symbol = "KOS";
    uint8 public decimals = 18;

    uint256 public storedValue; // 256 bits unsigned integer

    // Constructor function. Runs once when the contract is deployed
    // Add any initialization operations here
    function KosCoin() public {
        storedValue = 100;
    }
    
    function add(uint256 number) public {
        storedValue = storedValue + number;
    }
    
    function subtract(uint256 number) public {
        storedValue = storedValue - number;
    }
    
    function multiply(uint256 number) public {
        storedValue = storedValue * number;
    }
    
    function divide(uint256 number) public {
        storedValue = storedValue / number;
    }
}