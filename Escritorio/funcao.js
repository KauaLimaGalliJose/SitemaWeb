// funcao.js
export function voltar(contador_P, contador_Pg, contador_Pe) {
    let numeroPedido = document.getElementById('n_p');
    let p = numeroPedido.options[1];
    let pg = numeroPedido.options[2];
    let pe = numeroPedido.options[3];

    if (p.selected) {
        contador_P--;
        console.log(p);
        document.getElementById('P1').innerHTML = "P" + contador_P;
    }
    if (pg.selected) {
        contador_Pg--;
        document.getElementById('PG1').innerHTML = "PG" + contador_Pg;
    }
    if (pe.selected) {
        contador_Pe--;
        document.getElementById('PE1').innerHTML = "PE" + contador_Pe;
    }

    return { contador_P, contador_Pg, contador_Pe };
}

export function avancar(contador_P, contador_Pg, contador_Pe) {
    let numeroPedido = document.getElementById('n_p');
    let p = numeroPedido.options[1];
    let pg = numeroPedido.options[2];
    let pe = numeroPedido.options[3];

    if (p.selected) {
        contador_P++;
        console.log(p);
        document.getElementById('P1').innerHTML = "P" + contador_P;
    }
    if (pg.selected) {
        contador_Pg++;
        document.getElementById('PG1').innerHTML = "PG" + contador_Pg;
    }
    if (pe.selected) {
        contador_Pe++;
        document.getElementById('PE1').innerHTML = "PE" + contador_Pe;
    }

    return { contador_P, contador_Pg, contador_Pe };
}

export function limpar(){
    document.getElementById('nome_m').value ='';
    document.getElementById('numeracao_m').value = '';
    document.getElementById('numeracao_f').value = '';
    document.getElementById('descricao_P').value = '';
    document.getElementById('entrega').value = '';
    document.getElementById('grav_externaInput').value = '';
    document.getElementById('descricao_A').value = '';
    document.getElementById('grav_m').value = '';
    document.getElementById("outros").value = '';
    document.getElementById('nome_p').value = '';  
    document.getElementById('modelo2').style.display = 'none';
    document.getElementById('modelo_rainha').style.display = 'block';
}
