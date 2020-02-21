const create = document.querySelector('.create');
const read = document.querySelector('.read');
const update = document.querySelector('.upd');
const del = document.querySelector('.del');
const ol = document.querySelector('ol');
const infoArr = document.querySelectorAll('.text-info');


//handling funcs
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
        div.append(infoArr[i].value);
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
    //ol.append(li);
    //console.log('Ol child nodes - ', ol.childNodes.length);
}
function updateInfo(){
    for(let iter = 1; iter <= ol.childNodes.length-1; iter++){
        if(infoArr[0].value == ol.childNodes[iter].childNodes[0].innerText){
            ol.childNodes[iter].childNodes[1].innerText = infoArr[1].value;
            ol.childNodes[iter].childNodes[2].innerText = infoArr[2].value;
            ol.childNodes[iter].childNodes[3].innerText = infoArr[3].value;
        }
    }
}
function deleteInfoRow(){
    for(let iter = 1; iter <= ol.childNodes.length-1; iter++){
        if(infoArr[0].value == ol.childNodes[iter].childNodes[0].innerText){
            ol.childNodes[iter].remove();
        }
    }
}

//listeners
create.addEventListener('click', createInfoRow);
update.addEventListener('click', updateInfo);
del.addEventListener('click', deleteInfoRow);