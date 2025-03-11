// 1- Importação dos módulos nátivos do node para manipular arquivos, manipular caminhos e interação pelo terminal
import fs from "fs/promises"; 
import path from "path"; 
import readline from "readline"; 

// 2- Configuração da interface de entrada e saída para receber os comandos do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 3- Define o caminho da pasta onde as anotações serão salvas por padrão
const notasDir = path.join(process.cwd(), "notes");

// 4- Função que verifica se a pasta "notes" existe. Se não existir, ela será criada.
async function verificarDiretorio() {
  try {
    await fs.access(notasDir); 
  } catch {
    await fs.mkdir(notasDir); 
  }
}

// 5- Função para fazer perguntas ao usuário e então esperar sua resposta
async function question(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer));
  });
}

// 6- Função para criar uma nova anotação e salvar como um arquivo .txt dentro da pasta "notes" criada anteriormente
async function criarNota() {
  const titulo = await question("Digite o título da anotação: "); 
  const conteudo = await question("Digite o conteúdo da anotação: "); 
  const caminhoNota = path.join(notasDir, `${titulo}.txt`); 
  await fs.writeFile(caminhoNota, conteudo, "utf-8"); 
  console.log("Anotação salva com sucesso!");
}

// 7- Função para listagem de todas as anotações disponíveis na pasta
async function listarNotas() {
  const arquivos = await fs.readdir(notasDir); 
  if (arquivos.length === 0) {
    console.log("Nenhuma anotação encontrada.");
  } else {
    console.log("Anotações disponíveis:");
    arquivos.forEach((arquivo) => console.log("-", path.basename(arquivo, ".txt"))); // Lista os arquivos sem a extensão ".txt"
  }
}

// 8- Função para ler o conteúdo de uma anotação específica
async function lerNota() {
  const titulo = await question("Digite o título da anotação para ler: "); 
  const caminhoNota = path.join(notasDir, `${titulo}.txt`); 
  try {
    const conteudo = await fs.readFile(caminhoNota, "utf-8"); 
    console.log("\nConteúdo da anotação:");
    console.log(conteudo);
  } catch {
    console.log("Anotação não encontrada."); // Caso o arquivo não seja encontrado
  }
}

// 9- Função para excluir uma anotação específica
async function excluirNota() {
  const titulo = await question("Digite o título da anotação para excluir: "); 
  const caminhoNota = path.join(notasDir, `${titulo}.txt`); 
  try {
    await fs.unlink(caminhoNota); 
    console.log("Anotação excluída com sucesso!");
  } catch {
    console.log("Anotação não encontrada."); 
  }
}

// 10- Função principal que exibe o menu e executa as ações conforme a escolha do usuário
async function main() {
  await verificarDiretorio(); // Garante que a pasta "notes" exista antes de iniciar o programa
  let opcao;
  do {
    console.log("\nGerenciador de Anotações");
    console.log("1 - Criar uma anotação");
    console.log("2 - Listar anotações");
    console.log("3 - Ler uma anotação");
    console.log("4 - Excluir uma anotação");
    console.log("5 - Sair");
    opcao = await question("Escolha uma opção: "); 
    
    // Executa a função correspondente à opção escolhida pelo usuário
    switch (opcao) {
      case "1":
        await criarNota();
        break;
      case "2":
        await listarNotas();
        break;
      case "3":
        await lerNota();
        break;
      case "4":
        await excluirNota();
        break;
      case "5":
        console.log("Saindo...");
        break;
      default:
        console.log("Opção inválida!"); 
    }
  } while (opcao !== "5"); // O loop continua até que o usuário escolha a opção de sair
  rl.close(); // Fecha a interface de entrada e saída do readline
}

main(); 
