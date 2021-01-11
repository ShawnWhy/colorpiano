<?php
// require './query.php';
 $server = 'gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com';
 $user='h99elbm7lbvv417t'; 
 $pass='iuqpwgyo1cspc49w';
 $database='w5rdbycu7ndy72ir';
 $something ='sdjsdksds';
 $cat1name='';
 $cat2name='';
 $cat1Pets='';
 $cat2pets='';

 $con = mysqli_connect($server, $user, $pass, $database);
//   or die ("connection Failed");
//  echo "connection succeeded";
// if ( ! empty($_GET)) var_dump($_GET);
// if (! empty($_POST)) var_dump($_POST);


if(mysqli_connect_errno()){
    $msg="database connection failed";
    $msg .=mysqli_connect_error();
    $msg .=" (" . mysqli_connect_errno() . ")";
    exit($msg);
}
else{
echo
'<html>
<head>
<link rel="stylesheet" href="style.css">
</head><body>
<div class="warning"></div>

<div class="customcursor"></div>
';




$sql = "SELECT * from cats";

$result = mysqli_query($con, $sql);



if(! empty($result)){
// var_dump($result);
echo '<div class=\'container\'>';
foreach($result as $value){
    
    
  if(3==$value['id']){
      echo '<div class="subContainer1"><div id =  '.  $value["id"] .   ' data-value = ' .$value["pats"].' class=\'cat1\'>
      <div class="catName"> pet ' . $value["cat_name"] . '</div></div>';
     
     echo '<div class="treats1">';
      for ($i=0; $i<$value["pats"];$i++){
          echo '<img src="fish-treat.png">';
      }
      echo '</div>';
}
elseif(2==$value['id']){
    echo '<div class="subContainer2"><div id =  ' . $value["id"] . ' data-value =' .$value["pats"].'  class=\'cat2\'>
    <div class="catName"> pet ' . $value["cat_name"] . '</div></div>';
    echo '<div class="treats2">';
    for ($i=0; $i<$value["pats"];$i++){
        echo '<img src="fish-treat.png">';
    }
    echo '</div></div>';
};

echo '</div>';
};
// var_dump($moreresult);


mysqli_close($con);



echo
'
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script>

function submitPatsMumu(A, B){ 
    B=parseInt(B)
    B++
    $.ajax({
type: "POST",
url: \'./query.php\',
dataType: \'json\',
data: {id:A, pats:B},

success: function (obj, textstatus) {
              if( !(\'error\' in obj) ) {
                  yourVariable = obj.result;
                    }
              else {
                  console.log(obj.error);
              }}});}

function submitPatsMimi(A, B){ 
    B=parseInt(B)
    B++
    $.ajax({
type: "POST",
url: \'./query.php\',
dataType: \'json\',
data: {id:A, pats:B},

success: function (obj, textstatus) {
              if( !(\'error\' in obj) ) {
                  yourVariable = obj.result;
                    }
              else {
                  console.log(obj.error);
              }}});} 

function displayFeedtooMuch(){
$(".warning").html("FED TOO MUCH!!!");

}
 $(document).on("click",".cat1", event=>{
        $(".cat1").attr("style", "top:30px");
        $(".customcursor").addClass("shake")
        var audio = new Audio("cat4.wav");
        audio.play();

        $(".treats1").append("<img class = \'fallTreat\' src=\'fish-treat.png\'>");    

        setTimeout(() => {
            $(".cat1").attr("style","")
            $(".customcursor").removeClass("shake")
            var pats = event.target.getAttribute("data-value")
            if(pats < 29){
            submitPatsMumu(event.target.id, pats)}
            else{submitPatsMumu(event.target.id,-1);
                displayFeedtooMuch()}
            }, 500);
            setTimeout(() => {location.reload(); }, 1000);
        
         })




 $(document).on("click",".cat2", event=>{
        $(".cat2").attr("style", "top:30px");
        $(".customcursor").addClass("shake")
        var audio = new Audio("cat3.wav");
        audio.play();
        $(".treats2").append("<img class = \'fallTreat\' src=\'fish-treat.png\'>");    
setTimeout(() => {
            $(".cat2").attr("style","")
            $(".customcursor").removeClass("shake")
            var pats = event.target.getAttribute("data-value")
            if(pats<19){
          submitPatsMumu(event.target.id, pats);}
            else{
                submitPatsMumu(event.target.id, -1);
                displayFeedtooMuch()}
            }, 500);
            setTimeout(() => {location.reload(); }, 1000);
            })
            

    $(".cat1, .cat2").mousemove(event=>{

        $(".customcursor").attr("style", " top :" + (event.pageY + 20) + "px; left :" + (event.pageX + 20) + "px; visibility:visible")  
        

    })
    $(".cat1, .cat2").mouseout(event=>{

        $(".customcursor").attr("style", "visibility : collaps")  
        

    })
    


</script>

</body>
</html>';

}
else{
    echo '<div>could not get </div>';
};
};

?>

<!-- // $sql2 = "SELECT * from cats where id = 2";
// $result2 = mysqli_query($con, $sql2);
// $result2 = mysqli_fetch_assoc($result2);
// if(! empty($result2)){
//     var_dump($result2);
// }
// else{
//     echo 'didn\'t get the second one';
// } -->

<!-- // $sqlInsert= " INSERT into cats(cat_name, pats) values(\"dududu\", 3)";
// $result3 = mysqli_query($con, $sqlInsert);
// $sqlupdate = "UPDATE  cats set pats = 7 where id = 2 "; -->

<!-- function submitPatsMimi(A, B){ 
    B=parseInt(B)
    B++
    $.ajax({
type: "POST",
url: \'./query.php\',
dataType: \'json\',
data: {id:A, pats:B},

success: function (obj, textstatus) {
              if( !(\'error\' in obj) ) {
                  yourVariable = obj.result;
                    }
              else {
                  console.log(obj.error);
              }}});}  -->
