//Variaveis
const dataAtual = new Date()

// Data em String exemplo => 08/02/2025
function ano() {
    const ano = String(dataAtual.getFullYear()) // Pega os últimos 2 dígitos do ano

    return `${ano}`;
}
function diaMes() {
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Janeiro é 0

    return `${dia}-${mes}`;
} 
export function diaMesAno() {
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
    const ano = String(dataAtual.getFullYear()).slice(-2); // Pega os últimos 2 dígitos do ano

    return `${dia}/${mes}/${ano}`;
}


export function dataCabecalho(){

    document.getElementById('data').textContent = diaMesAno()
}

