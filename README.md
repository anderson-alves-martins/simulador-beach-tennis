# 🎾 Prancheta Tática de Beach Tennis

Aplicação web interativa para demonstrar posicionamento, movimentação e trajetórias em jogadas de beach tennis. Interface em português, com identidade visual azul-oceano e amarelo-areia, pensada para uso em celular e computador.

**[Abrir prancheta oficial](https://anderson-alves-martins.github.io/simulador-beach-tennis/)** · **[Consultar código](https://github.com/anderson-alves-martins/simulador-beach-tennis)**

## Funcionalidades existentes
- Quadra interativa com jogadores e bola arrastáveis.
- Ferramentas Caneta, Linha, Pontilhada, Seta, Curva e Borracha.
- Ajuste de cor e espessura dos traços.
- Edição dos nomes dos jogadores.
- Desfazer último desenho, limpar desenhos e reiniciar posições.
- Exportar imagem PNG e compartilhar quando o navegador oferece suporte.
- Textura de areia pré-renderizada e layout responsivo.

## Começar
Abra o link oficial. Selecione **Mover** para reposicionar jogadores/bola ou uma ferramenta de **Desenho Tático** para traçar jogadas. Use **Salvar imagem** antes de fechar a página: ainda não existe salvamento automático de jogadas.

## Documentação
- [Guia de uso](docs/GUIA-DE-USO.md)
- [Arquitetura e manutenção](docs/ARQUITETURA.md)
- [Auditoria e roadmap](docs/ROADMAP.md)
- [Publicação no GitHub Pages](docs/PUBLICACAO.md)

## Tecnologias
HTML5, CSS3, JavaScript nativo, Canvas 2D, Pointer Events e APIs web de exportação/compartilhamento. O código atual fica em `index.html`, sem dependências de build.

## Executar localmente
Clone o repositório e abra `index.html` ou sirva a pasta com `python -m http.server 8000`.

## Estado e limitações
Projeto web funcional em evolução. Ainda faltam persistência local, histórico completo de movimentos, melhorias de gestos multitoque, testes automatizados e validação ampla em dispositivos. A publicação na Play Store é objetivo futuro, não uma entrega atual. Veja o [roadmap](docs/ROADMAP.md).

## Publicação
Alterações na `main` e publicação efetiva pelo GitHub Pages são etapas distintas. Consulte [o guia de publicação](docs/PUBLICACAO.md).

## Licença
Nenhum arquivo de licença foi identificado no repositório na data desta documentação. Não presumir licença de código aberto sem definição explícita do titular.
