<?php 
    
        $server = "localhost";
        $usuario = "root";
        $clave = "";
        $base = "time_scheme";
        
        try{
            $conexion = mysqli_connect($server,$usuario,$clave,$base);
            mysqli_set_charset($conexion,'utf8'); 
        }
        catch(Exception $e){
            throw new Exception('Error de conexion');
        }
?>
        
   