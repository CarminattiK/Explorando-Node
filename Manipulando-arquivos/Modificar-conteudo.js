import fs from 'fs'

// 1- Função para modificar o conteúdo 
export default function modificandoConteudo(text) {

     // 2- Novo conteúdo que vai substituir o existente
    const newContent = `Novo conteúdo para o arquivo`;

    // 3- Sobrescreve o arquivo com o novo conteúdo
    fs.writeFile("meuarquivo.txt", newContent, "utf-8", (err) => {
        if (err) {
            console.log("Ocorreu um erro ao modificar o conteúdo do arquivo:", err.message);
            return;
        }
        console.log("O arquivo foi modificado com sucesso!"); 
    });
}