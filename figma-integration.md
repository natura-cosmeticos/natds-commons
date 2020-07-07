# Integracão com o Figma

## Objetivo

- Testar o uso do Figma como `CMS` para gerenciamento de assets (icones, logos, ilustracões, imagens)
- Testar como poderiamos integrar o Figma ao nosso workflow atual

### Figma API

O figma fornece endpoints que podemos utilizar para obter informacões sobre um arquivo e também fazer download dos assets.

Funcionalidades da api úteis para o nosso contexto:
- acesso a informacões de um arquivo
  - propriedades do documento, páginas, e elementos dentro de uma página
- download dos assets em diferentes formatos (svg, png, jpg, pdf)
- download dos assets em diferentes escalas (0.01 - 4)
- webhooks (em beta) nos possibilitam executar tarefas quando um arquivo é atualizado

Além das features úteis para a integracão, o Figma é um poderoso editor vetorial, que tem outras fucionalidades que são interessantes:

- temos controle de acesso do arquivo (edicão e visualizacão)
- tem um app desktop e web
- historico de versões
- é gratis

### Fluxo gerenciado pelo figma

- Criar um arquivo no figma e incluir os assets
- Padronizar nomenclatura dos assets/paginas
- Conectar esse arquivo a integracão
- Alteracões nesse arquivo geram novas versões de assets do DS

### Integracão

- Recebe request do webhook
- Faz alguma validacão dos arquivos
- Faz download dos assets do figma conforme nossa config (tamanhos formatos)
- Converte/formata arquivos de acordo com os requerimentos de cada plataforma
- Gera as definicões dos assets nas propriedades do tema
- Gera um novo build dos temas
- Abre um PR
- Na pipeline podemos adicionar o `figma-diff` bot para nos ajudar a identificar o que foi alterado no PR

[diagrama](https://app.diagrams.net/#G1hvjzn1z-zHRSBDhNAV_KGu-9SAcQIk7W)