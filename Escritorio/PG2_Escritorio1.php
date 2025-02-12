<?php
$servidor = "localhost"; // IP do servidor MySQL
$usuario = "root";
$senha = "";
$banco = "testerj";
$porta = 3306; // Porta do MySQL

// Criar conexão
$conn = new mysqli($servidor, $usuario, $senha, $banco, $porta);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
echo "Conectado com sucesso! com usuario =>" . $usuario;

// Puxando dados
if($_POST){
$pedido = $_POST["P1"];
echo($pedido);

}

?>
