const botao = document.querySelector('#botao')
const voltar = document.querySelector('#voltar')
const avancar = document.querySelector('#avancar')
const parar = document.querySelector('#parar')
const maisdez = document.querySelector('#maisDez')
const menosdez = document.querySelector('#menosDez')
const video = document.querySelector('#playdia')

const ferro = document.getElementById('ferro')
const bronze = document.getElementById('bronze')
const prata = document.getElementById('prata')
const ouro = document.getElementById('ouro')
const plat = document.getElementById('plat')
const dima = document.getElementById('dima')
const asce = document.getElementById('asce')
const imo = document.getElementById('imo')
const rad = document.getElementById('rad')
const logo = document.getElementById('vava-logo')
const nick = document.getElementById('nick')
const legenda = document.getElementById('legenda')

botao.addEventListener('click', controleVideo)
voltar.addEventListener('click', lentoVideo)
avancar.addEventListener('click' , rapidoVideo)
parar.addEventListener('click' , pararVideo)
maisdez.addEventListener('click' , avancarVideo)
menosdez.addEventListener('click' , voltarVideo)

ferro.addEventListener('click', respostaErrada)
bronze.addEventListener('click', respostaErrada)
prata.addEventListener('click', respostaErrada)
ouro.addEventListener('click', respostaErrada)
plat.addEventListener('click', respostaErrada)
dima.addEventListener('click', respostaErrada)
imo.addEventListener('click', respostaErrada)
rad.addEventListener('click', respostaErrada)
asce.addEventListener('click', respostaCerta)

function respostaErrada(){
    alert("ERROOOOOUUU!!!!!")
    logo.src = "img/ascendente3.png"
    nick.innerHTML = 'ERROU!!!!'
    legenda.innerHTML ='Play do kaeL #1001, no video ele era Ascendente 1, atualmente está Ascentdente 3.'
  }
function respostaCerta(){
    alert("BOA!!!! ACERTOU ALGUMA COISA NA VIDA!!!")
    logo.src = "img/ascendente3.png"
    nick.innerHTML = 'ACERTOU!!!!'
    legenda.innerHTML ='Play do kaeL #1001, no video ele era Ascendente 1, atualmente está Ascentdente 3.'
}

function controleVideo(){
    if(video.paused){
        video.play()
        botao.innerHTML = '<i class="fa fa-pause"></i> PAUSE'
    }else{
        video.pause()
        botao.innerHTML = '<i class="fa fa-play"></i> PLAY'
    }
  
  }
  function lentoVideo(){
    video.playbackRate -= 0.1
  }
  function rapidoVideo(){
    video.playbackRate += 0.1
  }
  function pararVideo(){
    if(video.play){
    video.currentTime = 0
    video.pause()
    botao.innerHTML = '<i class="fa fa-play"></i> PLAY'
    }
  }
  function avancarVideo(){
    video.currentTime += 10
  }
  function voltarVideo(){
    video.currentTime -= 10
  }
