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
