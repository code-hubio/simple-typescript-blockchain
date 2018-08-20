// App.ts
import Blockchain from './Blockchain';

let bc = new Blockchain();
bc.addBlock('foo');
bc.addBlock('bar');
console.log(bc.chain);