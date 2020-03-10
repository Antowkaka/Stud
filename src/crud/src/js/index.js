const create = document.querySelector('.create');
const read = document.querySelector('.read');
const update = document.querySelector('.upd');
const del = document.querySelector('.del');
const ol = document.querySelector('ol');
const infoArr = document.querySelectorAll('.text-info');
const radioArr = document.querySelectorAll("input[name=togl]");
let togl = 'localstore';
let keys = [];
let readObj;
let db;
let newRow;


//handling funcs
function clearAfter() {
    for(let i in infoArr) infoArr[i].value = '';
}
function setInfo(list) {
    for(let i = 0; i < list.length; i++){
        infoArr[i].value = list[i].innerText;
    }
}
function createInfoRow(){
    if(infoArr[0].value == 0 || infoArr[0].value == '') return alert('ID < 1');
    for(let iter = 1; iter <= ol.childNodes.length-1; iter++){
        if(infoArr[0].value == ol.childNodes[iter].childNodes[0].innerText){
            console.log(ol.childNodes[iter].childNodes[0].innerText);
            return alert('Такой ID уже существует!');
        }
    }
    let li = document.createElement('li');
    li.setAttribute('onclick', 'setInfo(this.childNodes)');
    for(let i = 0; i < 6; i++) {
        let div = document.createElement('div');
        div.className = 'info';
        div.append(infoArr[i].value);// change
        li.append(div);
    }
    if(ol.childNodes.length == 1){
        ol.append(li);
    }else{
        for(let iter = 1; iter <= ol.childNodes.length-1; iter++){
            if(infoArr[0].value > ol.childNodes[iter].childNodes[0].innerText){
                ol.childNodes[iter].after(li);
                //ol.childNodes.length--;
                console.log('After work');
                //break;
            }else{
                ol.childNodes[iter].before(li);
                console.log('Before work');
                //break;
            }
        }
    }
    clearAfter();
}
function updateInfo(){
    for(let iter = 1; iter <= ol.childNodes.length-1; iter++){
        if(infoArr[0].value == ol.childNodes[iter].childNodes[0].innerText){
            ol.childNodes[iter].childNodes[1].innerText = infoArr[1].value;
            ol.childNodes[iter].childNodes[2].innerText = infoArr[2].value;
            ol.childNodes[iter].childNodes[3].innerText = infoArr[3].value;
            ol.childNodes[iter].childNodes[4].innerText = infoArr[4].value;
            ol.childNodes[iter].childNodes[5].innerText = infoArr[5].value;
        }
    }
    clearAfter();
}
function deleteInfoRow(){
    for(let iter = 1; iter <= ol.childNodes.length-1; iter++){
        if(infoArr[0].value == ol.childNodes[iter].childNodes[0].innerText){
            ol.childNodes[iter].remove();
        }
    }
    clearAfter();
}
function clearAll() {
    const nodeListLength = ol.childNodes.length-1;
    for(let iter = 1; iter <= nodeListLength; iter++){
            ol.childNodes[1].remove();
    }
}
//IndexedDB func
function dbReady() {
    let openRequest = indexedDB.open("store", 1);

    openRequest.onupgradeneeded = e => {
        db = e.target.result;

        const dbState = db.createObjectStore('persons', {keyPath: 'id'});
        console.log("Upgrade", openRequest.onupgradeneeded);
    };

    openRequest.onerror = function() {
        console.error("Error", openRequest.error);
    };

    openRequest.onsuccess = e => {
        db = e.target.result;
        console.log("Sucess", openRequest.onsuccess);
        readIndexedDB();
    };
    return true;
}
//create USER
function createNewUser(){
    const newPerson = {
        id : infoArr[0].value,
        fname: infoArr[1].value,
        lname: infoArr[2].value,
        age:   infoArr[3].value,
        email: infoArr[4].value,
        phone: infoArr[5].value
    }
    console.log(newPerson);
    keys.push(newPerson.id);
    return newPerson;
}


function createInfoRowFrom(stateObj) {
    let li = document.createElement('li');
    li.setAttribute('onclick', 'setInfo(this.childNodes)');
    for(let i of ['id', 'fname', 'lname', 'age']) {
        let div = document.createElement('div');
        div.className = 'info';
        div.append(stateObj[i]);// change
        li.append(div);
    }
    if(ol.childNodes.length == 1){
        ol.append(li);
    }else{
        for(let iter = 1; iter <= ol.childNodes.length-1; iter++){
            if(stateObj['id'] > ol.childNodes[iter].childNodes[0].innerText){
                ol.childNodes[iter].after(li);
                //ol.childNodes.length--;
                console.log('After work');
                //break;
            }else{
                ol.childNodes[iter].before(li);
                console.log('Before work');
                //break;
            }
        }
    }
}

function readLocalStore(){
    if(localStorage !== undefined){
        for (key in localStorage) {
            if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
                readObj = JSON.parse(localStorage.getItem(key));
                createInfoRowFrom(readObj);
            }
        }
    } 
}

function readIndexedDB(){
    console.log(db);
    const objStore = db.transaction('persons').objectStore('persons');
    const allPeople = objStore.getAll();
    allPeople.onsuccess = function() {
        //console.log('This ', allPeople.result);
        for(let readObj of allPeople.result){
            createInfoRowFrom(readObj);
        }
    }
}

function addTo(pers){
    //add to LocalStorage 
    if(togl === 'localstore'){
        const persKey = pers.id;
        localStorage.setItem(persKey, JSON.stringify(pers));
    }
    //add to IndexedDB
    else{
        const tx = db.transaction('persons', 'readwrite')
        const persList = tx.objectStore('persons')
        persList.add(pers);
    }
}

function updateIn(key) {
    if(keys.includes(key)){
        //update in LocalStorage 
        if(togl === 'localstore'){
            if(key in localStorage){
                const updPers = createNewUser();
                localStorage.setItem(key, JSON.stringify(updPers))
            }
        }
        //update in IndexedDB
        else{
            const tx = db.transaction('persons', 'readwrite')
            const persList = tx.objectStore('persons')
            const updPers = createNewUser()
            persList.put(updPers);
        }
    } else {
        alert('ID not defined');
    }
}

function deletFrom(key) {
    //del from LocalStorage 
    if(togl === 'localstore'){
        localStorage.removeItem(key);
    }
    //del from IndexedDB
    else{
        const tx = db.transaction('persons', 'readwrite')
        const persList = tx.objectStore('persons')
        persList.delete(key);
    }
}

//listeners
window.addEventListener('DOMContentLoaded', readLocalStore);
create.addEventListener('click', ()=>{
    newRow = createNewUser();
    if(infoArr[0].value !== '') {
        addTo(newRow);
        createInfoRow(newRow);
    }
});
update.addEventListener('click', ()=>{
    updateIn(infoArr[0].value);
    updateInfo()});
del.addEventListener('click', ()=>{
    if(localStorage.length != 0) deletFrom(infoArr[0].value);
    deleteInfoRow();
});
for(let radio of radioArr){
    radio.addEventListener('change', function() {
        if(this.checked) {
            togl = this.value;
            if(togl === 'indexeddb'){
                clearAll();
                dbReady();
            }else{
                clearAll();
                readLocalStore();
                //db.close();
            }
        }
    });
}