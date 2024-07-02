// Como sabe as coleção sabe que chegou no fim e qual o elemento da vez
// Interadores São Bastante Usado com :
// Metodos : find, map, reduce, every
// Coleção : Arrays, Strings, Map, Sets 
const valores = [10,2,6];
const interadores_valores = valores[Symbol.iterator]() // Criando um manualmente


console.log(valores)
console.log(interadores_valores.next()); // retorna o valor e se chegou no fim 
console.log(interadores_valores.next());
console.log(interadores_valores.next());
console.log(interadores_valores.next().value); // retorna somente o valor
//.next (Usa sempre para saber se chegou no final o não)
//ele retorna ( value :10, done : false )
//ele retorna ( value :2, done : false )
//ele retorna ( value :6, done : true )
//ele retorna ( value :undefine )

// value = valor atual do array 
// done = false não chegou no fim, True chegou

// Exemplo com string

const texto = "DevJhon"
const interadores_texto = texto[Symbol.iterator]();

console.log(texto);
console.log(interadores_texto.next());
console.log(interadores_texto.next());
console.log(interadores_texto.next());
console.log(interadores_texto.next());
console.log(interadores_texto.next());
console.log(interadores_texto.next());
console.log(interadores_texto.next());
console.log(interadores_texto.next()); // ele ver que o value esta undefind
// e confima que chegou no fim da string e acaba