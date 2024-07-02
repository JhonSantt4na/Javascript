// Tipo normal e Militar
class Carro {
  // Classe Pai ou BASE
  constructor(nome, portas) {
    this.nome = nome;
    this.portas = portas;
    this.ligado = false;
    this.vel = 0;
    this.cor = undefined;
  }
  ligar = function () {
    this.ligado = true;
  };
  desligar = function () {
    this.ligado = false;
  };
  setCor = function (cor) {
    this.cor = cor;
  };
}

// Com herança
// Criando Carro com extends que tem todos os elementos da class pai
class Militar extends Carro {
  constructor(nome, portas, blindagem, municao) {
    super(nome, portas);
    // Super Quando quiser invocar alguem da clase pai
    this.blindagem = blindagem;
    this.municao = municao;
    this.setCor("verde");
  }
  atirar = function () {
    if (this.municao > 0) {
      this.municao--;
    }
  };
}

const carro3 = new Ultilitario("Confortinho", 4, 8);
console.log(` Nome: ${carro3.nome}`);
console.log(` Portas: ${carro3.portas}`);
console.log(` Lugares: ${carro3.lugares}`);

// Exercicio 58

// FUNCIONAMENTO DOS RADIOS BUTTONS
// Pegando Radios
const f_tipoNormal = document.querySelector("#f_tipoNormal");
const f_tipoMilitar = document.querySelector("#f_tipoMilitar");
// Pegando blindagem e municao
const f_municao = document.querySelector("#f_municao");
const f_blindagem = document.querySelector("#f_blindagem");

// Adicionando eventos

// Tipo Militar
f_tipoMilitar.addEventListener("click", (evento) => {
  f_nome.value = "";
  f_portas.value = 0;
  f_blindagem.value = 0;
  f_municao.value = 0;
  f_blindagem.removeAttribute("disabled");
  f_municao.removeAttribute("disabled");
});

// Tipo Normal
f_tipoNormal.addEventListener("click", (evento) => {
  f_nome.value = "";
  f_portas.value = 0;
  f_blindagem.value = 0;
  f_municao.value = 0;
  f_blindagem.setAttribute("disabled", "disabled");
  f_municao.setAttribute("disabled", "disabled");
});

// Pegando carros e criando o array
const carros = document.querySelector("#carros");
const array_carros = [];

// Gerenciador de Exibição
const gerenciarExibicaoCarros = () => {
  carros.innerHTML = " ";
  array_carros.forEach((elementos) => {
    const div = document.createElement("div");
    div.setAttribute("class", "carro");
    div.innerHTML = ` Nome: ${elementos.nome}<br>`;
    div.innerHTML += ` Portas: ${elementos.portas}<br>`;
    div.innerHTML += ` Cor: ${elementos.cor}<br>`;
    div.innerHTML += ` Blindagem: ${elementos.blindagem}<br>`;
    div.innerHTML += ` Munição: ${elementos.municao}<br>`;
    carros.appendChild(div);
  });
};

// adicionando o btn
const btn_addCarro = document.querySelector("#btn_addCarro");

// Pegando os inputs
const f_nome = document.querySelector("#f_nome");
const f_portas = document.querySelector("#f_portas");
// Adicionando evento

btn_addCarro.addEventListener("click", (evento) => {
  if (f_tipoNormal.checked) {
    const c = new Carro(f_nome.value, f_portas.value);
    array_carros.push(c);
  } else {
    const c = new Militar(
      f_nome.value,
      f_portas.value,
      f_municao.value,
      f_blindagem.value
    );
    array_carros.push(c);
  }
  // Mostrando o carro
  gerenciarExibicaoCarros();
});
