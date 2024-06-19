import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(`✅ Generated keypair!`);
console.log("keypair的公钥是：", keypair.publicKey.toBase58());
console.log("keypair的私钥是：", keypair.secretKey)


/// DpGhhTcRoTN7UNWPXdyEf67WHHjQgzNufQ9gawFDpbH9