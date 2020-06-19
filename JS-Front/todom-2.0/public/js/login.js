const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let { email, senha } = event.target;

  let result = await login(email.value, senha.value);

  if (result?.token) {
    let { token } = result;
    localStorage.setItem("@todom:token", token);
    getTarefas();
  } else {
    alert("Email ou senha inválida");
  }
});

async function login(email, senha) {
  let response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ email, senha }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  response = await response.json();
  
  return response;
}

async function getTarefas() {
  const token = localStorage.getItem("@todom:token");
  
  let response = await fetch("/api/tarefas", {
    headers: {
      Accept: "application/json",
      Authentication: `Bearer ${token}`,
    },
  });

  response = await response.json();

  localStorage.setItem("@todom:tasks", JSON.stringify(response.tasks))
  localStorage.setItem("@todom:token", response.token);

  window.location.href = '/';
}
