import { calculaQuadradoComFor, calculaQuadradoComForEach } from "../tarefa/quadrado";

test('verifica quadrados de array com for simples', ()=>{
    expect(calculaQuadradoComFor([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1])
});

test('verifica quadrados de array com forEach', ()=>{
    expect(calculaQuadradoComForEach([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1])
});