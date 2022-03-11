<?php
            //SELECT column1, column2, ...FROM table_name;
            
    try {
        include('conexion.php');
        $results=array ();
        $query = mysqli_query($conexion, "SELECT * FROM shifts");
        $data = mysqli_fetch_all($query, MYSQLI_ASSOC);
        $results['data']= $data;
        $results['errors'] = false;
    }catch (Exception $e){
        
        $results['data']= $e->getMessage();
        $results['errors'] = true;
    }
    echo json_encode($results);
        
    //http://localhost/Horas-a-JSON-File/getShifts.php