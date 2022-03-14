<?php 

    include('conexion.php');

        try {
            
            $results = array();
            $query = mysqli_query($conexion, "SELECT * FROM shifts");
            $data = mysqli_fetch_all($query, MYSQLI_ASSOC);
            $results['data'] = $data;
            $results['errors'] = false;
            $results['message'] = 'PHP -> no exception';

        }
        catch (\Throwable $e){
            
            $results['data'] = json_encode([]);
            $results['errors'] = true;
            $results['message'] = 'PHP -> '.$e->getMessage();
        }
        
        echo json_encode($results);
?>