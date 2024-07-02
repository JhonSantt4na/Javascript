// Coleção ARRAYS
// Ele é uma coleção de variaveis 
// JS pode armazenar qualquer dado no array (Linguagem bases são tipadas)
// [ ] = indica que é um array

// Posso comerça o array com elementos
let cursos = ["Html", "css", "Javascript"]
 
const caixa = document.querySelector("#caixa");

console.log(cursos[0])
// [0] = Possição do indice do Array "Html"
// [2] = Return "Javascript"

//posso mudar o valor atraves da posição
cursos[0] = "Typescript"
// ou seja o "Html" foi subistituido pelo "Typescript"

cursos.push("C++");
cursos.push("Python");
// Adiciona na ultima posição
cursos.pop()
// Remove e retorna o ultimo elemento no caso o python

cursos.unshift("Python")
cursos.unshift("Php");
// Adiciona no inicio  do array

cursos.shift();
//Remove o primeiro elemento no caso o php



let cores = ["Azul", "Verde", "Vermelho"];
// Adicionando cores no cursos:
cursos.push(cores);

// Matrizes = Array dentro de um Array
// Pegando o indice das cores + a cor no indice 1 verde 
console.log(cursos[5][1]);
// Ou seja a pos 5 é as cores e 1 a cor verde
// E por ai vai aninhando os arrays 
cores.push(["Claro", "Medio", "Escuro"]);
// Adicionando dentro do cores outro array 
console.log(cursos[5][1][0]);
// Return "Claro"


cursos.map((elemento)=>{
    let p = document.createElement("p");
    p.innerHTML =  elemento;
    caixa.appendChild(p);
})

