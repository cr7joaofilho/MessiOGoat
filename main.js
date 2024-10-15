function criaCartao (categoria, pergunta, resposta ){
let container = document.getElementById('container');
let cartao =document.createElement('article');
cartao.className = 'cartao';
cartao.innerHTML = `
<div class="conteudocartao">
    <h3>${categoria}</h3>
    <div class="perguntacartao">
        <p>${pergunta} </p>
    </div>
    <div class="respostacartao">
        <p>${resposta}</p>
    </div>
</div>
` 
container.appendChild(cartao);
}