import './normalize.css';
import './style.css';

import { hashMap } from './hashMapModule';
import { createLinkedList } from './linkedListModule';

//cache DOM

//bind events

//functions
console.log('Testing: set');

const newHashMap = hashMap();
console.log(newHashMap.hash('a'));
newHashMap.set('a', 'test');

console.log(newHashMap.hash('a'));
newHashMap.set('a', 'testnew');

console.log(newHashMap.hash('ab'));
newHashMap.set('ab', 'test2');

console.log(newHashMap.hash('ab'));
newHashMap.set('ab', 'test2new');

console.log(newHashMap.hash('ak'));
newHashMap.set('ak', 'test3');

console.log(newHashMap.array);

console.log('Testing: get');
console.log('Test1:');
newHashMap.get('a');
console.log('Test2:');
newHashMap.get('ab');
console.log('Test:3');
newHashMap.get('bc');
console.log('Test4:');
newHashMap.get('fghdf');
console.log('Test5:');
newHashMap.get('ak');

console.log('Testing: has');
console.log('Test1:');
newHashMap.has('a');
console.log('Test2:');
newHashMap.has('ab');
console.log('Test:3');
newHashMap.has('bc');
console.log('Test4:');
newHashMap.has('fghdf');
console.log('Test5:');
newHashMap.has('ak');
console.log(newHashMap.array);

console.log('Testing: remove');
newHashMap.remove('a');
console.log(newHashMap.array);
newHashMap.remove('ab');
console.log(newHashMap.array);

newHashMap.set('a', 'test');
console.log(newHashMap.array);

console.log('Testing: length');
newHashMap.length();

/* console.log('Testing: clear');
newHashMap.clear();
console.log(newHashMap.array); */

console.log('Testing: keys');
newHashMap.keys();

console.log('Testing: values');
newHashMap.values();

console.log('Testing: entries');
newHashMap.entries();

console.log('Testing: grow');
newHashMap.grow();
console.log(newHashMap.array);

newHashMap.grow();
console.log(newHashMap.array);
