import './normalize.css';
import './style.css';

import { hashMap } from './hashMapModule';

//cache DOM

const testHashMap = hashMap();
testHashMap.set('apple', 'red');
testHashMap.set('banana', 'yellow');
testHashMap.set('carrot', 'orange');
testHashMap.set('dog', 'brown');
testHashMap.set('elephant', 'gray');
testHashMap.set('frog', 'green');
testHashMap.set('grape', 'purple');
testHashMap.set('hat', 'black');
testHashMap.set('ice cream', 'white');
testHashMap.set('jacket', 'blue');
testHashMap.set('kite', 'pink');
testHashMap.set('lion', 'golden');

const mapContainer = document.getElementById('map-container');
//bind events

//functions

function renderHashMap() {
  for (let i = 0; i < testHashMap.array.length; i++) {
    const arrayElement = document.createElement('div');
    arrayElement.classList.add('array-element');
    mapContainer.appendChild(arrayElement);
  }
}
renderHashMap();

/* console.log(test.array);

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

console.log(test.array); */
