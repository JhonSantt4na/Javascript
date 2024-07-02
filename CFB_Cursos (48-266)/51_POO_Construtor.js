// Orientação a Objeto ultilizando o new
// ele cria uma clase que é a base 
// uma instrução de tudo que vai ter no objeto
// Desde metodos e propriedades
// todos seguem o que tem na classe mais são independentes 

class Person{
    //metodo construtor, automaticamento quando estancio um  novo objeto
    constructor(nome){
        this.nome = nome
    }
}
// Os parenteses na instanciação tem relação direta com 
// o nosso contrutor, se la não tiver parametros não vamos passar nenhum parametro
let pessoa1 = new Person();
// o new === a nova Person
console.log(pessoa1.nome);
let pessoa2 = new Person();
let pessoa3 = new Person();
// Porem todos com o mesmo nome, ja que o construtor tem somente um nome automatico
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)
// Passando parametros para cada uma ter seu proprio nome;
// Adicionando o parametro la no construtor, Obrigando passar o parametro ao criar uma nova instancia
pessoa1 = new Person("Jorge");
pessoa2 = new Person("Dev");
pessoa3 = new Person("Santos");
// Porem podemos passar qualquer tipo de dados nos parametros, numeros ou ate mesmo funções
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)

