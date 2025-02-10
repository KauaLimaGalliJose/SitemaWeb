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