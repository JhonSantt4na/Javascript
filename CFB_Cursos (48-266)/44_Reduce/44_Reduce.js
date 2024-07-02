// Reduce ele permite fazer uma redução do array
// de acordo com a regra que eu especificar
// tem um novo parametro sendo diferente dos outros metodos

const p_array = document.querySelector("#array");
const btnVerificar = document.querySelector("#btnReduzir");
const resultado = document.querySelector("#resultado");

const elementos_array = [1, 7, 3, 4, 5]
let ant = []
let atu = []
let dobro = []

p_array.innerHTML = "[" + elementos_array + "]";


btnReduzir.addEventListener("click", (evt) => {
    //dobro.push(elementos_array[0]*2) = Pegar o primeiro elemento dobrado ja que
    // Com o reduce ele não execulta o primeiro item 

    //Parametros do metodo Reduce:
    //PreviusValue = O anterior sempre é o retorno da ultima operação
    //CurrentValue = Qual o valor está sendo interado
    //CurrentIndex = Qual a posição está sendo operado
    //Array = Qual o array está sendo operado
    resultado.innerHTML = elementos_array.reduce((anterior,atual,pos)=>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2);
        return atual+anterior;
    })
    resultado.innerHTML+="<br> Valor Anterior: "+ ant + "<br>Valor Atual :"+ atu + "<br> Dobro do Valor:"+ dobro;
})  

// muito ultilizado com a soma dos valores dos >18
// ou algo do tipo