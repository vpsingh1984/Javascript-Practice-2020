
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    // insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;
        
        if(!this.head) {
            this.head = node;
        }else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }
    // insert at index
    insertAt(data, index) {
        if(index === 0) {
            this.head = new Node(data, this.head);
        }
        // if index is out of range
        if(index > 0 && index > this.size){
            return;
        }

        const node = new Node(data);
        let current, previous;
        // set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }
    // get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return null;
    }
    // remove at
    removeAt(index) {
        let current = this.head;
        let previous;
        let count = 0;

        // remove first
        if(index === 0){
            this.head = current.next;
        }else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    // Remove by value
    removeByValue(value) {
        let current = this.head;
        let previous;
        if(current.data === value) {
            this.head = current.next;
            this.size--;
            return;
        }

        while(current) {
            if(current.next.data === value) {
                previous = current;
                previous.next = current.next.next;
                // console.log(current.next.data)
                this.size--;
                return;
            }
            current = current.next;
        }
    }

    // clear all data in list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // print list
    printList() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
const list = new LinkedList();
list.insertFirst(100);
list.insertFirst(200);
list.insertLast(300);
list.insertLast("hello");
list.insertLast("vijay");

// list.printList();
console.log("===============");
// list.removeAt(2);
console.log("===============");
// list.printList();

// ================Double Linked List==========================
class DoubleNode {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirst(data) {
        let node = new DoubleNode(data);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        }else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    insertLast(data) {
        let node = new DoubleNode(data)
        if(this.head === null) {
            this.head = node;
            this.tail = node; 
        }else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

}
const list2 = new DoubleLinkedList();
list2.insertFirst(500);
list2.insertFirst(400);

// console.log(list2);


// node.insertFirst("child");
// node.insertFirst("parent");
// node.insertFirst("grandpa");
// console.log(node.head);

// ================Create linked list from an array==========================

class LinkedListFromArray {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    createLinkedList(arr) {
        for(let item of arr) {
            this.head = new Node(item, this.head);
            this.size++;
        }
    }
}
const customArr = [2, 4, 6, 8, 10];
const listArray = new LinkedListFromArray();
listArray.createLinkedList(customArr);
console.log(listArray)

// ============Convert a Singly Linked List to an Array============
const linkedlist = {
    head: {
        data: 10,
        next: {
            data: 8,
            next: {
                data: 6,
                next: {
                    data: 4,
                    next: {
                        data: 2,
                        next: null
                    }
                }
            }
        }
    }
}
            
function ArrayFromLinkedList(linkedlist) {
    let current = linkedlist.head;
    let arrResult = [];

    while(current) {
        arrResult.unshift(current.data);
        current = current.next;
    }
    return arrResult;
}
console.log(ArrayFromLinkedList(linkedlist));