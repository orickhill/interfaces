// 4. Leia o array e pegue apenas os dois primeiros elementos utilizando o método SLICE do Array.

export function pegaPrimeirosComSlice(array: number[]){
    let primeiros = array.slice(0, 2);
    return primeiros;
}

let oi = [2, 4, 6, 2, 8, 9, 5];
console.log(pegaPrimeirosComSlice(oi));
