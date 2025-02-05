import { Connection, Keypair, PublicKey } from "@solana/web3.js"
import bs58 from 'bs58';
import { Wallet } from "@project-serum/anchor";

export const rpc = 'https://devnet-rpc.shyft.to?api_key=ArlRUsTpPi9P1m3K'; // ENTER YOUR RPC

export const connection = new Connection(rpc, {
  commitment: 'confirmed',
});

export const tipAcct = new PublicKey('Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY');

export const wallet = Keypair.fromSecretKey(
    bs58.decode(
      '5upxpg5ejFgwSVpw9k6xJodbhTRUHkDVq4W32hi6N11Bc8t1Mgc5ZUNeBsBPUeSFEGF6irqt44sFZdxT73QbGnjV' // PRIV KEY OF POOL CREATOR
    )
);

export const payer = Keypair.fromSecretKey(
  bs58.decode(
      '5upxpg5ejFgwSVpw9k6xJodbhTRUHkDVq4W32hi6N11Bc8t1Mgc5ZUNeBsBPUeSFEGF6irqt44sFZdxT73QbGnjV' // PRIV KEY OF FEE PAYER!!!!!!
  )
);

export const walletconn = new Wallet(wallet);

export const RayLiqPoolv4 = new PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8')