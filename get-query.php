<?php
 $server = 'j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com';
 $user='dpfc2uqv95ahytd1'; 
 $pass='n61qr185mcispxk3';
 $database='vrkysse652pm2xvs';
   
 $con = mysqli_connect($server, $user, $pass, $database);
if (mysqli_connect_errno()) die(mysqli_connect_error());



    $username=$_GET['username'];

    // $result2 = mysqli_query($con, $sql);
    $result =mysqli_query($con, "SELECT * FROM colors  WHERE username = '$username'"  );
    // echo $result;
    // if($result->num_rows>0){
    //     while($row = $fetch_assoc()){
    //         array_push($result_array, $row);
    //     }
    // }
    if($result){
        foreach($result as $value){
            echo $value["colors"];
        }
    }
?>