const enderecoApi = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'

const verificaFetch = (endereco) => {
  return new Promise((resolve, reject) => {
    if (endereco !== 'Erro') {
      fetch (endereco)
      .then((resultado) => resultado.json())
      .then((dados) => resolve(dados));
    } else {
      reject(new Error('endpoint não existe'))
    }
  })
};

const pegaLista = (enderecoAtual) => {
  const resultadoDoFetch = verificaFetch(enderecoAtual)
  .then((resultado) => {
    const listaOrdenada = document.getElementById('lista');
    listaOrdenada.innerHTML = '';
    resultado.results.forEach((itemApi) => {
      const itemLista = document.createElement('li');
      itemLista.innerHTML = itemApi.name;
      listaOrdenada.appendChild(itemLista);
    });
  })
  .catch((erro) => console.log(erro));
};

pegaLista(enderecoApi);