var listaNome = []
var listaPoster = []
var bodyHTML = document.body.innerHTML
var elementoListaFilmes = document.getElementById("listaFilmes")
carregarItemsSalvos() 


function criarCatalogo(nome, imagem) {

  elementoListaFilmes.innerHTML = ''

  for (var i = 0; i < listaNome.length; i++) {
    elementoListaFilmes.innerHTML += '<div id="filme"><div><button id="botao-remover' + i + '" onclick="removerFilme('+ i +')"><i class="fa fa-trash" aria-hidden="true"></i></button></div><a href=' + youtubeTrailer(nome[i]) + ' target="_blank"><img src=' + imagem[i] + ' id="poster"></a><h3>' + nome[i] + '</h3></div>'

  }

}

function validar(imagem, texto) {
  var formatos = [".jpg",".png",".gif",".tiff",".jpeg"]
  var resultado = false

  if (texto != "") {
    for (var i = 0; i < formatos.length; i++) {
      if (imagem.endsWith(formatos[i]))  {
        resultado = true
      }
    }
  }
  return resultado
}

function adicionarFilme() {

  var posterFilme = document.getElementById("posterFilme").value
  var nomeFilme = document.getElementById("nomeFilme").value

  if (validar(posterFilme, nomeFilme)) {

    listaPoster.push(posterFilme)
    listaNome.push(nomeFilme)

    document.getElementById("nomeFilme").value = ""
    document.getElementById("posterFilme").value = ""

    criarCatalogo(listaNome, listaPoster)



  } else {
    alert("Argumentos inválidos!")
  }
}

function removerFilme(id) {
  listaNome.splice(id, 1)
  listaPoster.splice(id, 1)
  criarCatalogo(listaNome, listaPoster)
}

function carregarItemsSalvos() {
  fetch("cat.json")
    .then((response) => response.json())
    .then((data) => {
      listaPoster = data['listaPoster'];
      listaNome = data['listaNome'];
    });

  criarCatalogo(listaNome, listaPoster)
}

function mostraEEsconde() {
  var botaoTexto = document.getElementById('mostra-esconde')
  if (botaoTexto.innerText == 'Exibir Filmes') {
    botaoTexto.innerText = 'Minimizar Filmes'
    carregarItemsSalvos()
  } else {
    botaoTexto.innerText = 'Exibir Filmes'
    elementoListaFilmes.innerHTML = ''
  }
}

function youtubeTrailer(nome) {
  return linkQuery = 'https://www.youtube.com/results?search_query=' + 'trailer+' + nome.replace(/ /g, '+')
}
