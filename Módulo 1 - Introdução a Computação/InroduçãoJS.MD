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

### Baixo Nível vs Alto Nível 
**Baixo Nível**: Próximas ao hardware, difíceis para humanos entenderem.

**Alto Nível**: Voltadas para humanos, com sintaxe estruturada e legível.

# O que é um algoritmo?

Um algoritmo é uma sequência finita de instruções ou passos bem definidos que são seguidos para realizar uma tarefa ou resolver um problema. Ele descreve um processo lógico que transforma uma entrada (dados) em uma saída (resultado), de maneira clara e eficiente. 

## Lógica
**Definição**: Estudo do pensamento e ordenação de ideias.

**Exemplo**: Todo mamífero é um animal; todo cavalo é mamífero; logo, todo cavalo é animal.

## Métodos para Construção de um bom algoritmo
   - Ler atentamente o enunciado; 
   - Retirar do enunciado as entradas de dados;
   - Retirar do enunciado as saídas de dados;
   - Determinar o que dever ser feito para transformar as entradas determinadas nas saídas especificadas.

# Variáveis
### Características:

Nome único.

Tipo de dado associado;

Conteúdo armazenado;

Endereço na memória;

### Regras de Nomeação:

Começar com letra;

Seguir com letras/números;

Sem caracteres especiais, exceto underline;

Não pode ser uma palavra reservada.

### Tipos de Dados em JavaScript

**STRING**: Cadeia de caracteres.

**NUMBER**: Valores numéricos (inteiros ou reais).

**BOOLEAN**: Verdadeiro ou falso.

**UNDEFINED e NULL**: Indefinido e nulo.

## Operadores
### Operadores Relacionais:

==, !=, >, <, >=, <=, ===, !==.

### Operadores Lógicos:

&& (E), || (Ou), ! (Não).

## Estruturas de Controle: Condicionais

Definição: Impõem condições à sequência do algoritmo.

### Tipos:

- Condicional simples.
- Condicional composta.
- Estrutura de seleção switch-case.

