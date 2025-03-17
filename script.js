function adicionarTarefa() {

    let mensagem = "Tarefa adicionada com sucesso!"; //mensagem apresentada após digitar a tarefa

    let inputTarefa = document.getElementById("inputTarefa"); //pegando o valor do input
    let tarefa = inputTarefa.value.trim(); //pegando o que foi digitado no input | .trim() - remove espaços em branco do inicio e final da string
    
    //verificando se o campo está vazio
    if(tarefa === "") {
      mensagem = "Por favor, digite uma tarefa válida!";
      document.getElementById("mensagem").textContent = mensagem;
      return;
    } else {

    console.log(tarefa);
    document.getElementById("mensagem").textContent = mensagem; //apresentando mensagem apresentada após digitar a tarefa

    //criando variável para a lista de tarefas
    let listaTarefas = document.getElementById("listaTarefas");

    //criando variável para a nova tarefa, add itens na lista
    let novaTarefa = document.createElement("li");

    //variável novaTarefa recebe o valor de tarefa (add pelo usuário)
    novaTarefa.textContent = tarefa;
    //indicando onde vai ser criado o novo item (li)
    listaTarefas.appendChild(novaTarefa); //appendChild - anexando no item filho (nome do item)

    }

    //apagar o texto do input
    inputTarefa.value = "";

    
  }