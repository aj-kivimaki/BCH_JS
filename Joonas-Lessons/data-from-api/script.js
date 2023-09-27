const heading = document.querySelector("h3");
const section = document.querySelector("section");

const server = "https://jsonplaceholder.typicode.com";

const createApiURL = (path) => server + path;

/* fetch(createApiURL("/todos/1"))
  .then((response) => response.json())
  .then((json) => console.log(json)); */

async function getUser(id) {
  // TODO check the input: id
  const userURL = createApiURL("/users/" + id);
  const user = await fetch(userURL).then((response) => response.json());
  return user;
}

async function getTodo(id) {
  // TODO check the input: id
  const userURL = createApiURL("/todos/" + id);
  const todo = await fetch(userURL).then((response) => response.json());
  return todo;
}
/* async function getTodo(id) {
  const todoURL = createApiURL("/todos/" + id);
  fetch(todoURL)
    .then((response) => response.json())
    .then((json) => callback(json));
} */

// TODO write a callback function to console log the todo item
// TODO write a callback function to place the todo item on the webpage

async function printUser(callback) {
  const userTwo = await getUser(2);
  heading.textContent = userTwo.name;
  section.appendChild(callback(userTwo.address));
}

async function printTodo(callback) {
  const todo = await getTodo(5);
  heading.textContent = todo;
  section.appendChild(callback(todo));
}

function createAddressBlock(address) {
  const elem = document.createElement("div");
  elem.innerHTML = `
    <p class="address">
      ${address.street}&nbsp;${address.suite}<br/>
      ${address.city}
    </p>
  `;
  return elem;
}

function createTodoBlock(todo) {
  const elem = document.createElement("div");
  elem.innerHTML = `
    <p class="todo">
      ${todo.title}
    </p>
  `;
  return elem;
}

printUser(createAddressBlock);
printTodo(createTodoBlock);
