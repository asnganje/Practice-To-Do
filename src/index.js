import toDO from '../modules/ToDoList';
import './style.css';

const toDOlist = document.querySelector('.main');

const TASKS = () =>{
    let taskList = '';
    for(let i=0; i < toDO.length; i+=1 ){
        const list = `<div class="list-item">
        <input type="checkBox" name = "task" value = "task" ${toDO[i].completed}>
        <label for="item">${toDO[i].description}</label>
        <span class="material-symbols-outlined">more_vert</span>
        </div>`;
        taskList += list;
    }
    toDOlist.innerHTML = taskList;
    console.log(toDOlist);
};
TASKS();