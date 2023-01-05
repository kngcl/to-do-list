import './styles/styles.css';
import Icon from './icon.png';

const todo = document.querySelector('.todo');
const btn = document.querySelector('.add');
const task = document.querySelector('.task-content');
let tod1;

function todoList() {
  tod1 = todo.value;
  if (tod1 === '') {
    alert('Please Enter A Task');
  } else {
    const todoItem = document.createElement('div');
    todoItem.classList.add('displayItem');
    todoItem.innerHTML = `<div class='task'>
    <input type='radio' name='radio' value='' class = "hello"> ${tod1}<i class='fa fa-trash icons'></i>
  </div>`;
    task.appendChild(todoItem);
    todoItem.querySelector('.hello').addEventListener('click', () => {
      todoItem.style.textDecoration = 'line-through';
    });
    todoItem.querySelector('.icons').addEventListener('click', () => {
      todoItem.remove();
    });
    const myIcon = new Image();
    myIcon.src = Icon;

    todoItem.appendChild(myIcon);
  }
}

btn.onclick = function displayContent() {
  todoList();
  todo.value = '';
};
