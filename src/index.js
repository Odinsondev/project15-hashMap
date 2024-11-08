import './normalize.css';
import './style.css';

import { hashMap } from './hashMapModule';

//cache DOM

//bind events

//functions

const test = hashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.array);

test.set('apple', 'red2');
test.set('banana', 'yellow2');
test.set('carrot', 'orange2');
test.set('dog', 'brown2');
test.set('elephant', 'gray2');
test.set('frog', 'green2');
test.set('grape', 'purple2');
test.set('hat', 'black2');
test.set('ice cream', 'white2');
test.set('jacket', 'blue2');
test.set('kite', 'pink2');
test.set('lion', 'golden2');

console.log(test.array);

test.set('moon', 'silver');

console.log(test.array);

test.set('apple', 'red3');
test.set('banana', 'yellow3');
test.set('carrot', 'orange3');
test.set('dog', 'brown3');
test.set('elephant', 'gray3');
test.set('frog', 'green3');
test.set('grape', 'purple3');
test.set('hat', 'black3');
test.set('ice cream', 'white3');
test.set('jacket', 'blue3');
test.set('kite', 'pink3');
test.set('lion', 'golden3');

console.log(test.array);
