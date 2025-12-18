const formulario = document.querySelector('#formulario');
const titulo = document.querySelector('#titulo');
const conteudo = document.querySelector('#conteudo');

// seletores para renderizar o conteudo
const tituloRenderizar = document.querySelector('#renderizador-titulo');
const conteudoRenderizar = document.querySelector('#renderizador-conteudo');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    // capturando os valores dos campos
    const tituloValor = titulo.value;
    const conteudoValor = conteudo.value;

    //montando o objeto como solicitado pela API
    const data = {
        title: tituloValor,
        body: conteudoValor,
        userId: 1
    };

    // enviando os dados para a API
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(json => {
        // renderizando o conteudo retornado pela API
        tituloRenderizar.textContent = json.title;
        conteudoRenderizar.textContent = json.body;

        // limpando os campos do formulario
        titulo.value = '';
        conteudo.value = '';
    })
    .catch(error => console.error('Erro:', error));
});