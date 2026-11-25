# Arquitetura e manutenção

## Estado atual
Aplicação web estática, sem backend, framework, banco de dados ou etapa de compilação. A interface está em `index.html`, os estilos em `styles.css` e a lógica em `app.js`. O desenho é renderizado no Canvas 2D (`#court`, resolução interna 640 × 860), com dimensões responsivas via CSS.

## Componentes lógicos
- **Interface**: grupos Desenho Tático, Traço, Movimentação e Ações, mais campos para os nomes dos jogadores.
- **Estado em memória**: jogadores, bola, nomes, traços e ferramenta ativa.
- **Entrada**: eventos Pointer Events no canvas; coordenadas da tela são convertidas para coordenadas internas.
- **Renderização**: quadra, textura de areia pré-renderizada e elementos táticos desenhados no canvas.
- **Exportação**: `canvas.toBlob` em PNG, download por URL temporária e compartilhamento pela Web Share API quando disponível.
- **Política de conteúdo**: CSP declarada por `<meta>` em `index.html`. Cabeçalhos HTTP adicionais dependem da hospedagem.

## Restrições atuais
- Os dados não são gravados em armazenamento persistente; fechar ou recarregar a página descarta o estado em memória.
- `Desfazer` atua sobre traços, não sobre deslocamentos.
- A seleção da borracha não calcula a distância completa aos segmentos.
- A gestão de múltiplos ponteiros pode ser reforçada.
- Não há testes automatizados no repositório.
- A renderização completa a cada interação pode ser revista se medições de desempenho indicarem necessidade.

## Desenvolvimento local
Clone o repositório e abra `index.html` no navegador. Para reproduzir o ambiente de publicação, sirva a pasta por HTTP local (por exemplo, `python -m http.server 8000`) e acesse `http://localhost:8000`. Não há dependências de instalação documentadas.

## Boas práticas para mudanças
1. Criar uma branch de trabalho e manter `main` como versão de publicação.
2. Alterar uma funcionalidade por vez e verificar mouse e toque.
3. Testar telas estreitas, rotação, desenho, movimentação, desfazer, limpar, exportação PNG e compartilhamento.
4. Revisar as diferenças antes de mesclar e registrar a mudança em commit.
5. Confirmar o resultado do deploy do GitHub Pages antes de anunciar a publicação.

## Evolução sugerida
Introduzir testes unitários e de interface; persistir jogadas em localStorage ou IndexedDB com esquema versionado; adicionar histórico completo de ações; controlar `pointerId`; aprimorar hit-testing; validar acessibilidade; considerar PWA/offline e, posteriormente, empacotamento Android. Essas são propostas, não funcionalidades implementadas.
