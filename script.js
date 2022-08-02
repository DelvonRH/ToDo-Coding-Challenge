let toDoList = [];

const addTask = (ev) => {  
  ev.preventDefault();
  let todo = 
  {
    task: document.querySelector("input").value
  };
  toDoList.push(todo);
  
  const toDoListrow = document.getElementById('todo-row');

  for(let i = 0; i < toDoList.length; i++)
  {
    const taskDiv = document.createElement("div");
    const taskInput = document.createElement("span");

    taskDiv.setAttribute('id',"listItem");
    taskDiv.className = "trash";
   
    const pEl = document.createElement("p")
    pEl.innerText = toDoList[i].task;
    taskInput.append(pEl);

    taskDiv.append(taskInput);
    toDoListrow.append(taskDiv);
    
    toDoList = [];

    const input = document.getElementById("inputfield")
    input.value = "";
  }

  const trash = document.getElementsByClassName("trash");
  for(let i = 0; i < trash.length; i++)
  {
    trash[i].addEventListener('click', deleteTask);
  }
};

function deleteTask() 
{
  console.log("click")
  const del = document.getElementById("listItem");
  del.parentNode.removeChild(del);
};

document.querySelector("button").addEventListener('click', addTask);

