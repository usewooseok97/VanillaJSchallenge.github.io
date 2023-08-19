const todoform = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todolist = document.getElementById('todo-list');
let TodoAry = [];
const TODO_KEY = 'todos'
function SetTodo(){
    localStorage.setItem(TODO_KEY, JSON.stringify(TodoAry));
    
}

function DelSpan(event){
    const Delli = event.target.parentElement;
    TodoAry = TodoAry.filter((item) => item.id !== parseInt(Delli.id));
    SetTodo();
    Delli.remove();
}
function PaintTodo(Input){
    const Li = document.createElement('li');
    const Span = document.createElement('span');
    const Button = document.createElement('button');
    Li.appendChild(Span);
    Li.appendChild(Button);
    Li.id = Input.id;
    Span.innerText = Input.Text;
    Button.innerText = "❌";
    Button.addEventListener('click', DelSpan);
    document.body.appendChild(Li);    
}
function handleTodoSubmit(event){
    event.preventDefault();
    const Input = todoInput.value;
    todoInput.value = '';
    const InputObj = {
        Text:Input,
        id:Date.now(),
    };
    TodoAry.push(InputObj);
    PaintTodo(InputObj);
    SetTodo();
}
todoform.addEventListener("submit", handleTodoSubmit);

const GetTodo = localStorage.getItem(TODO_KEY);
if(GetTodo){
    const Parsetodo = JSON.parse(GetTodo);
    TodoAry = Parsetodo;
    Parsetodo.forEach(PaintTodo);
}