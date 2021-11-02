import fetch from 'node-fetch';
import Web3 from 'web3'
import ethers from 'ethers';

async function main() {
    const response = await fetch('https://api.etherscan.io/api?module=contract&action=getabi&address=0x15A2d6C2b4B9903C27f50Cb8B32160ab17F186E2&apikey=AW3RCCGTIYWS6RJCWFE2XPUDJJ14CVAUF3');
    const data = await response.json();

    let abi = data.result;
    console.log(abi)


    let web3 = new Web3(
  // Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
    new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/54c5be375c3c427287641b5d18b1ec0d")
    );

    const instance = new web3.eth.Contract(data,"0xC1dcBB3E385Ef67f2173A375F63f5F4361C4d2f9");


    //let privatekey = "17e2a14083517daee29a30f5fa4e14ab7a8197cdb3af847a2fba9a3e1b98f008";
    //let wallet = new ethers.Wallet(privatekey, provider);

    //console.log("Using wallet address " + wallet.address);

    //let contractaddress = "0xC1dcBB3E385Ef67f2173A375F63f5F4361C4d2f9";
    //let contract = new ethers.Contract(contractaddress, abi, wallet);

    //balance = await provider.getBalance("ethers.eth")
// { BigNumber: "2337132817842795605" }

// Often you need to format the output to something more user-friendly,
// such as in ether (instead of wei)

// '2.337132817842795605'
    //console.log("ethers.eth balance" + ethers.utils.formatEther(balance).toString())

    // calling the "retrieve" function to read the stored value
    //let read = await contract.max_tokens();
    //console.log("Value stored in contract is " + read.toString());
}

main();
