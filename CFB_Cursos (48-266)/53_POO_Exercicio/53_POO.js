class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  // Pegar Nome
  getNome() {
    return this.nome;
  }
  // Pegar idade
  getIdade() {
    return this.idade;
  }
  // Mudar o Nome
  setNome() {
    this.nome = nome;
  }
  // Mudar a Idade
  setIdade() {
    this.idade = this.idade;
  }
  info() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log("___________________");
  }
}
// Cria pessoas dinamicamente
// Pegando o input e adicionando na div res

let pessoas = [];

// Adicionado pessoas pela função:
const addPessoas = () => {
  //AQUIII
  ress.innerHTML = ""; //Resetando para não ficar a antiga
  pessoas.map((pessoa) => {
    const div = document.createElement("div");
    div.setAttribute("Class", "pessoa");
    div.innerHTML = `nome: ${pessoa.getNome()},
        Idade: ${pessoa.getIdade()}`;
    ress.appendChild(div);
  });
};

// Pegar div resposta e button
const btnAdd = document.querySelector("#btn_add");
const ress = document.querySelector(".resposta");

btnAdd.addEventListener("click", (evento) => {
  // Criar nova pessoa
  const nome_inpt = document.querySelector("#f_nome");
  const idade_inpt = document.querySelector("#f_idade");
  const pessoa1 = new Pessoa(nome_inpt.value, idade_inpt.value);

  // Adicionar no array
  pessoas.push(pessoa1);

  // Resetar apos a inserção
  nome_inpt.value = ""; // Limpa o nome
  idade_inpt.value = ""; // Limpa a Idade
  nome_inpt.focus(); // Coloca o foco no imput nome e com isso so digitar

  // Texte se está adicionando
  console.log(pessoas);

  // Adicionando na div Resposta
  // Por Função
  addPessoas(); //AQUIII
});
