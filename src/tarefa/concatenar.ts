//2. Transforme o array concatenando as strings com 1 (um) espaço (" "). Utilize o método JOIN do Array, passando uma arrow function como parâmetro.

function concatenarStrings(af: (a: string[]) => string, array: string[]) {
    return af(array);
};


let arrowFunction = (array: string[]) => array.join(" ");
let vsco: string[] = ['Arrays', 'com', 'TypeScript'];

export function concatenar(entrada: string[]){
    return concatenarStrings(arrowFunction, entrada)
}

console.log(concatenar(vsco));
