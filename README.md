# Popup modal Animado

## Ideia Inicial
A ideia surgiu do canal <b>CodingLab</b>. Pesquisado pelo canal dele, o vídeo mais recente era sobre uma pop-up modal animado. Vendo como era, resolvi começar a desenhar toda a ideia do vídeo antes de assistir o vídeo.

---
## Objetivos
:heavy_check_mark: Torna o projeto <b><u>responsivo</u></b>. 
:heavy_division_sign: Colocar <b><u>interaçao</u></b> em cada elemento que em um projeto real deveria ter interaçao
:heavy_check_mark: Iniciar o projeto executando o conceito de <b><u>Mobile First</b></u>
:x: Em um popup modal, ao clicar em "Hire Me", esse <b><u>popup deve ter o nome, a descriçao e foto do card respectivo</b></u>.
:x: Indepedente da posiçao da barra de rolagem, o Popup deve <b><u>estar sempre centralizado o fundo escuro</b></u>.
:x: A borda colorida ao redor da foto no Card deveria ter a <u><b>cor de acordo com a cor dominante</u></b> na foto da pessoa.

---
## O que foi usado
HTML5, SCSS e JavaScript.

---
## Problemas enfrentados
Durante o processo de estilização do Card, precisava colocar uma borda branca ao redor da foto e uma borda colorida dentro dessa mesma borda. Meu objetivo era fazer essas duas bordas utilizando os pseudo elementos <b><i>::before</b></i> e <b><i>::after</b></i>. Passei algumms minutos martelando em como fazer isso funcionar, mesmo com posição absoluta, tamanho maior que a foto, não via nenhum resultado. Minha solução foi colocar o elemento foto dentro de uma div, por uma largura e altura nesse container relativamente maior que a foto; centralizar a foto e adicionar a borda colorida na div, ao invés de pôr na foto, no fim deu certo.

Não consegui supor como faria para, primeiro pegar a cor dominante na foto do usuário e os valores de nome e status. Sim, minha ansiedade foi para as núvens nessa hora, por essa razão, parei o projeto aí. Isso claramente deixa explícito minha falta de conhecimento em JavaScript.