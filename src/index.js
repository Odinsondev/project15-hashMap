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

const content2 = document.getElementById('content2');
const mapContainer = document.getElementById('map-container');
//bind events

//functions

function renderHashMap() {
  mapContainer.innerHTML = ''; //clears the div when rerunning function
  //creates array elements
  for (let i = 0; i < testHashMap.array.length; i++) {
    if (testHashMap.array[i] === undefined) {
      const emptyArrayElement = document.createElement('div');
      emptyArrayElement.classList.add('empty-array-element');

      //calculates div size based on number of elements
      emptyArrayElement.style.width =
        (content2.offsetWidth - 100) / testHashMap.capacity + 'px';

      mapContainer.appendChild(emptyArrayElement);
    } else {
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

/*
//test1 - overwrite
test.set('apple', 'red2');
//test2 - grow
test.set('moon', 'silver');
//test3 - overwrite2
test.set('apple', 'red3');
test.set('banana', 'yellow3');
*/
