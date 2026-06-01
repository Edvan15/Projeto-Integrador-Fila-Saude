import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  atualizarPosto,
  buscarPostoPorId,
  cadastrarPosto
} from '../services/postoService.js'

function PostoForm() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [form, setForm] = useState({
    nome: '',
    cnpj: '',
    endereco: '',
    bairro: '',
    telefone: ''
  })

  useEffect(() => {
    if (id) {
      const posto = buscarPostoPorId(id)

      if (posto) {
        setForm({
          nome: posto.nome,
          cnpj: posto.cnpj,
          endereco: posto.endereco,
          bairro: posto.bairro,
          telefone: posto.telefone
        })
      }
    }
  }, [id])

  function alterarCampo(event) {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  function salvar(event) {
    event.preventDefault()

    if (id) {
      atualizarPosto(id, form)
    } else {
      cadastrarPosto(form)
    }

    navigate('/postos')
  }

  return (
    <section className="card formulario-card">
      <h1>{id ? 'Editar Posto' : 'Novo Posto'}</h1>

      <form onSubmit={salvar}>
        <label htmlFor="nome">Nome do posto</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={form.nome}
          onChange={alterarCampo}
          placeholder="Digite o nome do posto"
          required
        />

        <label htmlFor="cnpj">CNPJ</label>
        <input
          id="cnpj"
          type="text"
          name="cnpj"
          value={form.cnpj}
          onChange={alterarCampo}
          placeholder="00.000.000/0000-00"
          required
        />

        <label htmlFor="endereco">Endereço</label>
        <input
          id="endereco"
          type="text"
          name="endereco"
          value={form.endereco}
          onChange={alterarCampo}
          placeholder="Digite o endereço"
          required
        />

        <label htmlFor="bairro">Bairro</label>
        <input
          id="bairro"
          type="text"
          name="bairro"
          value={form.bairro}
          onChange={alterarCampo}
          placeholder="Digite o bairro"
          required
        />

        <label htmlFor="telefone">Telefone</label>
        <input
          id="telefone"
          type="text"
          name="telefone"
          value={form.telefone}
          onChange={alterarCampo}
          placeholder="Digite o telefone"
          required
        />

        <div className="botoes-formulario">
          <button type="submit">Salvar</button>

          <button
            type="button"
            className="botao-secundario"
            onClick={() => navigate('/postos')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  )
}

export default PostoForm
