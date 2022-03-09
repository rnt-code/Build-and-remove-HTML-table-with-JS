<?php
    include('conexion.php');

    if (isset($_GET['h0']) and isset($_GET['h1']) and isset($_GET['h2']) and isset($_GET['h3']) and isset($_GET['h4']) and isset($_GET['h5'])) {
        
        $h0 = $_GET['h0'];
        $h1 = $_GET['h1'];
        $h2 = $_GET['h2'];
        $h3 = $_GET['h3'];
        $h4 = $_GET['h4'];
        $h5 = $_GET['h5'];

        echo"h0=".$h0."<br>";
        echo"h1=".$h1."<br>";
        echo"h2=".$h2."<br>";
        echo"h3=".$h3."<br>";
        echo"h4=".$h4."<br>";
        echo"h5=".$h5."<br>";

        $res0 = mysqli_query($conexion, "UPDATE shifts SET start_time = '$h0', end_time = '$h1' WHERE id_shift = 0");
        if(!$res0) {
            echo json_encode("****Error description: ".$mysqli_error);
            echo json_encode(error_get_last());
        }
        $res1 = mysqli_query($conexion, "UPDATE shifts SET start_time = '$h2', end_time = '$h3' WHERE id_shift = 1");
        $res2 = mysqli_query($conexion, "UPDATE shifts SET start_time = '$h4', end_time = '$h5' WHERE id_shift = 2");

        //localhost/Horas-a-JSON-File/setShifts.php?'h0'='12:00'&'h1'='15:00'&'h2'='16:00'&'h3'='18:00'&'h4'='21:00'&'h5'='00:40'
    }
?>