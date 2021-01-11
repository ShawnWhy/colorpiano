<?php
 $server = 'localhost';
 $user='root'; 
 $pass='';
 $database='colorpiano';
   
 $con = mysqli_connect($server, $user, $pass, $database);
if (mysqli_connect_errno()) die(mysqli_connect_error());



    $colors = $_POST['colors'];
    $username=$_POST['username'];

    // $result2 = mysqli_query($con, $sql);
    $result =mysqli_query($con, "INSERT INTO colors (username, colors)VALUES( '$username','$colors'");
    // echo $result;
    // if($result->num_rows>0){
    //     while($row = $fetch_assoc()){
    //         array_push($result_array, $row);
    //     }
    // }
    if($result){
        echo 'result';
        var_dump($result);
    }
?>