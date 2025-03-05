import fs from 'fs'

// 1- Função para ler o conteúdo do arquivo "meuarquivo.txt"
export default function lerArquivo() {
    fs.readFile("meuarquivo.txt", "utf-8", (err, conteudo) => {
        if (err) {
            console.log("ERROR! Infelizmente não foi possível ler o arquivo:", err.message);
            return;
        }
        // 2- Exibe o conteúdo do arquivo
        console.log(conteudo); 
    });
}