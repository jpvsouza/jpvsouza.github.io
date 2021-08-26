const botaoEntrar = document.getElementById('entrar');
const campoEmail = document.getElementById('email');
const campoSenha = document.getElementById('senha');
const botaoEnviar = document.getElementById('submit-btn');
const aceitar = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const contador = document.getElementById('counter');
const materias = document.getElementsByClassName('subject');
const formulario = document.getElementById('evaluation-form');

function entrar() {
  if (campoEmail.value === 'tryber@teste.com' && campoSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function ativo() {
  if (aceitar.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

function counter() {
  contador.innerText = 500 - textArea.value.length;
}

function resgataMaterias() {
  const materia = [];
  const espaco = ' ';
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked) {
      materia.push(espaco + materias[i].value);
    }
  }
  return materia;
}

const avaliacao = document.getElementsByClassName('avaliacao');
function resgataAvaliacao() {
  for (let i = 0; i < avaliacao.length; i += 1) {
    if (avaliacao[i].checked) {
      return avaliacao[i].value;
    }
  }
}

const familia = document.getElementsByClassName('familia');
function resgataFamilia() {
  for (let i = 0; i < familia.length; i += 1) {
    if (familia[i].checked) {
      return familia[i].value;
    }
  }
}

function criaResultado(x, y) {
  const p = document.createElement('p');
  const divisor = ': ';
  p.innerText = x + divisor + y;
  formulario.appendChild(p);
}

function criaResposta(evento) {
  const espaco = ' ';
  const entradaNome = document.getElementById('input-name').value;
  const entradaSobrenome = document.getElementById('input-lastname').value;
  const nomeSobrenome = entradaNome + espaco + entradaSobrenome;
  const entradaCasa = document.getElementById('house').value;
  const entradaFamilia = resgataFamilia();
  const entradaMaterias = resgataMaterias();
  const entradaAvaliacao = resgataAvaliacao();
  const entradaObs = textArea.value;
  const email = document.getElementById('input-email').value;
  evento.preventDefault();
  criaResultado('Nome', nomeSobrenome);
  criaResultado('Email', email);
  criaResultado('Casa', entradaCasa);
  criaResultado('Família', entradaFamilia);
  criaResultado('Matérias', entradaMaterias);
  criaResultado('Avaliação', entradaAvaliacao);
  criaResultado('Observações', entradaObs);
}

function ativaEventos() {
  botaoEnviar.addEventListener('click', criaResposta);
  textArea.addEventListener('keyup', counter);
  botaoEntrar.addEventListener('click', entrar);
  aceitar.addEventListener('change', ativo);
}

ativaEventos();
