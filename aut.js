const users = [
    { email: 'santanawericles@gmail.com', senha: '1234567' },
    { email: 'joannanaftaly@gmail.com', senha: '12345678' },
    { email: 'user3@example.com', senha: 'password3' },
]

const loginForm = document.getElementById('login-form')
const loginButton = document.getElementById('login-button')

loginButton.addEventListener('click', () => {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if (!email || !senha) {
        alert('Por favor, preencha todos os campos.')
        return
    }

    if (senha.length < 7) {
        alert('A senha deve ter pelo menos 7 caracteres.')
        return
    }

    const authenticatedUser = users.find(
        (user) => user.email === email && user.senha === senha
    )

    if (authenticatedUser) {
        alert('Login feito com sucesso')
        window.location.href = 'http://127.0.0.1:5500/pagina-principal.html'
    } else {
        alert('Email ou senha inválida')
    }
})
