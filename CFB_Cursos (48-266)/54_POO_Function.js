// Trocar Class X Function
// Class tem que ter o construtor para iniciar 
// Function não precisa e os parametros vai no paremetro de entrada da função


function Pessoa(nome, idade){
    // Separa por ,
    this.nome = nome, 
    this.idade = idade,
   
    // as Funções no dessa forma fica assim >
    // basta adicionar o "= function" apos o nome getNome 
    // e o "this." no inicio do metodo
    // this.metodo = function(){};


    // Pegar Nome
    this.getNome=function(){
        return this.nome;
    },      // Lembre-se da virgula para separar as coisas
    // Pegar idade
    this.getIdade=function(){
        return this.idade;
    },
    // Mudar o Nome 
    this.setNome=function(nome){
        this.nome = nome;
    },
    // Mudar a Idade
    this.setIdade=function(idade){
        this.idade = this.idade;
    },
    this.info=function(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log("___________________")
    }
}
// Cria pessoas dinamicamente 
// Pegando o input e adicionando na div res


let pessoas = []


// Adicionado pessoas pela função:
const addPessoas = ()=>{                        //AQUIII
    ress.innerHTML = "" //Resetando para não ficar a antiga                  
    pessoas.map((pessoa)=>{
        const div = document.createElement("div");
        div.setAttribute("Class", "pessoa")
        div.innerHTML =
        `nome: ${pessoa.getNome()},
        Idade: ${pessoa.getIdade()}`
        ress.appendChild(div)
    })
}


// Pegar div resposta e button
const btnAdd = document.querySelector("#btn_add");
const ress = document.querySelector(".resposta");

btnAdd.addEventListener("click", (evento)=>{
    // Criar nova pessoa
    const nome_inpt = document.querySelector("#f_nome");
    const idade_inpt = document.querySelector("#f_idade");
    const pessoa1 = new Pessoa(nome_inpt.value , idade_inpt.value); 
    
    // Adicionar no array
    pessoas.push(pessoa1);

    // Resetar apos a inserção
    nome_inpt.value = "" // Limpa o nome
    idade_inpt.value = "" // Limpa a Idade
    nome_inpt.focus() // Coloca o foco no imput nome e com isso so digitar

    // Texte se está adicionando
    console.log(pessoas);

    // Adicionando na div Resposta
    // Por Função 
    addPessoas()                                //AQUIII
    
})