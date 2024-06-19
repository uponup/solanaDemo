// Connect 对象用来建立到Solana网络集群的连接

import { Connection, clusterApiUrl } from "@solana/web3.js";

/// 连接测试网络
const conn = new Connection(clusterApiUrl('devnet'));
console.log(`✅ Connected!`);

