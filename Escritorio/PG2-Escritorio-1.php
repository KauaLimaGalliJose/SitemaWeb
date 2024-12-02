<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
Ou 
<?php
var_dump($_GET);
print('Enviado') ;
$cliente = $_GET["liberar"];
if($cliente == "block"){

    print("\nCerto\n");

}
else{
    echo("NÕ ESTA CERTO");
}

?>
</body>
</html>
