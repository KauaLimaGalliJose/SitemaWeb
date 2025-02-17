<?php
include_once('conexao.php');

//imagem 
if(isset($_FILES['imagem']) && !empty($_FILES['imagem'])){
    move_uploaded_file($_FILES['imagem']['tmp_name'], "../imagem/".$_FILES['imagem']['name'] );
}

// Puxando dados
$numeroPedido = $_POST['numeroPedido'];
$dataEntrega = $_POST['dataEntrega'];
$cliente = $_POST['cliente'];
$nomePedido = $_POST['nome_m'];
$nomePedidoC = $_POST['nome_p'];
$f = $_POST['f'];
$m = $_POST['m'];
$descricao_Pedido = $_POST['descricao_Pedido'];
$descricaoAlianca = $_POST['descricao_Alianca'];
$gravacao_exter = $_POST['gravacao_exter'];
$gravacao_inter = $_POST['gravacao_inter'];

$idPedidos = $numeroPedido ."-". $dataEntrega;


// passando pro banco de dados

$dados = mysqli_query($conn, "INSERT INTO pedidos 
    (numeroPedido, cliente, nomePedido, numeracaoM, numeracaoF, descricaoPedido, descricaoAlianca, gravacaoInterna, gravacaoExterna) 
    VALUES ('$idPedidos', '$cliente', '$nomePedido', '$m', '$f', '$descricao_Pedido', '$descricaoAlianca', '$gravacao_inter', '$gravacao_exter')");
?>
