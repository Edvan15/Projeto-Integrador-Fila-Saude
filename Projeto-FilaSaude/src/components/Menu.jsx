import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav className="menu">
      <h2>Fila-Saúde</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/postos">Postos</Link>
      </div>
    </nav>
  )
}

export default Menu
