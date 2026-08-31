import { pegaPrimeirosComSlice } from "../tarefa/primeiros";

test('Pega primeiros 2 elementos com slice', () => {
    expect(pegaPrimeirosComSlice([2, 4, 6, 2, 8, 9, 5])).toEqual([2, 4]);
})