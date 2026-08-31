// 5. Leia o array e extraia apenas os elementos pares utilizando o método FILTER do Array, passando uma arrow function como parâmetro.

function filtrarParesFilter(af: (a: number[]) => number[], array: number[]) {
    return af(array);
};


let arrowFunction = (array: number[]) => array.filter((e) => e % 2 == 0);
// let vsco: number[] = [8, 3, 9, 5, 6, 12];

export function filtrarPares(entrada: number[]){
    return filtrarParesFilter(arrowFunction, entrada)
}

// console.log(filtrarPares(vsco));
