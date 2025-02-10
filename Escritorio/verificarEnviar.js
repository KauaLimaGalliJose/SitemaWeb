import { diaMesAno } from "./dataHora.js";
//Variaveis do P , PG e PE
const select = document.getElementById('n_p');
let  select_N = select.options[0];
let  select_0 = select.options[1];
let  select_1 = select.options[2];
let  select_2 = select.options[3];
// Variáveis


const formulario = document.getElementById("formulario");
const cliente1 = document.getElementById('c1');
const cliente2 = document.getElementById('c2');
const cliente3 = document.getElementById('c3');
let chave = true;

// Função para mudar a cor da borda
function borderRed(id) {
    document.getElementById(id).style.borderColor = 'red';
}
function borderBlack(id) {
    document.getElementById(id).style.borderColor = 'black';
}

// Função para verificar os inputs
function verificar() {
    let preview = document.getElementById('modelo2');
    let pedido_mercado = document.getElementById('nome_m').value;
    let respostas = document.getElementById('numeracao_m').value;
    let respostas2 = document.getElementById('numeracao_f').value;
    let descricao = document.getElementById('descricao_P').value;
    let dataInput = document.getElementById('entrega').value;
 
    let respostas3 = [parseFloat(respostas)]; //'Number' transforma em numero e 'parseFloat' em decimais 
    let respostas4 = [parseFloat(respostas2)];
// Funcionamento da data ---------------------------------------------------------------------------------
    const data = diaMesAno();
    let [ano_input, mes_input, dia_input] = dataInput.split('-');
    let [dia,mes,ano] = data.split('/');
    let anoAtual, dataFinal

    // data Atual
    let varcharDia = String(dia);
    let varcharMes = String(mes);
    let somaDataAtual  = varcharMes + varcharDia;
    let somaDataAtualNumber =  Number(somaDataAtual);
    
    // data Escrita mo input
    let varcharDiaInput = String(dia_input);
    let varcharMesInput = String(mes_input);
    let somaDataAtual_Input = varcharMesInput + varcharDiaInput;
    let somaDataInputNumber = Number(somaDataAtual_Input);
// ▲▲▲▲ Essa pate foi uma conta que eu fiz para validar a data atual e não colocar as datas anteriores no pedido ------
    let valido = true;

    if (cliente1.checked || cliente2.checked || cliente3.checked) {
        document.getElementById("cabecalho").style.borderBottomColor = 'black';
        borderBlack('tipo_pedido');
    } else {
        document.getElementById("cabecalho").style.borderBottomColor = 'red';
        borderRed("tipo_pedido");
        valido = false;
    }
    if(cliente1.checked && select_N.selected){
        borderRed('n_p')
        valido = false;
    }
    else{
        borderBlack('n_p')
    }
    if(cliente1.checked && pedido_mercado.trim() === ''){
        borderRed('nome_m')
        valido = false;
    }
    else{
        borderBlack('nome_m')
    }
    //--------------------------------------Validação das numeração Masculina
    if((respostas3 <= 6) || (respostas3 >= 40) || isNaN(respostas3)){ // 'length' e para contar 
         borderRed('numeracao_m')    
        valido = false;
    }
    else{
        borderBlack('numeracao_m') 
    }
// --------------------------------------Validação das numeração Feminina
    if((respostas4 <= 6) || (respostas4 >= 40) || isNaN(respostas4)){ // 'length' e para contar 
        borderRed('numeracao_f')
        valido = false;
    }
    else{
        borderBlack('numeracao_f')
    }
// --------------------------------------Validação das Descrição do Pedido
    if(descricao.trim() === ''){
        borderRed('descricao_P')
        valido = false;
    }
    else{
        borderBlack('descricao_P')
    }
// ---------------------------------------------------------Validação Imagem
    if(preview.style.display !== 'block'){
        borderRed('modelo')
        borderRed('modelo_rainha')
        valido = false;
    }else{
        borderBlack('modelo')
        borderBlack('modelo_rainha')
    }
    // ------------------------------------------------------Data Personalizada
    if( somaDataInputNumber < somaDataAtualNumber || dataInput.length == 0 ){
        borderRed('entrega')
        valido = false;
    }
    else{
        borderBlack('entrega')
    }

    console.log("Soma Data Atual: " + somaDataAtualNumber)
    console.log("Soma Data Input: " + somaDataInputNumber)

    chave = valido;
}

export function enviar(){
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    verificar(); 
    if (chave === true) {
        const dadosInputs = new FormData(this);

        fetch("./PG2_Escritorio1.php", { 
            method: "POST",
            body: dadosInputs
        })
        .then(response => response.text()) 
        .then(data => {
            console.log("Resposta do servidor: " + data);
        })
        .catch(error => console.error("Erro:", error));
    } 
    else {
        console.log("Erro: Formulário inválido, não enviado.");
    }
});
}