const tasks = getLocalStorage();
const formElement = document.querySelector("#form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const { value } = event.target.tf_2do;

  if (value !== "") {
    addTask(value);
    event.target.tf_2do.value = "";
  } else {
    alert("Digite algo animal");
  }
});

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("@ToDom:tasks")) || [];
}

function saveToLocalStorage() {
  localStorage.setItem("@ToDom:tasks", JSON.stringify(tasks));
}

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

    inputTaskElement.addEventListener("click", () => {
      trTaskElement.classList.toggle("done");

      task.complete = !task.complete;
      saveToLocalStorage();
    });
    tdTaskElement.appendChild(inputTaskElement);

    tdTextTaskElement.innerText = `[${getPriority(task.priority)}] ${
      task.text
    }`;

    iconTaskElement.setAttribute("class", "material-icons");
    iconTaskElement.innerText = "delete";

    tdDeleteTaskElement.addEventListener("click", () => {
      deleteTask(task.id) && trTaskElement.remove();

      saveToLocalStorage();
    });

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
}

function getPriority(numPriority) {
  const PRIORITY = ["Baixa", "Média", "Alta"];

  return PRIORITY[numPriority - 1];
}

function deleteTask(idTask) {
  const confirmation = confirm(
    "Você tem certeza que deseja deletar está tarefa ?"
  );

  if (confirmation) {
    let pos = tasks.findIndex((task) => task.id == idTask);
    tasks.splice(pos, 1);

    const sucess = document.querySelector(".success");
    sucess.style.opacity = 1;

    setTimeout(() => {
      sucess.style.opacity = 0;
    }, 1000);

    return true;
  }

  return false;
}

function addTask(text) {
  let regExp = /^(?:#{1})([1-3])\s/;

  let priority, desc;

  if (regExp.test(text)) {
    [, priority] = regExp.exec(text);
    desc = text.substr(3);
  } else {
    priority = 1;
    desc = text;
  }

  const id = tasks[tasks.length - 1]?.id + 1 || 0;

  let task = {
    id,
    priority,
    text: desc,
    complete: false,
  };

  tasks.push(task);
  renderTasks();
  saveToLocalStorage();
}

renderTasks();
