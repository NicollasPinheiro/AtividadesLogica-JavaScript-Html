let tarefas = ["Estudar", "Trabalhar", "Lavar a louça", "Limpar a casa"];
let lista = document.getElementById("lista");
    for(let i = 0; i < tarefas.length; i++){
        let item = document.createElement("li");
        item.textContent = tarefas[i];
        lista.appendChild(item);
    }
    function RemoverUltimo(){
        tarefas.pop();
        lista.removeChild(lista.lastChild);
    }
    function AdicionarTarefa(){
    let novaTarefa = document.getElementById("tarefaInput").value;
    if(novaTarefa !== ""){
        tarefas.push(novaTarefa);
        let item = document.createElement("li");
        item.textContent = novaTarefa;
        lista.appendChild(item);
        document.getElementById("tarefaInput").value = "";
    } else{
        alert("Por favor, insira uma tarefa.");
    }
}
function LimparTodas(){
    tarefas = [];
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
}
function MostrarDados(){
   let aluno = {
       nome: "",
       curso: "",
       nota: 0
   };
   aluno.nome = document.getElementById("nomeInput").value;
   aluno.curso = document.getElementById("CursoInput").value;
   aluno.nota = parseFloat(document.getElementById("NotaInput").value);
    if(aluno.nome === "" || aluno.curso === "" || isNaN(aluno.nota)){
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    let situacao = aluno.nota 
    if(aluno.nota >= 7){
        situacao = "Aprovado";
    } else if(aluno.nota < 7){
        situacao = "Reprovado";
    }
    document.getElementById("situação").textContent = `Nome: ${aluno.nome}, Curso: ${aluno.curso}, Nota: ${aluno.nota} - Situação: ${situacao}`}

const caixa = document.getElementById('caixa');
    const container = document.getElementById('container');
    const mensagemDiv = document.getElementById('mensagem');

    let cliques = 0;
    const maxCliques = 10;

    function aoClicar() {
      cliques++;
      const maxX = container.clientWidth - caixa.clientWidth;
      const maxY = container.clientHeight - caixa.clientHeight;
      const novaX = Math.max(0, Math.floor(Math.random() * (maxX + 1)));
      const novaY = Math.max(0, Math.floor(Math.random() * (maxY + 1)));

      caixa.style.left = `${novaX}px`;
      caixa.style.top = `${novaY}px`;

      
      const cor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      caixa.style.backgroundColor = cor;

      if (cliques >= maxCliques) {
        mensagemDiv.textContent = "🎉 Parabéns! Clicou 10 vezes na caixa!";
        caixa.removeEventListener('click', aoClicar); 
      }
    }

    caixa.addEventListener('click', aoClicar);

    function ReiniciarJogo() {
      cliques = 0;
      mensagemDiv.textContent = "";
      caixa.style.left = '0px';
      caixa.style.top = '0px';
      caixa.style.backgroundColor = 'lightblue';
      caixa.addEventListener('click', aoClicar); 
    }