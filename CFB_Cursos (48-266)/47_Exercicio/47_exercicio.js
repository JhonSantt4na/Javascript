

// Pegando Botões 
const btn_soma = document.querySelector("#btn_soma");
const btn_subt = document.querySelector("#btn_subt");
const btn_mult = document.querySelector("#btn_mult");
const btn_divi = document.querySelector("#btn_divi");

// Pegando a Resposta
const res = document.querySelector("p");

// Operações 

const valores = [
    ()=>{
        // Pegando Input 
        const numero1 = Number(document.querySelector("#valor1").value);
        const numero2 = Number(document.querySelector("#valor2").value);
        // Resolvendo a soma
        const res = numero1 + numero2;
        return res;
    },
    ()=>{
       // Pegando Input 
       const numero1 = Number(document.querySelector("#valor1").value);
       const numero2 = Number(document.querySelector("#valor2").value);
       // Resolvendo a Subtração
       if (numero2 > numero1){
            const res = numero2 - numero1;
            return res;
       }
       const res = numero1 - numero2;
       return res;
    },
    () =>{
        // Pegando Input 
        const numero1 = Number(document.querySelector("#valor1").value);
        const numero2 = Number(document.querySelector("#valor2").value);
        // Resolvendo a soma
        const res = numero1 * numero2;
        return res;
    },
    () =>{
        // Pegando Input 
        const numero1 = Number(document.querySelector("#valor1").value);
        const numero2 = Number(document.querySelector("#valor2").value);
        // Resolvendo a soma
        const res = numero1 / numero2;
        return res;
    }
]


// Adicionado eventos nos Botões

btn_soma.addEventListener("click", (event)=>{ 
    const soma = valores[0]();
    res.textContent = soma;
});
btn_subt.addEventListener("click", (event)=>{ 
    const subtraindo = valores[1]();
    res.textContent = subtraindo;
});
btn_mult.addEventListener("click", (event)=>{ 
    const multiplicando = valores[2]();
    res.textContent = multiplicando;
});
btn_divi.addEventListener("click", (event)=>{ 
    const dividindo = valores[3]();
    res.textContent = dividindo;
});