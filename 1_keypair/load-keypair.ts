// 加载已存在的密钥对，私钥在.env文件中

import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment('SECRET_KEY');

console.log("我们使用evn文件成功加载了已存在的私钥：", keypair.secretKey);