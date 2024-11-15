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

const resultText = document.getElementById('result-text');
const content2 = document.getElementById('content2');
const mapContainer = document.getElementById('map-container');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

const hashButton = document.getElementById('hash-button');
const setButton = document.getElementById('set-button');
const getButton = document.getElementById('get-button');
const hasButton = document.getElementById('has-button');
const removeButton = document.getElementById('remove-button');
const lengthButton = document.getElementById('length-button');
const clearButton = document.getElementById('clear-button');
const keysButton = document.getElementById('keys-button');
const valuesButton = document.getElementById('values-button');
const entriesButton = document.getElementById('entries-button');

//bind events

hashButton.addEventListener('click', hashTheKey);
setButton.addEventListener('click', setKeyAndValue);
getButton.addEventListener('click', getValue);
hasButton.addEventListener('click', has);
removeButton.addEventListener('click', remove);
lengthButton.addEventListener('click', printLength);
clearButton.addEventListener('click', clearArray);
keysButton.addEventListener('click', printKeys);
valuesButton.addEventListener('click', printValues);
entriesButton.addEventListener('click', printEntries);

//functions

function renderHashMap() {
  mapContainer.innerHTML = ''; //clears the div when rerunning function
  //creates array elements
  for (let i = 0; i < testHashMap.array.length; i++) {
    //creates empty array elements
    if (testHashMap.array[i] === undefined) {
      const emptyArrayElement = document.createElement('div');
      emptyArrayElement.classList.add('empty-array-element');

      //calculates div size based on number of elements
      emptyArrayElement.style.width =
        (content2.offsetWidth - 100) / testHashMap.capacity + 'px';

      mapContainer.appendChild(emptyArrayElement);

      //creates empty array elements if elements contain empty linked list
    } else if (testHashMap.array[i].head === null) {
      const emptyArrayElement = document.createElement('div');
      emptyArrayElement.classList.add('empty-array-element');

      //calculates div size based on number of elements
      emptyArrayElement.style.width =
        (content2.offsetWidth - 100) / testHashMap.capacity + 'px';

      mapContainer.appendChild(emptyArrayElement);
    } else {
      //creates non-empty array elements
      const arrayElement = document.createElement('div');
      arrayElement.classList.add('array-element');

      //creates linked list nodes
      for (let j = 0; j < testHashMap.array[i].size(); j++) {
        const linkedListNode = document.createElement('div');
        linkedListNode.classList.add('linked-list-node');

        linkedListNode.style.width =
          (content2.offsetWidth - 100) / testHashMap.capacity + 'px';

        let currentNode = testHashMap.array[i].at(j + 1);

        const keyText = document.createElement('p');
        keyText.textContent = 'K: ' + Object.keys(currentNode.value);
        linkedListNode.appendChild(keyText);

        const valueText = document.createElement('p');
        valueText.textContent = 'V: ' + Object.values(currentNode.value);
        linkedListNode.appendChild(valueText);

        arrayElement.appendChild(linkedListNode);
      }
      mapContainer.appendChild(arrayElement);
    }
  }
}
renderHashMap();

window.onresize = renderHashMap;

function hashTheKey() {
  const key = input1.value;
  resultText.textContent = testHashMap.hash(key);
  input1.value = '';
}

function setKeyAndValue() {
  const key = input1.value;
  const value = input2.value;
  testHashMap.set(key, value);
  input1.value = '';
  input2.value = '';
  renderHashMap();
}

function getValue() {
  const key = input1.value;
  const result = testHashMap.get(key);
  if (result === null) {
    //to display null as the returned result
    resultText.textContent = 'null';
  } else {
    resultText.textContent = result;
  }
  input1.value = '';
}

function has() {
  const key = input1.value;
  resultText.textContent = testHashMap.has(key);
  input1.value = '';
}

function remove() {
  const key = input1.value;
  resultText.textContent = testHashMap.remove(key);
  input1.value = '';
  renderHashMap();
}

function printLength() {
  resultText.textContent = testHashMap.length();
}

function clearArray() {
  testHashMap.clear();
  renderHashMap();
}

function printKeys() {
  resultText.textContent = JSON.stringify(testHashMap.keys());
}

function printValues() {
  resultText.textContent = JSON.stringify(testHashMap.values());
}

function printEntries() {
  resultText.textContent = JSON.stringify(testHashMap.entries());
}
