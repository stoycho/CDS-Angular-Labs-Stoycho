let todosContainer = document.querySelector('ul.todosContainer');
let fetchBTN = document.querySelector('.fetchBTN');
let removeBTN = document.querySelector('.removeBTN');

let todosURL = 'https://jsonplaceholder.typicode.com/todos';

function renderTodos(todos) {
	console.dir(todos);

	todos.forEach(todo => {
		// create Todo HTML content:
		todoHTML = `
		<span class="id">${todo.id}</span>
		<span class="title">${todo.title}</span>
		<span class="completed">${todo.completed}</span>
		`
		// create and isert the LI DOM object:
		let liNode = document.createElement('LI');
		liNode.innerHTML = todoHTML;
		todosContainer.appendChild(liNode);
	});

}

function fetchTodos() {
	fetch(todosURL)
	.then(function (response){
		return response.text();
	})
	.then(function (responseText){
		// create JS data structure from todos data (JSON)
		let todos = JSON.parse(responseText);
		renderTodos(todos);
	})
}

function removeTodos() {
	todosContainer.innerHTML = "";
}

fetchBTN.addEventListener('click', fetchTodos);
removeBTN.addEventListener('click', removeTodos);

