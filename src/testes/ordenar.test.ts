import { sortDescrescente } from "../tarefa/ordenar";

test('ordenar em ordem decrescente com sort', () => {
    expect(sortDescrescente(['carro', 'boneco', 'ave', 'lapis'])).toEqual(['lapis', 'carro', 'boneco', 'ave']);
})