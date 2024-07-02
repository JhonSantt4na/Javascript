// Anunciado : Quando click em add, passa os valores

const Pessoa = {
  nome: " ",
  idade: " ",
  getNome: function () {
    return this.nome;
  },
  getIdade: function () {
    return this.idade;
  },
  setNome: function (nome) {
    this.nome = nome;
  },
  setIdade: function (idade) {
    this.idade = idade;
  },
};

// Pegar div resposta e button
const ress = document.querySelector("#resposta");
const btn_add = document.querySelector("#btn_add");

// Adicionar Evento
btn_add.addEventListener("click", (evento) => {
  const inp01 = document.querySelector("#f_nome").value;
  const inp02 = document.querySelector("#f_idade").value;

  // Adicionando o nome e a idade
  const nome_pessoa = Pessoa.setNome(inp01);
  const idade_pessoa = Pessoa.setIdade(inp02);
  const pessoa1 = Pessoa;

  // criando uma div resposta e Adicionando
  const div = document.createElement("div");
  div.setAttribute("Class", "pessoa");
  div.innerHTML = `Nome = ${nome_pessoa} <br> Idade = ${idade_pessoa}`;
  ress.appendChild(div);

  // Textando
  console.log(Pessoa.getIdade(), Pessoa.getNome());
});
