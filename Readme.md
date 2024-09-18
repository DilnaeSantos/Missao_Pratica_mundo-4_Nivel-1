# 📝 Relatório Discente de Acompanhamento

## Informações do Curso

- **Projeto:** Meeting - Aplicativo de Cadastro de Fornecedores
- **Curso:** Desenvolvimento Full Stack
- **Universidade:** Estácio de Sá - Campus São José dos Pinhais
- **Período:** 4º
- **Turma:** 9001
- **Tecnologia:** React Native
- **Tutor:** Jhonatan Alves
- **Matéria:** Vamos Criar um App (RPG0023)

## Informações do Aluno

- **Nome:** Dilnae Rennan Souza dos Santos
- **Matrícula:** 202302631631

## Análise e Conclusão

### Estruturação do Projeto no React Native

No React Native, a estrutura do projeto segue a divisão por componentes, onde cada funcionalidade ou parte da interface é representada por um componente modular. O projeto “Meeting” foi organizado da seguinte forma:

- **Components**: Contém componentes reutilizáveis, como inputs, botões, e visualização de fornecedores.
- **Screens**: Contém telas do aplicativo, como a tela de cadastro de fornecedores e a listagem de fornecedores.
- **Assets**: Pasta dedicada para armazenar imagens e outros recursos estáticos usados no aplicativo.
- **App.js**: Arquivo principal que centraliza a navegação e a lógica inicial do aplicativo.

### Utilização de Componentes Básicos do React Native

O aplicativo foi construído utilizando os seguintes componentes principais do React Native:

- **View**: Usada para definir a estrutura de layout de cada tela e agrupar elementos.
- **Text**: Utilizada para exibir texto.
- **TextInput**: Permite que o usuário insira informações, como nome e endereço do fornecedor.
- **Image**: Usada para exibir logotipos dos fornecedores.
- **Button**: Utilizado para submeter os dados de cadastro.

### Funcionalidades do Aplicativo

#### Cadastro de Fornecedores

O aplicativo permite o cadastro de fornecedores com os seguintes campos:
- **Nome do Fornecedor** (TextInput)
- **Endereço** (TextInput)
- **Contato** (TextInput)
- **Categoria de Produto** (TextInput)
- **Imagem do Fornecedor** (Image)

#### Listagem de Fornecedores

O aplicativo exibe uma lista de fornecedores cadastrados com as opções:
- Visualização de todos os fornecedores.
- Filtragem por categorias ou localização.

#### Upload de Imagens

Os usuários podem associar imagens (logotipos ou fotos) aos perfis de fornecedores. A imagem é exibida no componente `<Image>` e armazenada no formato base64.

### Melhorias de Produtividade com React Native

React Native melhora a produtividade ao permitir:
- **Hot Reloading**: Testar mudanças instantaneamente sem recompilar a aplicação.
- **Componentização**: Reutilizar componentes entre telas e funcionalidades.
- **Suporte Multi-plataforma**: Criar aplicativos nativos para Android e iOS usando o mesmo código.

### Suporte a Formulários e Validações

Para evitar que o formulário seja enviado com campos vazios, foi implementada uma verificação simples no botão de submissão, garantindo que todos os campos obrigatórios sejam preenchidos antes de enviar o cadastro.

```js
const handleSubmit = () => {
  if (!name || !address || !contact || !category) {
    setErrorMessage('Todos os campos são obrigatórios.');
    return;
  }

  setErrorMessage('');
  // Lógica para adicionar fornecedor
};
```

### Personalização da Interface

O aplicativo foi estilizado utilizando o componente `StyleSheet` do React Native, com foco em uma interface amigável e moderna. O texto é exibido na cor branca para garantir um contraste claro com o fundo escuro, melhorando a legibilidade e a experiência do usuário.

```js
const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white', // Texto branco
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
```

### Navegação e Rotas

A navegação entre a tela de cadastro e a tela de listagem de fornecedores é gerenciada por uma biblioteca de navegação, como o React Navigation. Isso permite que os usuários se movam entre diferentes telas de forma fluida e eficiente.

### Integração de Imagens

Para a exibição de imagens associadas aos fornecedores, o aplicativo suporta tanto imagens no formato base64 quanto URLs externas. Essa flexibilidade permite o carregamento dinâmico de logotipos ou fotos relacionadas aos fornecedores.

```js
<Image
  style={styles.logo}
  source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANS...' }}
/>
```

### Experiência do Usuário

O aplicativo foi projetado com uma interface intuitiva e de fácil uso. Entradas de formulário claras, botões grandes e mensagens de erro visíveis garantem que os usuários possam navegar e adicionar fornecedores sem dificuldades. A atenção ao contraste e ao feedback visual melhora a acessibilidade e a usabilidade da aplicação.
