# Exercício: Verificador de Sistema - Node.js

Desenvolva um monitor de sistema que exiba informações detalhadas do computador e seus componentes a cada 1 segundo. Além disso, os dados exibidos devem ser registrados em um arquivo de log chamado **"log.txt"**, localizado dentro da pasta **"log"**, na raiz do sistema de arquivos. O desafio deve ser resolvido utilizando exclusivamente os módulos nativos do **Node.js**.

## 📌 Requisitos

### 🔹 Função para monitoramento do sistema
Esta função deve, a cada **1 segundo**, exibir no console as seguintes informações do sistema:

- **Sistema Operacional** (Nome do SO)
- **Arquitetura do Sistema** (Ex: x64)
- **Modelo do Processador** 
- **Tempo de Atividade** (uptime formatado)
- **Uso de Memória RAM (%)**

### 🔹 Função para registro de logs
Outra função deve ser responsável por **registrar** os detalhes exibidos no arquivo **"log.txt"** dentro da pasta **"log"** na raiz do sistema.

- Cada novo registro deve ser **acrescentado** ao arquivo, mantendo um histórico das informações.
- Os registros devem ser separados por uma **linha em branco** para facilitar a leitura.

### 🔹 Criação da pasta "log"
Caso a pasta **"log"** não exista, o código deve garantir que ela seja criada automaticamente antes de salvar os registros.

---
🚀 Utilize os módulos nativos do **Node.js** para manipulação de arquivos e obtenção de informações do sistema.
