<?php
    include('conexion.php');

            //SELECT column1, column2, ...FROM table_name;
    $data = mysqli_query($conexion, "SELECT * FROM shifts");
    if(!$data) {
        echo json_encode("****Error description: ".$mysqli_error);
        echo json_encode(error_get_last());
    }
    $resultado = mysqli_fetch_all($data, MYSQLI_ASSOC);
    echo json_encode($resultado);
        
    
    //http://localhost/Horas-a-JSON-File/getShifts.php