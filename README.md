# To-Do List 

Este projeto é uma aplicação simples de controle de tarefas desenvolvida em **React Native**. A aplicação permite adicionar, gerenciar e acompanhar o progresso de suas tarefas de forma prática e eficiente. 🚀

---

<div align="center" display: flex>
  <img src="https://github.com/suelensalvino/todo-list/blob/master/assets/tela-inicial.png" alt="Tela inicial" width="20%">
  <img src="https://github.com/suelensalvino/todo-list/blob/master/assets/adicionar-tarefa.png" alt="Adicionar Tarefa" width="20%">
  <img src="https://github.com/suelensalvino/todo-list/blob/master/assets/tarefa-concluida.png" alt="Tarefa Concluída" width="20%">
</div>

## Funcionalidades

- **Adicionar uma nova tarefa**: Insira suas tarefas na lista.
- **Marcar e desmarcar como concluída**: Controle o status de cada tarefa.
- **Remover uma tarefa**: Exclua tarefas que não são mais necessárias.
- **Progresso de conclusão**: Visualize quantas tarefas já foram concluídas.

## Conceitos Aplicados

Durante o desenvolvimento, foram utilizados conceitos fundamentais de **React Native**, como:

- **Estados**: Controle dinâmico dos dados da aplicação.
- **Imutabilidade do estado**: Alterações seguras no estado, criando novas versões em vez de modificar diretamente o original.
- **Listas e chaves**: Renderização eficiente de itens usando chaves únicas.
- **Propriedades (props)**: Comunicação entre componentes.
- **Componentização**: Organização do código em blocos reutilizáveis e independentes.

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)

## Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação no seu ambiente:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/suelensalvino/todo-list.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd todo-list
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o ambiente de desenvolvimento:**
   ```bash
   npm start
   ```

5. **Execute no emulador ou dispositivo físico:**
   - Escaneie o QR code com o app Expo Go (iOS/Android) ou
   - Use o comando: `npm run android` ou `npm run ios` (emulador configurado).

## Estrutura do Projeto

```
.
├── src
│   ├── components
│   │   ├── Feedback
│   │   │   ├── index.tsx       # Componente para exibir feedback
│   │   │   └── styles.ts       # Estilização do Feedback
│   │   ├── Icons
│   │   │   ├── Clipboard.tsx   # Ícone de clipboard
│   │   │   ├── Logo.tsx        # Ícone de logo
│   │   │   ├── Trash.tsx       # Ícone de lixeira
│   │   │   └── RadioButton.tsx # Ícone de botão de rádio
│   │   ├── Task
│   │   │   ├── index.tsx       # Componente de tarefa
│   │   │   └── styles.ts       # Estilização da tarefa
│   ├── home
│   │   ├── index.tsx           # Tela principal
│   │   └── styles.ts           # Estilização da tela principal
│   ├── App.tsx                 # Entrada principal da aplicação
├── assets                      # Ícones e imagens
├── package.json                # Dependências e scripts
└── README.md                   # Documentação do projeto
```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

💻 Desenvolvido com 💙 por [Suelen Salvino](https://github.com/suelensalvino).
