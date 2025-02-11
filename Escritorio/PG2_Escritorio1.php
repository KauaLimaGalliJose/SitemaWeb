<?php
$servidor = "192.168.15.201:3306"; // IP do servidor MySQL
$usuario = "rainhaBanco";
$senha = "2607";
$banco = "BancoTesteRJ";
$porta = 3306; // Porta do MySQL

// Criar conexão
$conn = new mysqli($servidor, $usuario, $senha, $banco, $porta);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
echo "Conectado com sucesso!";
?>
