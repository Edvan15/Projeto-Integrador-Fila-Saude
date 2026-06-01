import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    senha: ''
  })

  function alterarCampo(event) {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  function entrar(event) {
    event.preventDefault()
    navigate('/postos')
  }

  return (
    <section className="card formulario-card">
      <h1>Login</h1>

      <form onSubmit={entrar}>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={alterarCampo}
          placeholder="Digite seu e-mail"
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          name="senha"
          value={form.senha}
          onChange={alterarCampo}
          placeholder="Digite sua senha"
          required
        />

        <button type="submit">Entrar</button>
      </form>

      <p>
        Não tem conta? <Link className="link-texto" to="/cadastro">Cadastre-se</Link>
      </p>
    </section>
  )
}

export default Login
