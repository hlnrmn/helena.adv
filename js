// Validação do formulário de contato
document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;
    let mensagemSucesso = document.getElementById('mensagemSucesso');

    // Verifica se todos os campos estão preenchidos
    if (nome && email && mensagem) {
        mensagemSucesso.innerHTML = `<p style="color: green;">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>`;
    } else {
        mensagemSucesso.innerHTML = `<p style="color: red;">Por favor, preencha todos os campos.</p>`;
    }

    // Limpar o formulário
    document.getElementById('contatoForm').reset();
});
