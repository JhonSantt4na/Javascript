const caixa = document.querySelector("#caixa");

//SET Coleção que não permite entrada duplicada de elementos
// Funciona como o MAP porem sem chave e valor;

// Ja podemos passar elementos na sua construção
// let musicas = new Set("Musica 10");
let musicas = new Set();


// Adicionando Elementos 
musicas.add("Musica muito Legal"); // Adiciona no Set
musicas.add("Musica1"); // Adiciona no Set
musicas.add("Musica10"); // Adiciona no Set
musicas.add("Musica1"); // Não entra pois ja tem
musicas.add("Musica10");// Não entra pois ja tem

//Percorendo a coleção com metodo forEach das coleção
//musicas.forEach((el)=>{
//    caixa.innerHTML += el + "<br/>";
//})

//Percorendo a coleção com metodo externo
for(let n of musicas){
    caixa.innerHTML += n + "<br/>";
}

// Deletando um item do Set 
musicas.delete("Musica1");
console.log(musicas)

// Limpando tudo 
musicas.clear();


console.log(musicas)
