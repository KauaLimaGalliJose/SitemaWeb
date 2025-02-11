 <?php
    $local = "localhost";
    $nomeBanco = "sprint3";
    $user = 'root';
    $senha = '';

   $mySQL = new mysqli($local,$nomeBanco,$senha,$user);

   if($mySQL->connect_errno){
        echo 'Falha ao se Conectar: (' . $mySQL->connect_errno . ")" . $mySQL->connect_error;
   }

?>

