<?php
include_once('conexao.php');

//imagem 
if(isset($_FILES['imagem']) && !empty($_FILES['imagem'])){
    move_uploaded_file($_FILES['imagem']['tmp_name'], "../imagem/".$_FILES['imagem']['name'] );
}


?>
