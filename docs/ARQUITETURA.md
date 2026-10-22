# Arquitetura e manutenção

## Estado atual
Aplicação web estática, sem backend, framework, banco de dados ou etapa de compilação. A interface, os estilos e a lógica estão concentrados em `index.html`: HTML, CSS embutido e JavaScript embutido. O desenho é renderizado no elemento Canvas 2D (`#court`, resolução interna 640 × 860), com dimensões responsivas via CSS.

## Componentes lógicos
- **Interface**: grupos Desenho Tático, Traço, Movimentação e Ações, mais campos de nomes das duplas.
- **Estado em memória**: jogadores, bola, nomes, traços e ferramenta ativa.
- **Entrada**: eventos Pointer Events no canvas; coordenadas de tela convertidas para coordenadas internas.
- **Renderização**: quadra, textura de areia pré-renderizada e elementos táticos desenhados no canvas.
- **Exportação**: `canvas.toBlob` em PNG, download por URL temporária; compartilhamento pela Web Share API quando disponível.

## Restrições atuais
- Os dados não são gravados em armazenamento persistente; fechar/recarregar descarta o estado em memória.
- `Desfazer` atua sobre traços, não sobre deslocamentos.
- A seleção da borracha não calcula distância completa aos segmentos.
- A gestão de múltiplos ponteiros precisa ser reforçada.
- Não há testes automatizados no repositório verificado.
- A renderização completa a cada interação pode ser revista se medições de desempenho indicarem necessidade.

## Desenvolvimento local
Clone o repositório e abra `index.html` no navegador. Para reproduzir o ambiente de publicação, sirva a pasta por HTTP local (por exemplo, `python -m http.server 8000`) e acesse `http://localhost:8000`. Não há dependências de instalação documentadas.

## Boas práticas para mudanças
1. Criar branch de desenvolvimento e manter `main` como versão de publicação.
2. Alterar uma funcionalidade por vez, verificar mouse e toque.
3. Testar telas estreitas, rotação, desenho, mover, desfazer, limpar, PNG e compartilhamento.
4. Revisar diferenças antes de mesclar e registrar a mudança em commit.
5. Confirmar o resultado do workflow de GitHub Pages antes de anunciar implantação concluída.

## Evolução sugerida
Separar CSS e JS em arquivos próprios; introduzir testes unitários e de interface; persistir jogadas em localStorage/IndexedDB com esquema versionado; histórico completo de ações; controle de pointerId; aprimorar hit-testing; validar acessibilidade; considerar PWA/offline e, posteriormente, empacotamento Android. Essas são propostas, não funcionalidades implementadas.
