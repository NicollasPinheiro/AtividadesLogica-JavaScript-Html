let textoalternado = false;
document.getElementById('botao1').onclick = function () {
    if (!textoalternado) {
        document.getElementById('paragrafo1').innerText = 'Agora tem outro ae'
        textoalternado = true;}
    
    else if (textoalternado) {
        document.getElementById('paragrafo1').innerText = 'há um texto aqui'
        textoalternado = false;
    }
}
            
            function mudarcor() {
                document.getElementById('div1').style.backgroundColor = 'lightblue';
            }

            function voltarcor() {
                document.getElementById('div1').style.backgroundColor = '';
            }
const meuTexto = document.getElementById('paragrafo1');
const botaoAlinhar = document.getElementById('botao3');

const alinhamentos = ["left", "center","right"];
let indiceAlinhamento = 0; 

botaoAlinhar.addEventListener('click', function() {
  indiceAlinhamento = (indiceAlinhamento + 1) % alinhamentos.length;
  meuTexto.style.textAlign = alinhamentos[indiceAlinhamento];
});      
                

            
        