import { filtrarPares } from "../tarefa/pares";

test('filtrar pares com filter', () => {
    expect(filtrarPares([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
})