interface Conteudo {
    titulo: string;
    publicar(): void;
}

class Livro implements Conteudo {
    titulo: string;
    paginas: number;

    constructor (t: string, p: number){
        this.titulo = t;
        this.paginas = p;
    }
    publicar(): void {
        console.log(`Publicando o Livro ${this.titulo} com ${this.paginas} páginas...`);
    }
}

class Video implements Conteudo {
    titulo: string;
    minutos: number;

    constructor (t: string, m: number){
        this.titulo = t;
        this.minutos = m;
    }

    publicar(): void {
        console.log(`Publicando o Vídeo ${this.titulo} com ${this.minutos} minutos...`);
    }
}


let video = new Video("Classes em Typescript", 15);
let livro = new Livro("Desenvolvimento web com Angular e Typescript", 400);

video.publicar();
livro.publicar();