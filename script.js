


var demoColors=
[   "#186B18",
    "#B1AA15",
    "#81DA72",
    "#7B105A",
    "#E9AFBF",
    "#87A939",
    "#30C932",
    "#30C932",
    "#87A939",
    "#E9AFBF",
    "#7B105A",
    "#81DA72",
    "#B1AA15",
    "#186B18",
    "#81DA72",
    "#7B105A",
    "#E9AFBF",
    "#87A939",
    "#B1AA15",
    "#81DA72"
  ]
//
var username=''
var numOfTabs = 0
var name = '';
var Decorcolors=[]
var keys=['z','x','c','v','b','n','m']
var colors=[]

function reset(){
    for(i=0; i<keys.length; i++){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];}
        // console.log(keys[i])
        // console.log($('.'+keys[i]))
        $("."+keys[i]).attr('style', 'background-color:'+color)
        $('.barright').html('')
        $('.barleft').html('')
        $('.barright-center').html('')
        $('.barleft-center').html('')
        Decorcolors=[];
        $('body').attr('style','')



        
    }

    $('.strip-container').html('');
}

function removeLaststrip(){
    var strip = $('.strip-container').children();
    // console.log(strip)
    if(strip.length>0){
    $('.strip-container').children()[strip.length-1].remove()
    }
}


//creates the added color tabs after keypress
function createTab(color){
    var tab=$('<div>');
    $(tab).addClass('strip')
    $(tab).attr("style",'background-color:'+color);
    colors.push(color);
    $('.strip-container').append(tab);
}
//creates the randomly generated background colors for the keys
for(i=0; i<keys.length; i++){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];}
    // console.log(keys[i])
    // console.log($('.'+keys[i]))
    $("."+keys[i]).attr("style", "background-color:"+color)
}

//keypress
$(".piano-container").keypress( event=>{
    event.stopPropagation();
    event.preventDefault();
    var pianoKey=event.key
    // console.log(pianoKey)
    if(keys.indexOf(pianoKey)>=0){
        // console.log('keys!')
        $("."+pianoKey).children().addClass("invisibleP")
        $("."+pianoKey).addClass("tallkey");
        setTimeout(() => {
        $("."+pianoKey).removeClass("tallkey");
        $("."+pianoKey).children().removeClass("invisibleP")
            
        },500);
        var color=$('.'+pianoKey).attr('style')
        // console.log(color)
        var colorArray=color.split(":");
        color=colorArray[1] 
        // console.log(color)
        createTab(color)

    }
    if (pianoKey==="Enter"){
        removeLaststrip()
    }

})

function coloredText (name, colorArray){
    var numRange=colorArray.length;
    var welcomeMessage='welcome, '+name+' please click on the large box to begin'
    var welcomeMessageArray= welcomeMessage.split('');
    for (i=0; i<welcomeMessageArray.length;i++){
        var div = $("<div>");
        $(div).html(welcomeMessageArray[i])
        var newIndex= Math.floor(Math.random() * numRange)
        $(div).attr("style","color:"+colorArray[newIndex])
        $(div).addClass('displayName');
        $(".name-display").append(div);
        }
        $('.name-display').removeClass('invisibleP');
        $('.colorssubmit').removeClass('invisibleP')
        // $('form').addClass('invisibleP')
    }





$('.reset').on('click', event=>{
    event.preventDefault();
    event.stopPropagation();
    reset();

})

//use current colors to decorate current room 
function decorate(){
    $('.barright').html('')
    $('.barleft').html('')
    $('.barright-center').html('')
    $('.barleft-center').html('')
    Decorcolors=[]
    var strip = $('.strip-container').children();
            for(i=0; i<strip.length;i++){
            var tabcolor=$(strip[i]).attr('style')
            var tabcolorarray= tabcolor.split(":");
            tabcolor=tabcolorarray[1];
            Decorcolors.push(tabcolor);
            // console.log('decorcolors')
            // console.log(Decorcolors);
        }
        
        if(Decorcolors.length===strip.length){
            for(i=0; i<20;i++){
                   numRange = Decorcolors.length-1
                   var newIndex= Math.floor(Math.random() * numRange);
                   var newTab=$('<div>');
                   $(newTab).addClass('barpiece');
                   $(newTab).attr('style','background-color:'+Decorcolors[newIndex]);
                   $(".barleft").append(newTab);
                    
                 }
                 for(i=0; i<20;i++){
                    numRange = Decorcolors.length-1
                    var newIndex= Math.floor(Math.random() *numRange);
                    var newTab=$('<div>');
                    $(newTab).addClass('barpiece');
                    $(newTab).attr('style','background-color:'+Decorcolors[newIndex]);
                    $(".barright").append(newTab);
                     
                  }
                  for(i=0; i<20;i++){
                    numRange = Decorcolors.length-1
                    var newIndex= Math.floor(Math.random() * numRange);
                    var newTab=$('<div>');
                    $(newTab).addClass('barpiece');
                    $(newTab).attr('style','background-color:'+Decorcolors[newIndex]);
                    $(".barright-center").append(newTab);
                     
                  }
                  for(i=0; i<20;i++){
                    numRange = Decorcolors.length-1
                    var newIndex= Math.floor(Math.random() * numRange);
                    var newTab=$('<div>');
                    $(newTab).addClass('barpiece');
                    $(newTab).attr('style','background-color:'+Decorcolors[newIndex]);
                    $(".barleft-center").append(newTab);
                     
                  }
                  numRange = Decorcolors.length-1
                  var newIndex= Math.floor(Math.random() * numRange);
                  $('body').attr('style','background-color:'+Decorcolors[newIndex])
                  
                  if (username.length>0){
                    $('.name-display').html('')

                    coloredText(username, Decorcolors)

                  }
                
         }
}

$('.decorate').on("click", event=>{
    event.preventDefault();
    event.stopPropagation();
    decorate();

})


$('.colorssubmit').on('click', event=>{
    event.preventDefault();
    event.stopPropagation();
    console.log(username);
    var strip = $('.strip-container').children();
    if(username.length >0 && strip.length>0){
        for(i=0; i<strip.length;i++){
            var tabcolor=$(strip[i]).attr('style')
            var tabcolorarray= tabcolor.split(":");
            tabcolor=tabcolorarray[1];
            Decorcolors.push(tabcolor);
            colorstring=Decorcolors.toString();
        }
    }
    console.log(colorstring)

    userUpdate(username, colorstring)

})

$('.namesubmit').on("click", event=>{
    event.preventDefault();
    event.stopPropagation();
    if($('.nameinput').val().length>0){
        $('.name-display').html('')
        var name= $('.nameinput').val()
        username=name
        coloredText(name, demoColors)
    }
    
})
function userUpdate(A, B){ 
    $.ajax({
type: "POST",
url: './post-query.php',
dataType: 'json',
data: {username:A, colors:B},

success: function (obj, textstatus) {
              if( !('error' in obj) ) {
                  yourVariable = obj.result;
                    }
              else {
                  console.log(obj.error);
              }}});}

function userUpdate(A, B){ 
    $.ajax({
type: "POST",
url: './post-query.php',
dataType: 'json',
data: {username:A, colors:B},

success: function (obj, textstatus) {
              if( !('error' in obj) ) {
                  yourVariable = obj.result;
                    }
              else {
                  console.log(obj.error);
              }}});}

function GetUser(A, B){ 
    $.ajax({
type: "GET",
url: './post-query.php',
dataType: 'json',
data: {username:A},

success: function (obj, textstatus) {
              if( !('error' in obj) ) {
                  userInfo = obj.result;

                    }
              else {
                  console.log(obj.error);
                  createUser()
              }}});}

