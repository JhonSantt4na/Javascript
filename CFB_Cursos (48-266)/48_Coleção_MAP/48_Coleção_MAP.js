const caixa = document.querySelector("#caixa");

// Coleção MAP Diferente do Metodo MAP
// Coleção MAP = é uma coleção do tipo chave e valor;
// chave e valor pode ser qualquer tipos
// Chave não pode ser igual

// Para definir que é uma Coleção MAP 
let mapa = new Map();


//Tem alguns metodos 

// set = Adicionar um elemento na coleção
mapa.set("nome", "Jorge");
mapa.set("Jhon", 214 );
mapa.set(100, 1);

console.log(mapa)

// get = Obter um elemento na coleção
caixa.innerHTML = mapa.get("nome");

// has = Se tem um elemento na coleção
if (mapa.has("Jhon")){
    caixa.innerHTML = "A Chave existe na Coleção"
}else {
    caixa.innerHTML = "A Chave NÃO existe na Coleção"
}

// size = Tamanho da coleção
const tamanho = mapa.size  //(sem Parentese pois é propriedade cor azivis e não função)
console.log(`o tamanho da coleção é ${tamanho}`)

// delete = Remover um elemento da coleção
mapa.delete(100);


// forEach = Percorrer toda a coleção
mapa.forEach((elemento)=>{
    console.log(elemento);
})

// keys = Obter todas as chaves da coleção
console.log(mapa.keys());


// values = Obter Todos os valores da coleção
console.log(mapa.values());

// entries = Entradas da coleção
console.log(mapa.entries());


// clear = Limpa todo a coleção
mapa.clear();
console.log(mapa);








