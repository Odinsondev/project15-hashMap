//Hash map
//uses linkedListModule.js

//Synthax:
//create list -   const hashMapName = hashMap();
//edit list -   hashMapName.methodName();
//Methods: hash(key), set(key, value), get(key), has(key), remove(key),
//length, clear, keys, values, entries
//detailed explanations before each function

export { hashMap };

import { createLinkedList } from './linkedListModule';

//functions

function hashMap() {
  const map = {};
  map.array = [];
  map.array.length = 16;
  map.capacity = 16;
  map.loadFactor = 0.75;
  map.totalKeys = 0;

  //Grows the array by 2x when load factor is exceeded
  map.grow = function () {
    let keyLimit = this.capacity * this.loadFactor;

    if (keyLimit < this.length()) {
      let savedEntries = this.entries();
      let newCapacity = this.capacity * 2;
      this.clear();
      this.array.length = newCapacity;
      this.capacity = newCapacity;
      this.totalKeys = 0;
      for (let i = 0; i < savedEntries.length; i++) {
        let key = savedEntries[i][0];
        let value = savedEntries[i][1];
        this.set(key, value);
      }
    } else {
      return;
    }
  };

  //Takes a key and produces a hash code with it
  map.hash = function (key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      //added % map.capacity (initially 16) to get hasCode between 0 - 15
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % map.capacity;
    }

    return hashCode;
  };

  //Takes two arguments, a key and a value that is assigned to this key - places
  //the key - value pair in a bucket (linked list in an array element).
  //If a key already exists, then the old value is overwritten.
  //If a key does not exist in the bucket, a node is created in a linked list.
  map.set = function (key, value) {
    let objectToInsert = { [key]: value };
    let index = map.hash(key);

    //self-imposed restriction (by the Odin project)
    if (index < 0 || index >= map.array.length) {
      throw new Error('Trying to access index out of bound');
    }

    //checks if array element is empty
    if (map.array[index] === undefined) {
      let linkedList = createLinkedList();
      linkedList.append(objectToInsert);

      map.array.splice(index, 1, linkedList);

      map.totalKeys += 1; //counts keys in hash map

      //checks if linked list is created but is empty
    } else if (
      map.array[index] !== undefined &&
      map.array[index].head === null
    ) {
      map.array[index].append(objectToInsert);
      map.totalKeys += 1;
    } else {
      let currentNode = map.array[index].head; //starting point for the for loop
      let linkedListLength = map.array[index].size();

      for (let i = 0; i < linkedListLength; i++) {
        //if the key already present in the bucket - overwrite
        if (Object.hasOwn(currentNode.value, key)) {
          currentNode.value = objectToInsert;
        } else {
          currentNode = currentNode.nextNode;

          //if key not present in bucket - add a node to linked list
          if (currentNode === null) {
            map.array[index].append(objectToInsert);
            map.totalKeys += 1;
          }
        }
      }
    }
    map.grow();
  };

  //Takes one argument as a key and returns the value that is assigned to this key
  //If a key is not found, returns null
  map.get = function (key) {
    let index = map.hash(key);
    let value = null;

    //checks if array element is empty
    if (map.array[index] === undefined) {
      console.log(value);
      return value;
    } else {
      let currentNode = map.array[index].head; //starting point for the for loop
      let linkedListLength = map.array[index].size();

      for (let i = 0; i < linkedListLength; i++) {
        //if bucket not empty and key is found
        if (Object.hasOwn(currentNode.value, key)) {
          value = currentNode.value[key];
          console.log(value);
          return value;
        } else {
          currentNode = currentNode.nextNode;

          //if bucket not empty but key is not found
          if (currentNode === null) {
            console.log(value);
            return value;
          }
        }
      }
    }
  };

  //takes a key as an argument and returns true or false based on whether or not
  //the key is in the hash map
  map.has = function (key) {
    let index = map.hash(key);

    //checks if array element is empty
    if (map.array[index] === undefined) {
      console.log('false');
      return false;
    } else {
      let currentNode = map.array[index].head; //starting point for the for loop
      let linkedListLength = map.array[index].size();

      for (let i = 0; i < linkedListLength; i++) {
        //if bucket not empty and key is found
        if (Object.hasOwn(currentNode.value, key)) {
          console.log('true');
          return true;
        } else {
          currentNode = currentNode.nextNode;

          //if bucket not empty but key is not found
          if (currentNode === null) {
            console.log('false');
            return false;
          }
        }
      }
    }
  };

  //Takes a key as an argument.
  //If the given key is in the hash map, removes the entry and returns true.
  //If the key isn’t in the hash map, it should returns false.
  map.remove = function (key) {
    let index = map.hash(key);

    //checks if array element is empty
    if (map.array[index] === undefined) {
      console.log('false');
      return false;
    } else {
      let currentNode = map.array[index].head; //starting point for the for loop
      let linkedListLength = map.array[index].size();

      for (let i = 0; i < linkedListLength; i++) {
        //if bucket not empty and key is found
        if (Object.hasOwn(currentNode.value, key)) {
          map.array[index].removeAt(currentNode.index); //removes the node
          map.totalKeys -= 1;
          console.log('true');
          return true;
        } else {
          currentNode = currentNode.nextNode;

          //if bucket not empty but key is not found
          if (currentNode === null) {
            console.log('false');
            return false;
          }
        }
      }
    }
  };

  //Returns the number of stored keys in the hash map
  map.length = function () {
    return map.totalKeys;
  };

  //Removes all entries in the hash map
  map.clear = function () {
    map.array.length = 0;
    map.array.length = 16;
    map.capacity = 16;
    map.totalKeys = 0;
  };

  //Returns an array containing all the keys inside the hash map
  map.keys = function () {
    let arrayOfKeys = [];

    for (let i = 0; i < map.array.length; i++) {
      if (map.array[i] !== undefined) {
        let currentNode = map.array[i].head; //starting point for the for loop
        let linkedListLength = map.array[i].size();

        for (let i = 0; i < linkedListLength; i++) {
          if (currentNode !== null) {
            let key = Object.keys(currentNode.value);
            arrayOfKeys = arrayOfKeys.concat(key);
            currentNode = currentNode.nextNode;
          }
        }
      }
    }
    console.log(arrayOfKeys);
    return arrayOfKeys;
  };

  //Returns an array containing all the values
  map.values = function () {
    let arrayOfValues = [];

    for (let i = 0; i < map.array.length; i++) {
      if (map.array[i] !== undefined) {
        let currentNode = map.array[i].head; //starting point for the for loop
        let linkedListLength = map.array[i].size();

        for (let i = 0; i < linkedListLength; i++) {
          if (currentNode !== null) {
            let value = Object.values(currentNode.value);
            arrayOfValues = arrayOfValues.concat(value);
            currentNode = currentNode.nextNode;
          }
        }
      }
    }
    console.log(arrayOfValues);
    return arrayOfValues;
  };

  //Returns an array that contains each key, value pair.
  //Example: [[firstKey, firstValue], [secondKey, secondValue]]
  map.entries = function () {
    let arrayOfEntries = [];

    for (let i = 0; i < map.array.length; i++) {
      if (map.array[i] !== undefined) {
        let currentNode = map.array[i].head; //starting point for the for loop
        let linkedListLength = map.array[i].size();

        for (let i = 0; i < linkedListLength; i++) {
          if (currentNode !== null) {
            let key = Object.keys(currentNode.value);
            let value = Object.values(currentNode.value);
            let entry = key.concat(value);
            arrayOfEntries.push(entry);
            currentNode = currentNode.nextNode;
          }
        }
      }
    }
    console.log(arrayOfEntries);
    return arrayOfEntries;
  };

  return map;
}
