const users = [
    { email: 'santanawericles@gmail.com', senha: '1234567' },
    { email: 'user2@example.com', senha: 'password2' },
    { email: 'user3@example.com', senha: 'password3' },
]

const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const authenticatedUser = users.find(
        (user) => user.email === email && user.senha === senha
    )

    if (authenticatedUser) {
        alert('Login feito com sucesso')
        // Redirecionar para página restrita
    } else {
        alert('Email ou senha inválida')
    }
})
