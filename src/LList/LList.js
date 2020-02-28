const { List } = require('../List/List');
let { Node } = require('../List/Node');

//object LList and inheritance
function LList(array){
    List.apply(this, arguments);
    this.defArr = array;
    this.nodesArr = [];
    this.pos = 0;
    this.root = new Node(array[0]);
    this.init();
}
LList.prototype = Object.create(List.prototype);
LList.prototype.constructor = LList;

//main functions
LList.prototype.addStart = function(value){
    this.root.next = this.root;
    this.root.value = value;
};
LList.prototype.init = function () {
    let currentNode = this.root;
    let count = 1;
    do {
        if(count > 1) currentNode = currentNode.next;
        if(this.defArr[count]) currentNode.next = new Node(this.defArr[count]);
        count++;
    }while (currentNode.next != null);
};
LList.prototype.size = function() {
    let deep = 0;
    let iter;
    if(this.root){
        deep = 1;
        iter = this.root;
    }else return 'Root is empty';
    while(iter.next != null){
        deep++;
        iter = iter.next;
    } 
    return `Node size is ${deep}`;
};
LList.prototype.reset = function(){
    this.nodesArr = [];
    this.init();
    return 'Reset!';
};
let arr = new LList([3, 5, 0, 6, 7, 8, 3, 6, 9, 3, 7]);
console.log(arr.reset());
console.log(arr.root);