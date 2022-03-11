<?php 
    try{
        $server = "localhost";
        $usuario = "root";
        $clave = "";
        $base = "time_scheme";
        $conexion = mysqli_connect($server,$usuario,$clave,$base) or die("problemas") ;
        mysqli_set_charset($conexion,'utf8'); 


    }catch(Exception $e){
        throw new Exception('Error de conexion');
    }

   
?>