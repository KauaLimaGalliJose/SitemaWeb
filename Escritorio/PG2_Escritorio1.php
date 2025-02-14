<?php
$servidor = "localhost"; // IP do servidor MySQL
$usuario = "root";
$senha = "";
$banco = "teste";
$porta = 3316; // Porta do MySQL

// Criar conexão
$conn = new mysqli($servidor, $usuario, $senha, $banco, $porta);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
echo "Conectado com sucesso! com usuario => " . $usuario .PHP_EOL;
echo PHP_EOL.'---------- DADOS ----------' .PHP_EOL.PHP_EOL;

// Puxando dados
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    

   
    
}


?>
