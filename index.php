
<?php
// require './query.php';
$server = 'j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com';
$user='dpfc2uqv95ahytd1'; 
$pass='n61qr185mcispxk3';
$database='vrkysse652pm2xvs';
   
 $con = mysqli_connect($server, $user, $pass, $database)
  or die ("connection Failed");
//  echo "connection succeeded";

 if(mysqli_connect_errno()){
    $msg="database connection failed";
    $msg .=mysqli_connect_error();
    $msg .=" (" . mysqli_connect_errno() . ")";
    exit($msg);
}
?>

 
 
<html>
<head>
    <link href="style.css" type="text/css" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
</head>  
<body>
    <div class=barLeft></div>
    <div class=barLeft-center></div>
    <div class=barright-center></div>
    <div class=barright></div>
    


    <div class="all-container">
        <div class= "nameform">
            <form>
            <input class='nameinput' type='text' placeholder='username'>
            <input class='namesubmit' type='submit' value='submit Name'>  
            </form>
            <div class='name-display invisibleP'></div>
            <input class='colorssubmit invisibleP' type='submit' value='Submit Colors'>
        </div>
        <div class="strip-container">
        </div>
        <div class="piano-container" tabindex="1">
            <div>press enter to delete</div>
            <div>please press the letters present on the keys, or click</div>
            <div class="key z"><div class='keypad'>z</div></div>
            <div class="key x"><div class='keypad'>x</div></div>
            <div class="key c"><div class='keypad'>c</div></div>
            <div class="key v"><div class='keypad'>v</div></div>
            <div class="key b"><div class='keypad'>b</div></div>
            <div class="key n"><div class='keypad'>n</div></div>
            <div class="key m"><div class='keypad'>m</div></div>
            
        </div>
        <input class='reset' type='submit' value='reset'>
        <input class='decorate' type='submit' value='decorate'>

</div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="script.js"></script>
  
</body>



</html>