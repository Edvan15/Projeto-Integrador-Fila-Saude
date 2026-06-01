import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'
import PostoList from './pages/PostoList.jsx'
import PostoForm from './pages/PostoForm.jsx'
import PostoDetalhe from './pages/PostoDetalhe.jsx'
import RemedioList from './pages/RemedioList.jsx'
import RemedioForm from './pages/RemedioForm.jsx'

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/postos" element={<PostoList />} />
          <Route path="/postos/novo" element={<PostoForm />} />
          <Route path="/postos/editar/:id" element={<PostoForm />} />
          <Route path="/postos/:id" element={<PostoDetalhe />} />
          <Route path="/postos/:postoId/remedios" element={<RemedioList />} />
          <Route path="/postos/:postoId/remedios/novo" element={<RemedioForm />} />
          <Route path="/postos/:postoId/remedios/editar/:id" element={<RemedioForm />} />
          <Route path="/gerenciar-postos" element={<PostoList />} />
          <Route path="/novo-posto" element={<PostoForm />} />
          <Route path="/posto" element={<Navigate to="/postos/1" />} />
          <Route path="/gerenciar-remedios" element={<Navigate to="/postos/1/remedios" />} />
          <Route path="/novo-remedio" element={<Navigate to="/postos/1/remedios/novo" />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
