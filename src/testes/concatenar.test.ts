import { concatenar } from "../tarefa/concatenar";

test('concatena string', () => {
    expect(concatenar(['Array', 'com', 'Typescript'])).toBe('Array com Typescript');
})