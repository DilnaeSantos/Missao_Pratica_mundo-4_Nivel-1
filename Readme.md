# 📝 Relatório Discente de Acompanhamento

## Informações do Curso

- **Projeto:** Aplicativo de Agência de Viagens
- **Curso:** Desenvolvimento Full Stack
- **Universidade:** Estácio de Sá - Campus São José dos Pinhais
- **Período:** 4º Período
- **Turma:** 9001
- **Tecnologia:** Flutter
- **Tutor:** Altamira de Souza Queiroz
- **Matéria:** Posso Criar um App de Outra Forma? (RPG0024)

## Informações do Aluno

- **Nome:** Dilnae Rennan Souza dos Santos
- **Matrícula:** 202302631631

## Estruturação do Projeto no Flutter

No projeto da agência de viagens, a arquitetura seguiu a separação por componentes, organizada da seguinte forma:

- **Components:** Contém componentes reutilizáveis como o `BannerSection`, `TitleSection`, `ButtonGroup`, `TextSection` e `SearchBar`. Isso permitiu a modularização e reutilização de partes da interface.
- **Pages:** Contém as páginas principais do aplicativo, como `DestinosPage`, `PacotesPage`, `ContatoPage`, e `SobreNosPage`.
- **Assets:** Armazena imagens e ícones utilizados na interface.
- **Main.dart:** Arquivo principal que configura a navegação entre páginas e define a estrutura básica do aplicativo.

### Estrutura do Código

O aplicativo foi construído com o uso de vários widgets principais do Flutter, que possibilitaram uma interface fluida e responsiva. Alguns dos principais componentes utilizados incluem:

- **Scaffold:** Estrutura básica de cada página, que inclui a barra de navegação, corpo da página, e barra de navegação inferior.
- **Column e Row:** Para a organização dos elementos de forma vertical e horizontal.
- **TextField:** Para implementar a barra de pesquisa de destinos.
- **BottomNavigationBar:** Para navegação entre as páginas principais do aplicativo.

### Funcionalidades do Aplicativo

#### Pesquisa de Destinos

- O usuário pode pesquisar destinos utilizando uma barra de pesquisa (`SearchBar`). Ao digitar um termo específico, o app filtra os destinos, mostrando apenas aqueles que correspondem à pesquisa.
- Se a pesquisa estiver vazia, todos os destinos disponíveis são exibidos.

#### Seções de Destinos

O aplicativo exibe duas seções principais de destinos:

1. **Oeschinen Lake Campground** - Com imagens, título, botões e uma descrição detalhada sobre esse destino específico.
2. **Lençóis Maranhenses** - Outra seção dedicada ao destino brasileiro, com um banner, título, botões e descrição.

A pesquisa por nomes ou palavras-chave relacionadas a esses destinos exibe a seção correspondente. Se a pesquisa estiver vazia, ambas as seções são mostradas.

#### Navegação entre Páginas

- **Destinos:** Exibe uma lista de destinos de viagem, com descrições e imagens.
- **Pacotes de Viagem:** Oferece pacotes promocionais, com informações detalhadas sobre cada um.
- **Contato:** Contém informações de contato da agência, como telefone, e-mail e formulário de envio.
- **Sobre Nós:** Apresenta a história e a missão da agência de viagens.

### Implementação de Funcionalidades

#### Lógica de Pesquisa e Exibição Dinâmica

A lógica de exibição dinâmica de seções baseada na pesquisa foi implementada de forma que o componente `SearchBar` altere o estado da página. O estado é atualizado conforme o usuário digita na barra de pesquisa, exibindo apenas a seção relevante.

#### Bottom Navigation

A barra de navegação inferior (`BottomNavigationBar`) permite ao usuário navegar entre as páginas principais (Destinos, Pacotes, Contato, Sobre Nós). A seleção da página altera o índice, e o conteúdo é trocado dinamicamente.

```dart
BottomNavigationBar(
  items: const <BottomNavigationBarItem>[
    BottomNavigationBarItem(
      icon: Icon(Icons.place),
      label: 'Destinos',
    ),
    BottomNavigationBarItem(
      icon: Icon(Icons.card_travel),
      label: 'Pacotes',
    ),
    BottomNavigationBarItem(
      icon: Icon(Icons.contact_mail),
      label: 'Contato',
    ),
    BottomNavigationBarItem(
      icon: Icon(Icons.info),
      label: 'Sobre Nós',
    ),
  ],
  currentIndex: _selectedIndex,
  onTap: _onItemTapped,
);
```

### Modularização

Os componentes de cada seção (`BannerSection`, `TitleSection`, etc.) foram divididos em arquivos separados, permitindo uma estrutura organizada e reutilização de código. Essa modularização facilita a manutenção e escalabilidade do projeto.

### Personalização da Interface

A interface foi projetada com foco em uma experiência amigável e moderna, utilizando:

- **Cores:** Contrastes claros para facilitar a leitura e melhorar a experiência visual.
- **Imagens de Qualidade:** Utilização de banners atrativos e representativos de cada destino.
- **Botões Chamativos:** Botões grandes e facilmente clicáveis para melhorar a interação do usuário.

```dart
const styles = {
  'title': TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
  'description': TextStyle(color: Colors.grey[600]),
};
```

### Conclusão e Impacto

O aplicativo de agência de viagens, construído com Flutter, oferece uma experiência completa e intuitiva para os usuários. Com navegação fluida, funcionalidade de pesquisa eficiente e design visual moderno, ele facilita a busca por destinos e pacotes de viagem.

Flutter permitiu o desenvolvimento rápido com a possibilidade de hot reload e uma única base de código para Android e iOS, acelerando o processo de desenvolvimento e manutenção do aplicativo.
