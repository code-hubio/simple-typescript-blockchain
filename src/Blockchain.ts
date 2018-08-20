// Blockchain.ts
import Block from './Block';

export default class Blockchain {
    public chain: Array<Block>;

    constructor() {
        this.chain = new Array();
        this.chain.push(this.getGenesis());
    }

    private getGenesis(): Block {
        const timestamp = Date.now();
        const data = 'Genesis';
        const previousHash = 'Genesis';
        const hash = Block.hashBlock(timestamp, data, previousHash);
        return new Block(timestamp, data, previousHash, hash);
    }

    public addBlock(data: string) {
        const timestamp = Date.now();
        const previousHash = this.chain[this.chain.length - 1].hash;
        const hash = Block.hashBlock(timestamp, data, previousHash);

        this.chain.push(new Block(timestamp, data, previousHash, hash));
    }

}
