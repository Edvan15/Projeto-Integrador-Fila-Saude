let remedios = [
  {
    id: 1,
    postoId: 1,
    nome: 'Dipirona',
    dosagem: '500mg',
    quantidade: '100',
    descricao: 'Remédio para dor e febre'
  },
  {
    id: 2,
    postoId: 1,
    nome: 'Paracetamol',
    dosagem: '750mg',
    quantidade: '60',
    descricao: 'Remédio para dor e febre'
  }
]

let proximoId = 3

export function listarRemediosPorPosto(postoId) {
  return remedios.filter(remedio => remedio.postoId === Number(postoId))
}

export function buscarRemedioPorId(id) {
  return remedios.find(remedio => remedio.id === Number(id))
}

export function cadastrarRemedio(remedio) {
  const novoRemedio = {
    id: proximoId,
    postoId: Number(remedio.postoId),
    nome: remedio.nome,
    dosagem: remedio.dosagem,
    quantidade: remedio.quantidade,
    descricao: remedio.descricao
  }

  remedios.push(novoRemedio)
  proximoId++
}

export function atualizarRemedio(id, remedioAtualizado) {
  remedios = remedios.map(remedio => {
    if (remedio.id === Number(id)) {
      return {
        ...remedio,
        nome: remedioAtualizado.nome,
        dosagem: remedioAtualizado.dosagem,
        quantidade: remedioAtualizado.quantidade,
        descricao: remedioAtualizado.descricao
      }
    }

    return remedio
  })
}

export function removerRemedio(id) {
  remedios = remedios.filter(remedio => remedio.id !== Number(id))
}
