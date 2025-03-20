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
          mensagem.style.color = "#026120";
          mensagem.textContent = positivo;
          
          tarefas.push(tarefa);
          renderizarTarefas();
        }

  inputTarefa.value = "";
}

  function renderizarTarefas(){

    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""; //limpa a lista de tarefas para não duplicar as tarefas.

    
    for (let i = 0; i < tarefas.length; i++) {
      let novaTarefa = document.createElement("li");
      novaTarefa.textContent = tarefas[i];

      // botões adcionados na LI (editar e remover)

      let botaoEditar = document.createElement("button");
      botaoEditar.className = "editar";
      novaTarefa.appendChild(botaoEditar);
      botaoEditar.textContent = "Editar";
      
      // funçao editar tarefa
      botaoEditar.onclick = () => editarTarefa(i);


      let botaoExcluir = document.createElement("button");
      botaoExcluir.className = "remover";
      novaTarefa.appendChild(botaoExcluir);
      botaoExcluir.textContent = "Excluir";
      
      // funçao remover tarefa
      botaoExcluir.onclick = () => removerTarefa(i);



      listaTarefas.appendChild(novaTarefa);
    }
  }

  function removerTarefa(i){
      tarefas.splice(i, 1); // (indice, n0 indicando qtos itens serão excluidos)
      renderizarTarefas();
      if (tarefas.length === 0) {
        const mensagem = document.getElementById("mensagem"); 
        mensagem.style.color = "#A34743"; 
        mensagem.textContent = "Lista de tarefas limpa!";

      }
  }

  function editarTarefa(i){
    let tarefaEditada = prompt("Edite a tarefa");
    if (tarefaEditada.trim() !== "") {
      tarefas[i] = tarefaEditada;
      renderizarTarefas();
    }
}

  function limparTarefa(){
    tarefas.length = 0;
    renderizarTarefas();
    const mensagem = document.getElementById("mensagem"); 
    mensagem.style.color = "#A34743"; 
    mensagem.textContent = "Lista de tarefas limpa com Sucesso!";
  }
