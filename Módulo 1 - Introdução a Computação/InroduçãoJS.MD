# Aula 02 - Introdução à Lógica e Linguagens de Programação JavaScript

Tudo no computador faz parte do conjunto de Entrada -> Processamento -> Saída

## Linguagem Compilada x Interpretada

### 1. Linguagem Compilada

1. **Processo de compilação**  
   - Antes de rodar o programa, você passa todo o código‑fonte por um **compilador**.  
   - O compilador traduz seu código em **código de máquina** (binário) — instruções específicas do processador.  
   - O resultado é um **arquivo executável** (ou biblioteca) pronto para rodar.

2. **Vantagens**  
   - **Velocidade**: execução direta em código de máquina.  
   - **Proteção do código‑fonte**: distribui-se apenas o binário.  

3. **Desvantagens**  
   - **Portabilidade**: precisa recompilar para diferentes sistemas/processadores.  
   - **Tempo de compilação**: projetos grandes podem demorar.  
   - **Debug**: mapear erro no binário de volta ao fonte nem sempre é trivial.

4. **Exemplos**  
   - C, C++, Rust, Go, Swift

---

### 2. Linguagem Interpretada

1. **Processo de interpretação**  
   - Um **interpretador** lê o código‑fonte **linha a linha** (ou bloco a bloco) em tempo de execução.  
   - Cada instrução é traduzida “na hora” em operações de máquina ou chamadas de biblioteca.

2. **Vantagens**  
   - **Portabilidade**: basta ter o interpretador instalado.  
   - **Ciclo de desenvolvimento rápido**: sem etapa de compilação.  
   - **Flexibilidade**: suporte a metaprogramação e alterações dinâmicas.

3. **Desvantagens**  
   - **Performance**: geralmente mais lento.  
   - **Distribuição**: expõe o código‑fonte (ou bytecode).  
   - **Overhead**: carregamento do interpretador.

4. **Exemplos**  
   - Python, Ruby, JavaScript, PHP

# O que é um algoritmo?

