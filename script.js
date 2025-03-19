let tarefas = []; // array fora do escopo da função para que todas as funções possam acessá-lo. Escopo Geral.

function adicionarTarefa() {
    const mensagem = document.getElementById("mensagem"); 
    let positivo = "Tarefa adcionada com sucesso!";
    let erro = "Por favor, digite uma tarefa válida!";

    let inputTarefa = document.getElementById("inputTarefa"); 
    let tarefa = inputTarefa.value.trim(); 

        if(tarefa === "") {
          mensagem.style.color = "#A34743"; 
          mensagem.textContent = erro;
        } else {
          mensagem.style.color = "#28A745"; 
          mensagem.textContent = positivo;
          
          tarefas.push(tarefa);
          renderizarTarefas();
        }

  inputTarefa.value = "";
}

  function renderizarTarefas(){

    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""; //limpa a lista de tarefas para não duplicar as tarefas.

    let i = 0;
    for (i; i < tarefas.length; i++) {
      let novaTarefa = document.createElement("li");
      novaTarefa.textContent = tarefas[i];
      listaTarefas.appendChild(novaTarefa);
    }
  }
