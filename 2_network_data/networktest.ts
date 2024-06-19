// //Next code is run ok, so I think must someting in web3.js is not work.
// //And it is a network problem.

// import { LAMPORTS_PER_SOL , clusterApiUrl } from "@solana/web3.js";
// import axios from 'axios'
// const url = clusterApiUrl("devnet")

// const data = {
//     jsonrpc: "2.0",
//     id: 1,
//     method: 'getBalance',
//     params: ['DpGhhTcRoTN7UNWPXdyEf67WHHjQgzNufQ9gawFDpbH9',{"encoding": "base58"}]
// }
// axios.post(url,data,{
//     headers: {
//         "Content-Type": "application/json"
//     }
// }).then((rsp) => {
//     //console.log(rsp.data)
//     console.log(rsp.data.result.value/LAMPORTS_PER_SOL)
// }).catch((e: any) => {
//     console.error(e.message)
//     console.log(e.code, e.response.status)
//     console.log(e.response.data)
// })



import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import axios from "axios";

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const address = new PublicKey('DpGhhTcRoTN7UNWPXdyEf67WHHjQgzNufQ9gawFDpbH9');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function fetchData() {
  let flag = true;
  let count = 0;
  while (flag) {
    console.log("start");
    try {
      const balance = await connection.getBalance(address);  
      console.log(`The balance of the account at ${address} is ${balance} lamports`);
      console.log(`✅ Finished!`);
      flag = false;
    } catch (e) {
      console.log("fail,", ++count);
    }
    await delay(200);
  }
}

fetchData();