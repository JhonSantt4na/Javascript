// Moldes de como é usado Orientação objeto em JS
// Lembre-se do 

class Carro{
    // para criar uma nova propriedade 
    cor = "Vermelho";
    constructor(nome, tipo){
        this.nome = nome;
        if(tipo == 1){
            this.tipo = "Esportivo"
            this.velocidadeMax = 300;
        }else if(tipo == 2){
            this.tipo = "Utilitario"
            this.velocidadeMax = 100;
        }else if(tipo == 3){
            this.tipo = "Passeio"
            this.velocidadeMax = 160;
        }else{
            this.tipo = "Militar"
            this.velocidadeMax = 200;
        }       
    }
    info(){
        console.log(`
Nome do Carro = ${this.nome}, 
Tipo do Carro = ${this.tipo}
Velocidade do Carro = ${this.velocidadeMax};
`)
    }
    // Pegar o nome 
    getNome(){
        return this.nome
    }
    // Pegar o tipo
    getTipo(){
        return this.tipo
    }
    // Pegar a Velocidade Maxima
    getVelMax(){
        return this.velocidadeMax
    }
    // Pegar todas infos no array
    getInfo(){
        return [this.nome, this.tipo, this.velocidadeMax, this.cor]
    }
    setNome(nome){
        this.nome = nome;
    }
}

let carro1 = new Carro("Rapidão", 1);
let carro2 = new Carro("SuperLuxo", 3);
let carro3 = new Carro("Bombadão", 8);
let carro4 = new Carro("CarregoTudo", 2);


// Ao inves disso
const carros = [carro1, carro2, carro3, carro4];
carros.map((elemento)=>{
    console.log(elemento);
})

// Vamos adicionar o metodo info() no construtor e chamalo aqui 
carro1.info();
carro2.info();
carro3.info();
carro4.info();

// podemos criar metodos para pegar somente as prorpiedades do nosso objeto
// Pegar o nome 
let nome_carro1 = carro1.getNome();
let nome_carro2 = carro2.getNome();
let nome_carro3 = carro3.getNome();
let nome_carro4 = carro4.getNome();
console.log(nome_carro1,nome_carro2,nome_carro3,nome_carro4);

// Pegar o tipo 
let tipo_carro1 = carro1.getTipo();
let tipo_carro2 = carro2.getTipo();
let tipo_carro3 = carro3.getTipo();
let tipo_carro4 = carro4.getTipo();
console.log(tipo_carro1,tipo_carro2,tipo_carro3,tipo_carro4);
// Pegar a Velocidade Maxima

let VelMAX_carro1 = carro1.getVelMax();
let VelMAX_carro2 = carro2.getVelMax();
let VelMAX_carro3 = carro3.getVelMax();
let VelMAX_carro4 = carro4.getVelMax();

console.log(VelMAX_carro1,VelMAX_carro2,VelMAX_carro3,VelMAX_carro4);

// Ou um array com todas as info
let info_carro1 = carro1.getInfo()
console.log(info_carro1);

// Podemos tambem colocar o metodo SET ao inves de GET 
carro1.setNome("SuperVeloz"); // Mudando o nome do carro
console.log(carro1);
// podo adicionar nas outras propriedades tambem