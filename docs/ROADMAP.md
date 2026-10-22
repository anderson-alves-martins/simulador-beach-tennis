# Roadmap e auditoria técnica

Este documento registra oportunidades identificadas em revisão estática do código, não defeitos confirmados por testes em dispositivos reais.

## P0 — Confiabilidade
- [ ] Gerenciar `pointerId` para evitar conflitos entre toques simultâneos.
- [ ] Implementar salvamento e restauração automática de jogadas, com tratamento de falhas de armazenamento.
- [ ] Melhorar a borracha usando distância entre ponto e segmento, com tolerância proporcional à escala.

## P1 — Experiência e robustez
- [ ] Histórico de desfazer/refazer que inclua movimento dos jogadores e da bola.
- [ ] Testes em Android, iOS, tablet, telas pequenas e rotação.
- [ ] Validar exportação PNG, Web Share API, fallback de download e mensagens de erro.
- [ ] Testar teclado, leitores de tela, contraste e alvos de toque.

## P2 — Engenharia
- [ ] Extrair HTML/CSS/JS em módulos mantidos separadamente.
- [ ] Testes automatizados de geometria, interações e regressão visual.
- [ ] Medir desempenho de renderização antes de novas otimizações.
- [ ] Documentar versões e processo de release.

## Preparação para Play Store (futuro)
- [ ] Definir distribuição (PWA, Trusted Web Activity ou aplicativo Android).
- [ ] Implementar estratégia offline e ícones/splash.
- [ ] Verificar política de privacidade, dados coletados, requisitos de conta de desenvolvedor e políticas vigentes do Google Play.
- [ ] Validar assinatura, versões, compatibilidade, acessibilidade e testes em dispositivos reais.

## Critérios mínimos antes de lançamento
Nenhuma jogada perdida em fluxos normais; gestos confiáveis; exportação validada; comportamento consistente em telas alvo; testes de regressão; publicação oficial confirmada. Não declarar essas condições atendidas sem evidência.
