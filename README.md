# 🪪 Perfil Card

Uma aplicação web de cartão de perfil pessoal, desenvolvida com HTML, CSS e JavaScript puro.

## 👤 Sobre

Card de perfil com foto, descrição pessoal, informações de contato e links para redes sociais.

## ✨ Funcionalidades

- 🖼️ Foto de perfil circular com borda branca sobre banner gradiente
- 👤 Nome e descrição carregados dinamicamente via JavaScript
- 📧 Exibição de e-mail e telefone
- 🔗 Links para GitHub e LinkedIn com ícones (Font Awesome)
- 🎨 Efeito hover suave no card

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- [Font Awesome 6](https://fontawesome.com/) — ícones das redes sociais

## 📁 Estrutura do Projeto

```
📦 perfil-card
 ┣ 📄 index.html    # Estrutura do card
 ┣ 📄 styles.css    # Estilização e layout
 ┣ 📄 script.js     # Dados do perfil e carregamento dinâmico
 ┗ 🖼️ imagem.jpg    # Foto de perfil
```

## 🚀 Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/perfil-card.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd perfil-card
   ```

3. Abra o `index.html` no navegador — sem necessidade de instalar nada.

## ✏️ Personalizar

Para alterar as informações do perfil, edite o objeto `data` no arquivo `script.js`:

```js
const data = {
    name: "Seu Nome",
    description: "Sua descrição aqui.",
    email: "seuemail@gmail.com",
    tel: "(XX) XXXXX-XXXX"
}
```

Para atualizar os links das redes sociais, edite os atributos `href` no `index.html`:

```html
<a href="https://github.com/seu-usuario" id="githubLink" target="_blank">
<a href="https://linkedin.com/in/seu-usuario" id="linkedinLink" target="_blank">
```

E substitua o arquivo `imagem.jpg` pela sua própria foto de perfil.

## 📌 Melhorias futuras

- [ ] Modo escuro
- [ ] Animação de entrada no card
- [ ] Suporte a mais redes sociais
- [ ] Versão responsiva para mobile

## 📄 Autor

Feito por Dracon🚀
