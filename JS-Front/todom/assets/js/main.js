let tasks = JSON.parse(localStorage.getItem("@ToDom:tasks")) || [];

function renderTasks() {
  const tableElement = document.querySelector("#table");
  tableElement.innerHTML = "";

  tasks.map((task) => {
    const trTaskElement = document.createElement("tr");
    const tdTaskElement = document.createElement("td");
    const inputTaskElement = document.createElement("input");
    const tdTextTaskElement = document.createElement("td");
    const tdDeleteTaskElement = document.createElement("td");
    const iconTaskElement = document.createElement("i");

    inputTaskElement.setAttribute("type", "checkbox");
    inputTaskElement.addEventListener("click", () => completeTask(task.id));
    tdTaskElement.appendChild(inputTaskElement);

    tdTextTaskElement.innerText = `[${getPriority(task.priority)}] ${
      task.text
    }`;

    iconTaskElement.setAttribute("class", "material-icons");
    iconTaskElement.innerText = "delete";

    tdDeleteTaskElement.addEventListener("click", () => deleteTask(task.id));

    tdDeleteTaskElement.appendChild(iconTaskElement);

    if (task.complete) {
      trTaskElement.classList.add("done");
      inputTaskElement.checked = true;
    }

    trTaskElement.appendChild(tdTaskElement);
    trTaskElement.appendChild(tdTextTaskElement);
    trTaskElement.appendChild(tdDeleteTaskElement);
    tableElement.appendChild(trTaskElement);
  });

  saveToLocalStorage();
}

function getPriority(numPriority) {
  const PRIORITY = ["Baixa", "Média", "Alta"];

  return PRIORITY[numPriority - 1];
}

function saveToLocalStorage() {
  localStorage.setItem("@ToDom:tasks", JSON.stringify(tasks));
}

function deleteTask(idTask) {
  const confirmation = confirm(
    "Você tem certeza que deseja deletar está tarefa ?"
  );

  if (confirmation) {
    tasks = tasks.filter((task) => task.id !== idTask);
    renderTasks();
  }
}

function completeTask(idTask) {
  tasks = tasks.map((task) => {
    if (task.id === idTask) {
      task.complete = !task.complete;
    }
    return task;
  });

  renderTasks();
}

renderTasks();
