// 1- Importação das funções criadas 
import criarArquivo from "./Criar-arquivo.js";
import lerArquivo from "./Ler-Arquivo.js";
import modificandoConteudo from "./Modificando-conteudo.js";
import deletarArquivo from "./Deletar-arquivo.js";

// 2- Executa as funções em sequência para demonstrar o fluxo de manipulação dos arquivos
criarArquivo("Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js."); 
lerArquivo(); 
modificandoConteudo("Conteúdo modificado!"); 
lerArquivo(); 
deletarArquivo(); 

//!! IMPORTANTE 
// Durante o curso, aprendi a usar o módulo FS de forma síncrona e assíncrona. Optei pela abordagem assíncrona por ser mais viável, mas pretendo refazer o exercício de forma síncrona e commitá-lo. Concluí o exercício com sucesso, porém, ao conferir a resolução, pude confirmar de fato que a assincronicidade estava quebrando o código. O professor explicou como evitar isso com Promises, tornando o código mais limpo. Embora minha abordagem não esteja errada, escolhi mantê-la como está.
