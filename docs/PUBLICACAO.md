# Publicação e diagnóstico do GitHub Pages

## Repositório
https://github.com/anderson-alves-martins/simulador-beach-tennis

Branch oficial: `main`. Arquivo de entrada: `index.html`.

Site esperado: https://anderson-alves-martins.github.io/simulador-beach-tennis/

## Fluxo de publicação
1. Revisar e testar mudanças na branch de desenvolvimento.
2. Integrar a versão aprovada na `main`.
3. Abrir **Actions** no GitHub e verificar o workflow **pages build and deployment** associado ao SHA publicado.
4. Aguardar conclusão com `success`. Um commit na `main` não garante que o site já foi atualizado.
5. Abrir o site oficial e validar título, cores, botões e interações.
6. Se houver divergência, comparar o SHA do workflow, conferir configuração de origem do Pages e testar em aba anônima/sem cache.

## Diagnóstico observado em 22/10/2026
- SHA da `main`: `c5d6e00331f9acac7e733bad9c823a6ab0387f34`.
- Workflow dessa revisão: https://github.com/anderson-alves-martins/simulador-beach-tennis/actions/runs/39795162906
- Na consulta realizada, o workflow constava como **queued**. Isso é um retrato daquele momento, não o status permanente.
- A versão anterior `df0b6db...` tinha workflow concluído com sucesso.
- Link de visualização direta do commit: https://htmlpreview.github.io/?https://raw.githubusercontent.com/anderson-alves-martins/simulador-beach-tennis/c5d6e00331f9acac7e733bad9c823a6ab0387f34/index.html

## Importante
A prévia do arquivo via htmlpreview não equivale à confirmação de publicação do GitHub Pages. Não atribuir divergência exclusivamente ao cache antes de confirmar a execução do workflow e a origem configurada para Pages.
