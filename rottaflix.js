// MEUS FILMES - Catálogo //

const meusFilmes = ["Matrix", "Vingadores", "John Wick", "Thor", "Star Wars", "Senhor dos Aneis", "Escola de Rock", "Mulher Maravilha", "Liga da Justiça", "Lobo de Wall Street", "Coringa", "Os 7 Crimes Capitais", "Exterminador do Futuro", "Toy Story", "Rei Leão", "Tempos Modernos", "Duro de Matar", "Velozes e Furiosos", "Missão Impossível", "Mortal Kombat", "Batman: O Cavaleiro das trevas", "Rocky", "Escorpião Rei"];
const meusFilmesImagens = ["imagens/Matrix.jpg", "imagens/Vingadores Ultimato.jpg", "imagens/John Wick.jpg", "imagens/Thor.jpg", "imagens/Star Wars.jpg", "imagens/Lord of the Rings.jpg", "imagens/Rock.jpg", "imagens/Mulher Maravilha.jpg", "imagens/SnyderCut.jpg", "imagens/TheWolf.jpg", "imagens/Joker.jpg", "imagens/Seven.jpg", "imagens/Terminator.jpg", "imagens/Toy Story.jpg", "imagens/LionKing.jpg", "imagens/Charles.jpg", "imagens/Die Hard.jpg", "imagens/FastFurious.jpg", "imagens/Missao Impossivel.jpg", "imagens/MK.jpg", "imagens/Batman.jpg", "imagens/Rocky.jpg", "imagens/ScorpionKing.jpg"];

// Página Inicial //

const guardarFilmes = [];
const guardarNomeFilmes = [];

function adicionarFilme() {
  var pegarFilme = document.getElementById("nomeFilme").value;
  var pegarImagem = document.getElementById("filme").value;
  var mostrarImagem = "<img src = " + pegarImagem + ">";
  var j = 0; var k = 0;
  //Validação de sugestoes repetidas
  for (var i = 0; i < guardarNomeFilmes.length; i++) {
    if (guardarFilmes[i] == pegarImagem || guardarNomeFilmes[i] == pegarFilme) {
      j++;
    }
  }
 //Validação de existentes no meu catálogo
  for (i = 0; i < meusFilmes.length; i++) {
    if (meusFilmes[i] == pegarFilme) {
      k++;
    }
  }

  if (pegarImagem == "" || pegarFilme == "") {
    erro.innerHTML =
      "Você precisa preencher os dois campos para inserir o filme";
  } else if (guardarNomeFilmes.length > 149) {
    erro.innerHTML = "Limite de filmes no Catalogo"; 
    } else if (j > 0) {
      erro.innerHTML = "Você ja sugeriu esse filme"; 
      } else if (k > 0) {
        erro.innerHTML = "Esse filme já está no <a href='rottaflix catalogo.html'> Meu Catálogo </a>"; 
        } else if (pegarImagem.endsWith(".jpg") || pegarImagem.endsWith(".png")) {
          erro.innerHTML = "<br>";
          guardarNomeFilmes.push(pegarFilme);
          guardarFilmes.push(mostrarImagem);
          indiceFilmes = guardarFilmes.length;
          listaFilmes.innerHTML = listaFilmes.innerHTML + "<lu class = 'listagemCatalogo'>" + "<li class = 'listaCatalogo'>" + indiceFilmes + " - " + pegarFilme + "</li>" +"<li class = 'listaCatalogo'>" + mostrarImagem + "</li>" + "</lu>";
            if (document.getElementById("remover").disabled == true) {
              document.getElementById("remover").disabled = false;
              document.getElementById("removerUm").disabled = false;
            }
          } else  {
          erro.innerHTML = "Insira um endereço de imagem válido";
            }
}

function removerEspecifico () {
  var indiceDoFilme = document.getElementById("numeroFilme").value;
  if (indiceDoFilme > guardarFilmes.length || indiceDoFilme == 0 || indiceDoFilme < 0) {
    erro.innerHTML = "Elemento nao encontrado";
  } else {
  guardarFilmes.splice (indiceDoFilme - 1, 1);
  guardarNomeFilmes.splice(indiceDoFilme - 1, 1);
    }
  listaFilmes.innerHTML = "";
  erro.innerHTML = "Filme " + indiceDoFilme + " removido";

  if (indiceDoFilme == "") {
    erro.innerHTML = "Preencha o campo com o número do indice";
  } else if (guardarFilmes.length == 0) {
    document.getElementById("removerUm").disabled = true;
    document.getElementById("remover").disabled = true;
  } else {
      for (var i = 0; i < guardarFilmes.length; i++)  {
        listaFilmes.innerHTML +=
        "<lu class = 'listagemCatalogo'>" +
        "<li class = 'listaCatalogo'>" +
        + (i+1) + " - " + guardarNomeFilmes[i] +
        "</li>" +
        "<li class = 'listaCatalogo'>" +
        guardarFilmes[i] +
        "</li>" +
        "</lu>";
      }
   }
}

function removerTodos() {
  document.getElementById("removerUm").disabled = true;
  document.getElementById("remover").disabled = true;
  listaFilmes.innerHTML = "";
  guardarFilmes.length = 0;
  guardarNomeFilmes.length = 0;
  erro.innerHTML = "Todos os filmes foram removidos";
}

// MEUS FILMES - Catálogo //

function mostrarFilmes() {
  for (var i = 0; i < meusFilmes.length; i++)  {
    listaFilmes.innerHTML +=
    "<lu class = 'listagemCatalogo'>" +
    "<li class = 'listaCatalogo'>" + meusFilmes[i] +
    "</li>" +
    "<li class = 'listaCatalogo'><img src='" +
    meusFilmesImagens[i] +
    "'></li>" +
    "</lu>";
  }
  document.getElementById("mostrar").disabled = true;
  listarSeries.innerHTML = "<button onClick='mostrarSeries()' id='mostrarSerie'>Mostrar Séries</button>"
}

function mostrarSeries() {
  listarSeries2.innerHTML = "Em breve...";
}
