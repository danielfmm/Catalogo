var listaNome = []
var listaPoster = []
var listaLink = []
var bodyHTML = document.body.innerHTML
var elementoListaFilmes = document.getElementById("listaFilmes")

function criarCatalogo(link, nome, imagem) {

  elementoListaFilmes.innerHTML = ''

  for (var i = 0; i < listaNome.length; i++) {
    elementoListaFilmes.innerHTML += '<div id="filme"><div><button id="botao-remover' + i + '" onclick="removerFilme('+ i +')"><i class="fa fa-trash" aria-hidden="true"></i></button></div><a href=' + link[i] + ' target="_blank"><img src=' + imagem[i] + ' id="poster"></a><h3>' + nome[i] + '</h3></div>'

  }
  
}


function validar(imagem, link, texto) {
  var formatos = [".jpg",".png",".gif",".tiff",".jpeg"]
  var resultado = false
  
  if (link != "" && texto != "") {
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
  var trailerFilme = document.getElementById("trailerFilme").value
  var nomeFilme = document.getElementById("nomeFilme").value
  

  if (validar(posterFilme, trailerFilme, nomeFilme)) {    
    
    listaPoster.push(posterFilme)    
    listaLink.push(trailerFilme)
    listaNome.push(nomeFilme)

    document.getElementById("nomeFilme").value = ""
    document.getElementById("posterFilme").value = ""
    document.getElementById("trailerFilme").value = ""
    
    criarCatalogo(listaLink, listaNome, listaPoster)

  } else {
    alert("Argumentos inválidos!")
  }
}


function removerFilme(id) {
  listaLink.splice(id, 1)
  listaNome.splice(id, 1)
  listaPoster.splice(id, 1)
  criarCatalogo(listaLink, listaNome, listaPoster)
}

