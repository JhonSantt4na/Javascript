let valores = [5,2];   

// operação array com funções 
const operação = [
    // Função de soma
    (val)=>{
        let res = 0
        for(v of val){  
            res+=v
        }
        return res
    },
    // Função de multiplicação
    (val)=>{
        let res = 1
        for(v of val){
            res*=v
        }
        return res
    },
    // Funcção de Mostra todos
    (val)=>{
        for(v of val){
            console.log(v)
        }
    }
]
// Chamando a funções 
console.log(operação[0](valores));
// operação[possição da função](parametros)

operação[2](valores);
// faz a execulção da função 3, como ela ja é um console.log
// Basta chamar ela

// com o uso do for of posso adicionar quantos parametros 
// eu quiser em valores
