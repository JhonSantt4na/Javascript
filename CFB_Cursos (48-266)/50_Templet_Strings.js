const curso = "Javascript";
const canal = "JHONNDEV"
const frase = "Este é o curso de " + curso + " do Canal " + canal;

console.log(frase);

// Com templete strings 

const frase_templete_strings = `Este é o curso de ${curso} do Canal ${canal}`;

console.log(frase_templete_strings);

// Muito mais rapido e pratico usar ele !!
// Alem disso ele entende o enter como quebra de linha com o /n exemplo:
const frase_templete_strings1 = `Este é o curso
 de ${curso} do
  Canal ${canal}`;
console.log(frase_templete_strings1);

// Exemplos:
const carros = ["Polo","Golf","T-Cross", "HRV"];

carros.map((elemento, Indice)=>{
    console.log(`Carro : ${elemento}, Possição : ${Indice}`);
})



