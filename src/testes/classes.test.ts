import { Livro, Video } from "../tarefa/classes";

test('Testando a classe Livro', () => {
    const livro = new Livro("Programação com Typescript", 400);
    livro.publicar();
    // expect(livro.publicar()).toBe("Publicando o Livro Programação com Typescript com 400 páginas...");
});

test('Testando a classe Video', () => {
    const video = new Video("Classes em Typescript", 15);
    video.publicar();
    // expect(video.publicar()).toBe("Publicando o Vídeo Classes em Typescript com 15 minutos...");
});
