const Task = document.getElementById('task');
const Btn = document.querySelector('.btn');
const form = document.querySelector('#task-form');
const Collection = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clear = document.querySelector('.clear-tasks');

loadEventListener();
function loadEventListener(){
	form.addEventListener('submit', addup);
	clear.addEventListener('click', taskclear);
	filter.addEventListener('keyup',Filter);
Collection.addEventListener('click',removeTask);

}
function addup(e){
if(task.value==='')
{
	alert('empty');
}

const li = document.createElement('li');
li.className= 'collection-item';

li.appendChild(document.createTextNode(Task.value));
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML= `<i class="fa fa-remove"></i>`;
li.appendChild(link);
Collection.appendChild(li);

Task.value ='';
e.preventDefault();

}
function taskclear(){
Collection.innerHTML ='';
}
function removeTask(e){

if (e.target.parentElement.classList.contains('delete-item')) {

e.target.parentElement.parentElement.remove();

}

}

function Filter (e){
	const text = e.target.value.toLowerCase();
	document.querySelectorAll('.collection-item').forEach(
function(task){
const item =task.firstChild.textContent;
	if (item.toLowerCase().indexOf(text) != -1) {

task.style.display = 'block';
	}
	else{
		task.style.display= 'none';
	}

		});
}











