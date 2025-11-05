# Estilizando com CSS

## Novas TAGs aprendidas HTML

```html
<aside>
    <h2>Menu</h2>
    <ul>
        <li>Dashboard</li>
        <li>Relatórios</li>
        <li>Contatos</li>
    </ul>
</aside>
```
Explicação:

``<aside>``: representa conteúdo lateral, geralmente um menu ou barra de navegação.

## Estrutura da Tabela

```javascript
<table>
    <thead>
        <tr>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Maria Silva</td>
            <td>Notebook</td>
            <td>1</td>
            <td class="status-concluido">Concluído</td>
        </tr>
        ...
    </tbody>
</table>
```
``<thead>``: cabeçalho da tabela.

``<tbody>``: corpo da tabela com os dados.

``<th>``: células de cabeçalho (negrito e centralizadas por padrão).

``<td>``: células comuns com os dados.

As classes .status-concluido e .status-pendente são usadas para colorir o texto conforme o status da venda.

## Estilização CSS

```css
body {
    margin: 0;
    background-color: #f5f5f5;
    color: #333;
    display: flex;
}
```
Remove as margens padrão da página.

Define cor de fundo clara e texto escuro.

Usa ``display: flex`` para alinhar o menu e o conteúdo lado a lado.