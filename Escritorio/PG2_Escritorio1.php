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
$largura = $_POST['largura'];
$outrosClientes = $_POST['txtcliente'];
$parSemPedra = $_POST['semPedra'];
$parComPedra = $_POST['comPedra'];
$estoqueF = $_POST['estoqueFeminina'];
$estoqueM = $_POST['estoqueMasculina'];

$idPedidos = $numeroPedido ."-". $dataEntrega;


// passando pro banco de dados

$dados = mysqli_query($conn, "INSERT INTO pedidos 
    (idpedido, cliente, nomePedido, numF, numeM, descricaoPedido, descricaoAlianca,largura, gravacaoInterna, gravacaoExterna,outrosClientes,imagem,parComEstoque,parSemEstoque,parPedra,parSemPedra) 
    VALUES ('$idPedidos', '$cliente', '$nomePedido', '$f', '$m', '$descricao_Pedido', '$descricaoAlianca','$largura', '$gravacao_inter', '$gravacao_exter', '$outrosClientes','$imagem' , '$estoqueF' ,'$estoqueM', '$parSemPedra' , '$parComPedra' )");
?>
