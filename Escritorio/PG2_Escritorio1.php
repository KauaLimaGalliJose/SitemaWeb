<?php
include_once('conexao.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
// Puxando dados
$numeroPedido = $_POST['numeroPedido'];
$dataEntrega = $_POST['dataEntrega'];
$cliente = $_POS['cliente'];
$nomePedido = $_POST['nome_m'];
$nomePedidoC = $_POST['nome_p'];
$f = $_POST['f'];
$m = $_POST['m'];
$descricao_Pedido = $_POST['descricao_Pedido'];
$descricao_Alianca = $_POST['descricao_Alianca'];
$gravacao_exter = $_POST['gravacao_exter'];
$gravacao_inter = $_POST['gravacao_inter'];

$idPedidos = $numeroPedido . $dataEntrega;


// passando pro banco de dados

$dados = mysqli_query($conn, 
"INSERT TO pedidos(numeroPedido,cliente,nomePedido,numeracaoM,numeracaoF,descricaoPedido,descricaoAlinca,gravacaoInterna,gravacaoExterna) 
values ($idPedidos,$cliente,$nomePedido,$m,$f,$descricao_Pedido,$descricao_Alianca,$gravacao_inter,$gravacao_exter)");
}
?>
