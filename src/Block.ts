// Block.ts
import * as CryptoJS from 'crypto-js';

export default class Block {
    public timestamp: number;
    public data: string;
    public previousHash: string;
    public hash: string;

    constructor(timestamp, data, previousHash, hash) {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = hash;
    }

    public static hashBlock(timestamp, data, previousHash): string {
        return CryptoJS.SHA256(`${timestamp}${previousHash}${data}`).toString()
    }
}