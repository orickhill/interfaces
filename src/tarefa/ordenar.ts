// 3. Ordene os elementos de um array de forma decrescente utilizando o método SORT do Array, passando uma arrow function como parâmetro.

function ordenarDescrescente(af: (a: string[]) => string[], array: string[]) {
    return af(array);
};


let arrowFunction = (array: string[]) => array.sort((a: string, b: string) => a < b ? 1 : -1);
// let vsco: string[] = ['carro', 'boneco', 'ave', 'lapis'];

export function sortDescrescente(entrada: string[]){
    return ordenarDescrescente(arrowFunction, entrada)
}

// console.log(sortDescrescente(vsco));
