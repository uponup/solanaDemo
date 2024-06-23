### 要点
- PDA是长度为32位的字符串，看起来和公钥很像，但是并没有与之对应的私钥
- findProgramAddress可以针对一个programId和seeds唯一确定地生成一个PDA。这里的seeds是指一组制定的字符串
- 一个字节用于将候选PDA推离ed25519椭圆曲线
- 程序通过传入种子和一字节参数，调用invoke_signed为PDA进行签名
- PDA只能被 用来派生出这个地址的程序 所签名
- 除了允许程序为不同的instruction签名之外，PDA还提供了一个像哈希表一样的接口，用于建立账户索引