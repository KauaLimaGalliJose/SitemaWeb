// imports
import { voltar, avancar, limpar } from "./funcao.js";
import { radioCabecalho, check_unidade, gravacaoExterna } from "./radiosChitobox.js";
import img_modelo  from "./imagemInput.js";
import { dataCabecalho } from "./dataHora.js";
import { enviar, naoenviar, verificar } from "./verificarEnviar.js";

//Buttons
const voltarBt = document.getElementById('seta_esquerda');
const avancarBt = document.getElementById('seta_direita');
const limparBt = document.getElementById('limpar');
const imagemBt = document.getElementById('uploadimg');
const enviarBt = document.getElementById('btEnviar');

//Global Variaveis
export let contador = { 
contador_P:1,
contador_Pg:1, 
contador_Pe:1
}

//Funções com Buttons
voltarBt.addEventListener('click', function(){
   contador =  voltar(contador.contador_P,contador.contador_Pg,contador.contador_Pe)
});

avancarBt.addEventListener('click', function(){
   contador =  avancar(contador.contador_P,contador.contador_Pg,contador.contador_Pe)
});

addEventListener('change', function(){
    radioCabecalho()
    check_unidade()
    gravacaoExterna()
}); 

imagemBt.addEventListener('click', function(){
    img_modelo()
});

limparBt.addEventListener('click',function(){
    limpar()
});

enviarBt.addEventListener('click',function(){
    if(verificar() === true){
        contador =  avancar(contador.contador_P,contador.contador_Pg,contador.contador_Pe)
        enviar()
    }
    else{
        naoenviar()
    }
});

//Funções para ser iniciadas
dataCabecalho()
