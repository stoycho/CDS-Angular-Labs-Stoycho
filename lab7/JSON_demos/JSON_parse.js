let JSON_data = `
[
	{
		"userId": 1,
		"id": 1,
		"title": "delectus aut autem",
		"completed": false
	},
	{
		"userId": 1,
		"id": 2,
		"title": "quis ut nam facilis et officia qui",
		"completed": false
	}
]
`;


// log in console the Todo's title
let todos = JSON.parse(JSON_data);

function parseTodo(todo) {
	console.log(todo.title);
}


