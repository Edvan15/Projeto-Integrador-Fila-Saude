let postos = [
  {
    id: 1,
    nome: 'PostoLar',
    cnpj: '00.000.000/0000-00',
    endereco: 'Rua Principal, 123',
    bairro: 'Centro',
    telefone: '(11) 99999-988'
  }
]

let proximoId = 2

export function listarPostos() {
  return postos
}

export function buscarPostoPorId(id) {
  return postos.find(posto => posto.id === Number(id))
}

export function cadastrarPosto(posto) {
  const novoPosto = {
    id: proximoId,
    nome: posto.nome,
    cnpj: posto.cnpj,
    endereco: posto.endereco,
    bairro: posto.bairro,
    telefone: posto.telefone
  }

  postos.push(novoPosto)
  proximoId++
}

export function atualizarPosto(id, postoAtualizado) {
  postos = postos.map(posto => {
    if (posto.id === Number(id)) {
      return {
        ...posto,
        nome: postoAtualizado.nome,
        cnpj: postoAtualizado.cnpj,
        endereco: postoAtualizado.endereco,
        bairro: postoAtualizado.bairro,
        telefone: postoAtualizado.telefone
      }
    }

    return posto
  })
}

export function removerPosto(id) {
  postos = postos.filter(posto => posto.id !== Number(id))
}
