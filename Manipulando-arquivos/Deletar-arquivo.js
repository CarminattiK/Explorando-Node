import fs from 'fs'

// 1- Função para excluir o "meuarquivo.txt"
export default function deletarArquivo() {
    fs.unlink("meuarquivo.txt", (err) => {
        if (err) {
            console.log("Encontramos um erro ao excluir o arquivo:", err.message);
            return;
        }
        console.log("Arquivo excluído com sucesso!!");
    });
}