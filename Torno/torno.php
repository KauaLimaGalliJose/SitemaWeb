<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="../coroa.png" type="image/x-icon">
    <link rel="stylesheet" href="torno.css">
    <title>Torno</title>
</head>
<body>
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
    <?php include_once('../conexao.php');?>
    <div id="phpDiv">
        <?php 
            $dados = "SELECT DISTINCT imagem,idpedidos FROM pedidos";
           $dadosPedidos = mysqli_query($conectar, $dados );

            if($dadosPedidos){
                while($linha = mysqli_fetch_assoc($dadosPedidos) ){
                    ?>
                    <div class="pedidosImagem">
                    <img class= "Imagem" src=" <?php echo $linha['imagem']; ?>">
                </div> 
                <?php
                }
            } ?>
        
    </div>
</body>
</html>
