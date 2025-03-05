import fs from 'fs'

// 1- Função para criar um arquivo com um conteúdo pré-definido
export default function criarArquivo(text) { 

// 2- Conteúdo que será salvo no arquivo  
const conteudo = "Conteúdo do novo arquivo"

// 3- Escreve o conteúdo no arquivo "meuarquivo.txt"
fs.writeFile("meuarquivo.txt", conteudo, "utf-8", (err) => {
  if (err) {
    console.log("Erro ao criar o arquivo:", err.message)
    return
  };
  console.log("Arquivo criado com sucesso!!.")})

}

