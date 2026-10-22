# Guia de uso — Prancheta Tática de Beach Tennis

## Acesso
Abra https://anderson-alves-martins.github.io/simulador-beach-tennis/ em um navegador moderno. O projeto é uma página web, sem instalação obrigatória.

## Montar uma jogada
1. Selecione **Mover** e arraste jogadores e bola na quadra. Os jogadores são limitados à respectiva metade; a bola pode atravessar a rede.
2. Edite os nomes nos campos das equipes **Quadra 1** e **Quadra 2**.
3. Em **Desenho Tático**, selecione **Caneta**, **Linha**, **Pontilhada**, **Seta** ou **Curva** e desenhe sobre a quadra.
4. Em **Traço**, selecione a cor (seletor ou amostras) e a espessura.
5. Use **Borracha** para remover um traço identificado próximo ao toque. **Desfazer** remove o último desenho; **Limpar** remove os desenhos.
6. **Reiniciar posições** retorna os jogadores à posição inicial; não é um comando para limpar toda a prancheta.
7. **Salvar imagem** exporta um PNG. **Compartilhar** tenta abrir o compartilhamento nativo; se indisponível, baixa a imagem.

## Limitações conhecidas
- Não há salvamento automático persistente das jogadas; atualizar/fechar pode perder alterações.
- Desfazer não restaura posições anteriores de jogadores/bola.
- A borracha usa proximidade dos pontos registrados e pode falhar entre pontos.
- Gestos simultâneos com múltiplos dedos e mudanças de orientação precisam de validação.
- Compartilhamento de arquivos depende das APIs e permissões do navegador.

## Dicas
Use o modo Mover para reposicionar peças e selecione uma ferramenta de desenho para criar trajetórias. Antes de fechar, exporte a imagem. Teste os controles em seu próprio celular antes de usar em aula.
