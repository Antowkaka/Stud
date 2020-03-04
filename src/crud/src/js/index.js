const create = document.querySelector('.create');
const read = document.querySelector('.read');
const update = document.querySelector('.upd');
const del = document.querySelector('.del');
const ol = document.querySelector('ol');
const infoArr = document.querySelectorAll('.text-info');
let state = [];
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
    for(let i = 0; i < 4; i++) {
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
/*function stateToLS(){
    localStorage.
}*/
//localstorage handling funcs
function createNewUser(){
    const newPerson = {
        id : infoArr[0].value,
        fname: infoArr[1].value,
        lname: infoArr[2].value,
        age: infoArr[3].value
    }
    console.log(newPerson);
    state.push(newPerson);
    localStorage.setItem('person_state', JSON.stringify(state));
    return newPerson;
}
function createInfoRowFromState(stateObj) {
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
    state = JSON.parse(localStorage.getItem('person_state'));
    for(let iter in state) createInfoRowFromState(state[iter]);
}
function deleteUser(s){
    for(let i in s){
        if(s[i].id == infoArr[0].value) s.splice(i, 1)
    }
    localStorage.setItem('person_state', JSON.stringify(s));
}
function updateUser(s){
    for(let i in s){
        console.log(s[i]);
        if(s[i].id == infoArr[0].value){
            s[i].fname = infoArr[1].value;
            s[i].lname = infoArr[2].value;
            s[i].age = infoArr[3].value;
        }
    }
    localStorage.setItem('person_state', JSON.stringify(s));
}


//listeners
create.addEventListener('click', ()=>{
    newRow = createNewUser();
    createInfoRow(newRow);
});
update.addEventListener('click', ()=>{
    if(state != []) updateUser(state);
    updateInfo()});
del.addEventListener('click', ()=>{
    if(state != []) deleteUser(state);
    deleteInfoRow();
});
read.addEventListener('click', readLocalStore);

module.exports = {
    clearAfter,
    setInfo,
    createInfoRow,
    updateInfo,
    deleteInfoRow,

}