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
    const select = document.getElementById('select');
    listaOrdenada.innerHTML = '';
    select.innerHTML = '';
    resultado.results.forEach((itemApi) => {
      const itemLista = document.createElement('li');
      const itemOption = document.createElement('option');
      itemLista.innerHTML = itemApi.name;
      itemOption.innerHTML = itemApi.name;
      itemLista.addEventListener('click', () => {
        pegaPokemon(itemApi.url);
      });
      select.addEventListener('change', () => {
        if (itemApi.name === select.value) {
          pegaPokemon(itemApi.url);
        }
      });
      itemLista.addEventListener('mouseover', () => {
        itemLista.style.cursor = 'pointer';
        itemLista.style.background = 'red';
        itemLista.classList.add('zoom');
      });
      itemLista.addEventListener('mouseleave', () => {
        itemLista.style.background = 'rgb(212, 237, 247)';
        itemLista.classList.remove('zoom');
      })
      listaOrdenada.appendChild(itemLista);
      select.appendChild(itemOption);
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
  const tagHabilidade1 = document.getElementById('habilidade1');
  const tagHabilidade2 = document.getElementById('habilidade2');
  const tagPeso = document.getElementById('peso');
  const tagFoto = document.getElementById('foto');

  tagNome.innerHTML = `Nome: ${pokemon.name}`;
  tagNumero.innerHTML = `Número: ${pokemon.id}`;
  tagTipo1.innerHTML = `Tipo 1: ${pokemon.types[0].type.name}`;
  if (pokemon.types[1] !== undefined) {
    tagTipo2.innerHTML = `Tipo 2: ${pokemon.types[1].type.name}`;
  } else {
    tagTipo2.innerHTML = '';
  }
  tagHabilidade1.innerHTML = `Habilidade 1: ${pokemon.abilities[0].ability.name}`;
  if (pokemon.abilities[1] !== undefined) {
    tagHabilidade2.innerHTML = `Habilidade 2: ${pokemon.abilities[1].ability.name}`;
  } else {
    tagHabilidade2.innerHTML = '';
  }
  tagPeso.innerHTML = `Peso: ${Math.round(pokemon.weight/2.2046)}kg`;
  tagFoto.src = pokemon.sprites.other.dream_world.front_default;
};

pegaLista(enderecoApi);