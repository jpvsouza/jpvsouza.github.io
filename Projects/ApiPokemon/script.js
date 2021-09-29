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
      itemLista.addEventListener('click', () => {
        if (itemApi.name === 'bulbasaur') {
          pegaPokemon(itemApi.url);
        }
      });
      listaOrdenada.appendChild(itemLista);
    });
  })
  .catch((erro) => console.log(erro));
};

const pegaPokemon = (url) => {
  const resultado = verificaFetch(url)
  .then((resultado) => {
    atualizaFormulario(resultado);
  })
};

const atualizaFormulario = (pokemon) => {
  const tagNome = document.getElementById('nome');
  const tagNumero = document.getElementById('id');
  const tagTipo1 = document.getElementById('tipo1');
  const tagTipo2 = document.getElementById('tipo2');
  const tagPeso = document.getElementById('peso');
  const tagFoto = document.getElementById('foto');

  tagNome.innerHTML = pokemon.name;
  tagNumero.innerHTML = pokemon.id;
  tagTipo1.innerHTML = pokemon.types[0].type.name;
  tagTipo2.innerHTML = pokemon.types[1].type.name;
  tagPeso.innerHTML = pokemon.weight;
  tagFoto.src = pokemon.sprites.other.dream_world.front_default;
};

pegaLista(enderecoApi);