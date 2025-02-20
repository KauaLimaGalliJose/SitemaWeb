function generate() {
    let outros = document.getElementById("outros").value;
    let gravInterna = document.getElementById('grav_m').value;
    
    // Converter a imagem do preview (dataURL) para binário
    const imagem = document.getElementById('modelo2');
    const base64String = imagem.src.split(',')[1];
    const binaryString = window.atob(base64String);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    // Função para criar o documento
    function criarDocumento(tipo_pedido,contador, sei) {
         // Dividir o texto da gravação em linhas
         const gravacaoLinhas = gravInterna.split('\n').map(linha => new docx.TextRun({
            text: linha,
            bold: true,
            size: 20,
            color: "000000",
            break: 1  // Quebra de linha após cada linha de gravação
        }));

        return new docx.Document({
            sections: [{
                properties: {},
                children: [
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                text: `${tipo_pedido}${contador} - ${sei}`,
                                bold: true,
                                size: 60,
                                color: "FF0000",
                            }),
                            new docx.TextRun({
                                text: ' -- ' + dataFinal,
                                bold: true,
                                size: 60,
                                color: "000000",
                            }),
                            new docx.TextRun("\n                                                                                                   "),
                            new docx.TextRun("\n"),
                            new docx.TextRun({
                                text: descricao_cliente,
                                bold: true,
                                size: 25,
                                color: "000000",
                            }),
                            new docx.TextRun("\n                                                                                                                   "),
                            new docx.ImageRun({
                                data: bytes,
                                transformation: { width: 200, height: 150 },
                            }),
                            new docx.TextRun("\n                                                                                                  "),
                            new docx.TextRun("\n"),
                            new docx.TextRun({
                                text: 'Feminina: ' + feminina,
                                bold: true,
                                size: 40,
                                color: "000000",
                            }),
                            new docx.TextRun("\n     "),
                            new docx.TextRun({
                                text: 'Masculina: ' + masculina,
                                bold: true,
                                size: 40,
                                color: "000000",
                            }),
                            new docx.TextRun("\n"),
                            // Adicionando cada linha de gravação ao documento
                            ...gravacaoLinhas
                        ],
                    }),
                ],
            }]
        });
    }
// função Sem ser a do mercado Livre
    function criarDocumento_outros(tipo_pedido) {
         // Dividir o texto da gravação em linhas
         const gravacaoLinhas = gravInterna.split('\n').map(linha => new docx.TextRun({
            text: linha,
            bold: true,
            size: 20,
            color: "000000",
            break: 1  // Quebra de linha após cada linha de gravação
        }));
        

        return new docx.Document({
            sections: [{
                properties: {},
                children: [
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                text: `${tipo_pedido}`,
                                bold: true,
                                size: 60,
                                color: "FF0000",
                            }),
                            new docx.TextRun({
                                text: ' -- ' + dataFinal,
                                bold: true,
                                size: 60,
                                color: "000000",
                            }),
                            new docx.TextRun("\n                                                                                                           "),
                            new docx.TextRun({
                                text: descricao_cliente,
                                bold: true,
                                size: 25,
                                color: "000000",
                            }),
                            new docx.TextRun("\n                                                                                                                  "),
                            new docx.ImageRun({
                                data: bytes,
                                transformation: { width: 200, height: 150 },
                            }),
                            new docx.TextRun("\n                                                                                                  "),
                            new docx.TextRun("\n"),
                            new docx.TextRun({
                                text: 'Feminina: ' + feminina,
                                bold: true,
                                size: 40,
                                color: "000000",
                            }),
                            new docx.TextRun("\n                             "),
                            new docx.TextRun({
                                text: 'Masculina: ' + masculina,
                                bold: true,
                                size: 40,
                                color: "000000",
                            }),
                            new docx.TextRun("\n"),
                            // Adicionando cada linha de gravação ao documento
                            ...gravacaoLinhas
                        ],
                    }),
                ],
            }]
        });
    }
    // Função para salvar o documento sem ser Mercado Livre
    function salvaDocumento_outros(documento, tipo_pedido) {
        docx.Packer.toBlob(documento).then(blob => {
            saveAs(blob, `${outros}-${tipo_pedido}__${dia_e_mes}`);
            document.getElementById(tipo_pedido + '1').innerHTML = `${tipo_pedido}`;
        });
    }
    function salvaDocumento_outrosc3(documento, tipo_pedido, cliente) {
        docx.Packer.toBlob(documento).then(blob => {
            saveAs(blob, `${cliente}-${tipo_pedido}__${dia_e_mes}`);
            document.getElementById(tipo_pedido + '1').innerHTML = `${tipo_pedido}`;
        });
    }

    // Função para salvar o documento
    function salvaDocumento(documento, tipo_pedido, contador, sei) {
        docx.Packer.toBlob(documento).then(blob => {
            saveAs(blob, `${tipo_pedido}${contador}__${sei}-${dia_e_mes}`);
            document.getElementById(tipo_pedido + '1').innerHTML = `${tipo_pedido}${contador + 1}`;
        });
    }

    // Gerar documentos de acordo com a seleção
    if(cliente1.checked){
    //Pedido P
    if (select_0.selected) {

        const documento = criarDocumento('P', p_contador, sei);
        salvaDocumento(documento, 'P', p_contador, sei);

    }
    //Pedido PG
    else if (select_1.selected) {

        const documento = criarDocumento('PG', pg_contador, sei);
        salvaDocumento(documento, 'PG', pg_contador, sei);

    }
    //Pedido PE
    else if (select_2.selected) {

        const documento = criarDocumento('PE', pe_contador, sei);
        salvaDocumento(documento, 'PE', pe_contador, sei);

    }
   }
   // Sem ser Mercado Livre
   if(cliente2.checked){
   let centroAliancaOutros = document.getElementById('nome_p').value;
    outros.value = ' ';

    const documento = criarDocumento_outros(centroAliancaOutros);
    salvaDocumento_outros(documento,centroAliancaOutros,outros);
   }
   if(cliente3.checked){
    let centroAliancaOutros = document.getElementById('nome_p').value;
    
     const documento = criarDocumento_outros(centroAliancaOutros);
     salvaDocumento_outrosc3(documento,centroAliancaOutros,outros);
    }

}
