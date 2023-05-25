const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const num = 3;

const linkedList = new LinkedList();
const doubleLinkedList = new DoublyLinkedList();

const startLLH = Date.now();

for(let i = 1; i < num; i++){
    linkedList.addToHead(i);
}

const endLLH = Date.now();
console.log(`addToHead LL takes ${endLLH - startLLH} ms`);


const startDLLH = Date.now();

for(let i = 1; i < num; i++){
    doubleLinkedList.addToHead(i);
}

const endDLLH = Date.now();
console.log(`addToHead DLL takes ${endDLLH - startDLLH} ms`);



const startLLT = Date.now();

for (let i = 1; i < num; i++){
    linkedList.addToTail(i);
}

const endLLT = Date.now();
console.log(`addToTail LL takes ${endLLT - startLLT} ms`);


const startDLLT = Date.now();

for(let i = 1; i < num; i++){
    doubleLinkedList.addToTail(i);
}

const endDLLT = Date.now();
console.log(`addToTail DLL takes ${endDLLT - startDLLT} ms`);
