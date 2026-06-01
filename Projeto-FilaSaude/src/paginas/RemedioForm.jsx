import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  atualizarRemedio,
  buscarRemedioPorId,
  cadastrarRemedio
} from '../services/remedioService.js'

function RemedioForm() {
  const navigate = useNavigate()
  const { postoId, id } = useParams()

  const [form, setForm] = useState({
    nome: '',
    dosagem: '',
    quantidade: '',
    descricao: ''
  })

  useEffect(() => {
    if (id) {
      const remedio = buscarRemedioPorId(id)

      if (remedio) {
        setForm({
          nome: remedio.nome,
          dosagem: remedio.dosagem,
          quantidade: remedio.quantidade,
          descricao: remedio.descricao
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
      atualizarRemedio(id, form)
    } else {
      cadastrarRemedio({
        ...form,
        postoId: postoId
      })
    }

    navigate(`/postos/${postoId}/remedios`)
  }

  return (
    <section className="card formulario-card">
      <h1>{id ? 'Editar Remédio' : 'Novo Remédio'}</h1>

      <form onSubmit={salvar}>
        <label htmlFor="nome">Nome do remédio</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={form.nome}
          onChange={alterarCampo}
          placeholder="Digite o nome do remédio"
          required
        />

        <label htmlFor="dosagem">Dosagem</label>
        <input
          id="dosagem"
          type="text"
          name="dosagem"
          value={form.dosagem}
          onChange={alterarCampo}
          placeholder="Ex: 500mg"
          required
        />

        <label htmlFor="quantidade">Quantidade</label>
        <input
          id="quantidade"
          type="number"
          name="quantidade"
          value={form.quantidade}
          onChange={alterarCampo}
          placeholder="Digite a quantidade"
          required
        />

        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          value={form.descricao}
          onChange={alterarCampo}
          placeholder="Digite uma descrição simples"
        ></textarea>

        <div className="botoes-formulario">
          <button type="submit">Salvar</button>

          <button
            type="button"
            className="botao-secundario"
            onClick={() => navigate(`/postos/${postoId}/remedios`)}
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  )
}

export default RemedioForm
