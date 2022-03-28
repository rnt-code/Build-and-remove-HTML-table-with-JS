<?php 

    if (file_exists("conexion.php")) {
        
        $results = array();

        include('conexion.php');
        try {
        
            $query = mysqli_query($conexion, "SELECT * FROM shifts");
            $data = mysqli_fetch_all($query, MYSQLI_ASSOC);
            $results['data'] = $data;
            $results['errors'] = false;
            $results['message'] = 'PHP -> no exception';
    
        }
        catch (\Throwable $e){
            
            $results['data'] = "";
            $results['errors'] = true;
            $results['message'] = 'PHP -> '.$e->getMessage();
        }
        
        echo json_encode($results);
    }
    else {
        $results['data'] = "";
        $results['errors'] = true;
        $results['message'] = 'PHP -> No existe el erchivo de conexión a la BD...';
        
        echo json_encode($results);
    }

    

   
?>