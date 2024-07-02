// Herança é quando eu tenho uma clase
// Que herda outra classe pai => filhos
// herdando as propriedades e tudo que tem na pai vale para o filho

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

const carro1 = new Carro("Normal", 4);
carro1.ligar();
carro1.setCor("Preto");

console.log(` Nome: ${carro1.nome}`);
console.log(` Portas: ${carro1.portas}`);
console.log(` Ligado: ${carro1.ligado ? "Sim" : "Não"}`);
console.log(` Velocidade: ${carro1.vel}`);
console.log(` Cor: ${carro1.cor}`);

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
console.log("__________________");

const carro2 = new Militar("Lutador", 1, 100, 50);

console.log(` Nome: ${carro2.nome}`);
console.log(` Portas: ${carro2.portas}`);
console.log(` Ligado: ${carro2.ligado ? "Sim" : "Não"}`);
console.log(` Velocidade: ${carro2.vel}`);
console.log(` Cor: ${carro2.cor}`);
console.log(` Blindagem: ${carro2.blindagem}`);
console.log(` Munição: ${carro2.municao}`);

carro2.atirar();
carro2.atirar();
carro2.atirar();
carro2.atirar();
carro2.atirar();

console.log(` Carro ${carro2.nome} Atirou 5x `);
console.log(` Munição: ${carro2.municao}`);

console.log("__________________");

class Ultilitario extends Carro {
  constructor(nome, portas, lugares) {
    super(nome, portas);
    this.lugares = lugares;
  }
}

const carro3 = new Ultilitario("Confortinho", 4, 8);
console.log(` Nome: ${carro3.nome}`);
console.log(` Portas: ${carro3.portas}`);
console.log(` Lugares: ${carro3.lugares}`);
