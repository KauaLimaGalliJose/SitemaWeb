<?php
$servidor = "localhost"; 
$usuario = "root";
$senha = "";
$banco = "teste";
$porta = 3316; 


$conn = new mysqli($servidor, $usuario, $senha, $banco, $porta);


if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
echo "Conectado com sucesso! com usuario => " . $usuario .PHP_EOL;
echo PHP_EOL.'---------- DADOS ----------' .PHP_EOL.PHP_EOL;
?>