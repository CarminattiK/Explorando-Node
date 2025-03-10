//!! Este exercício me demandou um certo tempo, pois no início eu estava confuso sobre como chegar ao resultado esperado. No entanto, após revisões e pesquisas, percebi que poderia utilizar Promises, o que tornou a solução muito mais simples e eficiente. Observação: Minha abordagem ficou bem diferente da solução apresentada pelo professor, mas funcionou perfeitamente.

// 1- Importação dos módulos nativos do Node
const os = require("node:os"); // Importa o módulo 'os' para obter informações do sistema operacional
const fs = require("node:fs/promises"); // Importa a versão baseada em Promises do módulo 'fs' para manipulação de arquivos
const path = require("node:path"); // Importa o módulo 'path' para manipulação de caminhos de arquivos e diretórios

// 2- Define o path da pasta onde os logs serão armazenados
const pastaLog = path.join("/", "log");
// 3- Também o define do arquivo de log dentro da pasta de logs
const caminhoArquivoLog = path.join(pastaLog, "log.txt");

// 4- Função assíncrona que cria a pasta 'log' caso ela não exista ainda
async function configurarPastaLog() {
  try {
    await fs.mkdir(pastaLog, { recursive: true }); 
  } catch (erro) {
    console.error("Erro ao criar diretório de log:", erro); // Exibe erro caso a criação falhe
  }
}

// 5- Função que obtém informações sobre os sistemas operacionais
async function obterInformacoesSistema() {
  return {
    sistemaOperacional: os.platform(), // Obtém o nome do sistema
    arquitetura: os.arch(), // Obtém a arquitetura do processador
    processador: os.cpus()[0].model, // Obtém o modelo do processador
    tempoAtividade: os.uptime(), // Obtém o tempo de atividade do sistema em segundos
    usoMemoria: (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024, // Calcula o uso atual da memória RAM em GB
    memoriaTotal: os.totalmem() / 1024 / 1024 / 1024, // Obtém a memória RAM total do sistema em GB
  };
}

// 6- Função que registra as informações do sistema operacional no arquivo de log
async function salvarLog() {
  try {
    const { sistemaOperacional, arquitetura, processador, tempoAtividade, usoMemoria, memoriaTotal } = await obterInformacoesSistema();

    // Formata os dados para serem registrados no arquivo de log
    const conteudoLog = `Sistema: ${sistemaOperacional} | Arquitetura: ${arquitetura} | Processador: ${processador} | Tempo de Atividade: ${tempoAtividade}s | Memória RAM: ${usoMemoria.toFixed(2)}GB / ${memoriaTotal.toFixed(2)}GB\n`;

    // Adiciona os dados no arquivo de log, sem sobrescrevê-lo
    await fs.appendFile(caminhoArquivoLog, conteudoLog);

    console.log("Log salvo com sucesso!");
  } catch (erro) {
    console.error("Erro ao salvar log:", erro); // Exibe erro caso não consiga salvar o log
  }
}

// 7- Função principal que inicia o monitoramento do sistema e o registro dos logs
async function iniciarMonitoramento() {
  await configurarPastaLog(); // Garante que a pasta 'log' exista antes de começar a gravar os logs
  setInterval(salvarLog, 1000);
}

iniciarMonitoramento(); // Inicia o monitoramento 
