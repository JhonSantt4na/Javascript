// Anteriormente que quando usamo o new
// ele cria um novo objeto independente

// Ja os Literais todos que criarmos da mesma classe
// todos apontaram para o mesmo elemento na memoria
// Exemplos:

//Sintaxe
const Pessoa = {
    nome:"Jorge",
    idade:"25",
    getNome:function(){
        return this.nome
    },
    getNome:function(){
        return this.nome
    },      // Lembra da virgula sempre apos um metodo ou propriedade
    setIdade:function(idade){
        this.idade = idade 
    }
}

console.log(Pessoa.idade);
// mesmo que eu crie varios todos 
// tem o mesmo resultado
const pessoa1 = Pessoa
const pessoa2 = Pessoa
const pessoa3 = Pessoa

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);

// mesmo se mudar o nome de 1 especifico,
// todos vão mudar o nome exemplo:
pessoa1.nome = "Flamengo"   // forma 1 de mudar
//ou
pessoa2["nome"] = "Jhon"    // forma 2 de mudar

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);

// Pegando o nome pela função
console.log(pessoa3.getNome());
// mudando idade pela função
console.log(pessoa3.setIdade(33));
// porem muda todos 
console.log(pessoa1.idade);
console.log(pessoa2.idade);
console.log(pessoa3.idade);