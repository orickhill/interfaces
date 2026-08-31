// 1.    Crie um programa que calcule o quadrado de cada elemento de um array utilizando duas estratégias:

export function calculaQuadradoComFor(array: number[]){
    let resultado: number[] = [];
    for(let i = 0; i < array.length; i++){
        resultado[i] = array[i]**2;
    }
    return resultado;
}

export function calculaQuadradoComForEach(array: number[]){
    let resultado: number[] = [];
    let i = 0;
    array.forEach((e) => {
        resultado[i++] = e**2;
    });
    return resultado;
}

// let fori = [2, 4, 6, 8, 10];
// let foreach = [1, 3, 5, 7, 9];
// let vetorFor = calculaQuadradoComFor(fori);
// let vetorForEach = calculaQuadradoComForEach(foreach);

// // vetorFor.forEach(element => {
// //     console.log(element);
// // });
// console.log(vetorFor);
// console.log(vetorForEach);

// // vetorForEach.forEach(element => {
// //     console.log(element);
// // });