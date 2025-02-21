<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="../coroa.png" type="image/x-icon">
    <link rel="stylesheet" href="torno.css">
    <title>Torno</title>
</head>
<body>
    <main>
    <div id="cabecalho">
        <div id="cabecalho_menu">
            <div id="casa">
                <button type="button" value=""  class="botao" >
                <a href="../index.html"><img class="itens" src="../Escritorio/casa.png"></a>
                </button>
            </div>
                <select id="larguraSelect">
                        <option value="todos">Todos</option>
                        <option value="2mm">2mm</option>
                        <option value="3mm">3mm</option>
                        <option value="4mm">4mm</option>
                        <option value="5mm">5mm</option>
                        <option value="6mm">6mm</option>
                        <option value="7mm">7mm</option>
                        <option value="8mm">8mm</option>
                        <option value="9mm">9mm</option>
                        <option value="10mm">10mm</option>
                </select>
        </div>

    </div>
    </main>
    <?php 
    include_once('../conexao.php');

    $dadosImagem = ('SELECT imagem from pedidos');
    $dadosLargura = ('SELECT largura FROM pedidos');

    $resultadoImagem = mysqli_query($conectar, $dadosImagem ,$dadosLargura);


    if ($linha = mysqli_fetch_assoc($resultadoImagem)) {
        echo ": " . $linha["imagem"] . "<br>";
        echo ": " . $linha["largura"] . "<br>";
        echo ": " . $linha["imagem"] . "<br>";
    } else {
        echo "Nenhum usuário encontrado com esse nome.";
    }

    
    ?>
</body>
</html>
