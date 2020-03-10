const { List } = require('../../../List/List');
const { Node } = require('../../../List/Node');

// object LList and inheritance
function LList(array) {
  List.apply(this, arguments);
  this.defArr = array;
  this.root = new Node(array[0]);
  this.init();

  this.help = function() {
    console.group('Functions List:');
    let i = 1;
    for (const key in LList.prototype) console.log(i++, key);
  };
}
LList.prototype = Object.create(List.prototype);
LList.prototype.constructor = LList;

// main functions
// done
LList.prototype.init = function(array = this.defArr) {
  let currentNode;
  currentNode = this.root;
  let count = 1;
  do {
    if (count > 1) currentNode = currentNode.next;
    if (array[count]) {
      currentNode.next = new Node(array[count]);
    }
    count++;
  } while (currentNode.next != null);
};
// done
LList.prototype.addStart = function(value) {
  const newRoot = new Node(value);
  newRoot.next = this.root;
  this.root = newRoot;
  return this.size();
};
// done
LList.prototype.addEnd = function(value) {
  let elem;
  if (this.root) {
    elem = this.root;
  } else return 'Root is empty';
  do {
    elem = elem.next;
    if (elem.next == null) {
      elem.next = new Node(value);
      break;
    }
  } while (elem.next != null);
  return this.size();
};
// done
LList.prototype.addPos = function(index, value) {
  let currentNode = this.root;
  let lastKey;
  let iter = 1;
  if (index > this.size() - 1 || index <= 0) {
    return 'Index not defined';
  }
  do {
    if (iter === index) {
      lastKey = currentNode;
      currentNode = new Node(value);
      currentNode.next = lastKey.next;
      lastKey.next = currentNode;
      break;
    }
    currentNode = currentNode.next;
    iter++;
  } while (currentNode.next != null);
  return this.size();
};
// done
LList.prototype.delFirst = function() {
  const firstNodeVal = this.root.value;
  const nodeWithoutFirst = new Node(this.root.next.value);
  nodeWithoutFirst.next = this.root.next.next;
  this.root = nodeWithoutFirst;
  return firstNodeVal;
};
// done
LList.prototype.delEnd = function() {
  let endNodeVal;
  let elem;
  if (this.root) {
    elem = this.root;
  } else return 'Root is empty';
  do {
    elem = elem.next;
    if (elem.next.next == null) {
      endNodeVal = elem.next.value;
      elem.next = null;
    }
  } while (elem.next != null);
  return endNodeVal;
};
// done
LList.prototype.delPos = function(index) {
  let posNodeVal;
  let lastKey;
  let iter = 0;
  let currentNode = this.root;
  if (index < 0 || index > this.size() - 1) {
    return 'Index out';
  }
  do {
    if (iter === index) {
      posNodeVal = currentNode.value;
      lastKey.next = currentNode.next;
      break;
    }
    lastKey = currentNode;
    currentNode = currentNode.next;
    iter++;
  } while (currentNode.next != null);
  return posNodeVal;
};
// done
LList.prototype.get = function(index) {
  let getElem;
  if (index > this.size() - 1 || index < 0) {
    return 'Index not defined';
  }
  let deep = 0;
  let elem = this.root;
  do {
    if (deep === index) {
      getElem = elem.value;
    }
    deep++;
    elem = elem.next;
    if (elem.next == null) deep++;
  } while (elem.next != null);
  return getElem;
};
// done
LList.prototype.set = function(index, value) {
  if (index > this.size() - 1 || index < 0) {
    return 'Index not defined';
  }
  let deep = 0;
  let elem = this.root;
  do {
    if (deep === index) {
      elem.value = value;
    }
    deep++;
    elem = elem.next;
    if (elem.next == null) deep++;
  } while (elem.next != null);
  return this.size();
};
// done
LList.prototype.toString = function() {
  let elem;
  let str = '';
  if (this.root) {
    elem = this.root;
  } else return 'Root is empty';
  do {
    str += elem.value;
    elem = elem.next;
    if (elem.next == null) str += elem.value;
  } while (elem.next != null);
  return str;
};
// done
LList.prototype.max = function() {
  let max = this.root.value;
  let elem = this.root;
  do {
    elem = elem.next;
    if (max < elem.value) {
      max = elem.value;
    }
  } while (elem.next != null);
  return max;
};
// done
LList.prototype.min = function() {
  let min = this.root.value;
  let elem = this.root;
  do {
    elem = elem.next;
    if (min > elem.value) {
      min = elem.value;
    }
  } while (elem.next != null);
  return min;
};
// done
LList.prototype.sort = function() {
  let helpArr = this.defArr;
  let x = 0;
  for (let i = 0; i < this.size(); i++) {
    let min = i;
    for (let j = i + 1; j < this.size(); j++) {
      if (helpArr[min] > helpArr[j]) {
        min = j;
      }
    }
    x = helpArr[min];
    helpArr[min] = helpArr[i];
    helpArr[i] = x;
  }
  this.root = new Node(helpArr[0]);
  this.init(helpArr);
  return helpArr;
};
// done
LList.prototype.maxIndex = function() {
  let max = this.root.value;
  let elem = this.root;
  let maxPos;
  let i = 0;
  do {
    elem = elem.next;
    i++;
    if (max < elem.value) {
      max = elem.value;
      maxPos = i;
    }
  } while (elem.next != null);
  return maxPos;
};
// done
LList.prototype.minIndex = function() {
  let min = this.root.value;
  let elem = this.root;
  let minPos;
  let i = 0;
  do {
    elem = elem.next;
    i++;
    if (min > elem.value) {
      min = elem.value;
      minPos = i;
    }
  } while (elem.next != null);
  return minPos;
};
// done
LList.prototype.reverse = function() {
  let revArr = [];
  let iter = this.size() - 1;
  let currElem = this.root;
  do {
    revArr[iter] = currElem.value;
    iter--;
    currElem = currElem.next;
  } while (currElem !== null);
  this.root = new Node(revArr[0]);
  this.init(revArr);
  return revArr;
};
// done
LList.prototype.halfReverse = function() {
  const arrLn = this.size();
  const halfLn = parseInt(arrLn / 2, 10);
  const helpArr = this.defArr;
  let temp;
  if (this.size() % 2 === 0) {
    for (let i = 0, j = halfLn; i < halfLn && j < arrLn; i++, j++) {
      temp = helpArr[j];
      helpArr[j] = helpArr[i];
      helpArr[i] = temp;
    }
  } else {// [9, 7, 4, 8, 2, 3, 5, 8]
    for (let i = 0, j = halfLn + 1; i < halfLn + 1 && j < arrLn; i++, j++) {
      temp = helpArr[j];
      helpArr[j] = helpArr[i];
      helpArr[i] = temp;
    }
  }
  this.root = new Node(helpArr[0]);
  this.init(helpArr);
  return helpArr;
};
// done
LList.prototype.size = function() {
  let deep = 0;
  let elem = this.root;
  do {
    deep++;
    elem = elem.next;
    if (elem.next == null) {
      deep++;
    }
  } while (elem.next != null);
  return deep;
};
// done
LList.prototype.toArray = function() {
  let iter = 0;
  let elem;
  const arrNodes = [];
  if (this.root) {
    elem = this.root;
  } else return 'Root is empty';
  do {
    arrNodes[iter] = elem;
    iter++;
    elem = elem.next;
    if (elem.next == null) arrNodes[iter] = elem;
  } while (elem.next != null);
  return arrNodes;
};
// done
LList.prototype.reset = function() {
  this.init();
  return 'Reset!';
};

const arr = new LList([9, 3, 5, 8, 2, 7, 4, 8]);
console.log(arr.reset());
console.log('Arr size ', arr.size());
console.log('String 1 ', arr.toString());
console.log('Min val ', arr.min());
console.log('Sort ', arr.halfReverse());
console.log('Arr  ', arr.toArray());
// console.log(arr.size());

module.exports.LList = LList;
