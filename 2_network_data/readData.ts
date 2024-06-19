// 从测试网络的地址读取数据

import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

// https://solfaucet.com/
// https://faucet.solana.com/
const devnetUrl = clusterApiUrl('devnet');
console.log(devnetUrl);
const conn = new Connection(devnetUrl);
const address = new PublicKey('DpGhhTcRoTN7UNWPXdyEf67WHHjQgzNufQ9gawFDpbH9');

const balance = await conn.getBalance(address);

console.log(`The balance of the account at ${address} is ${balance} lamports`); 
console.log(`✅ Finished!`)
