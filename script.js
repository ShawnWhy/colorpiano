
//
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

// $('.piano-container').on('mousedown', event=>{
//     event.stopPropagation();
//     event.preventDefault();
//     $('.piano-container').attr('style','transform:scaleX(1.1)')

// })
// $('.piano-container').on('mouseup', event=>{
//     event.stopPropagation();
//     event.preventDefault();
//     $('.piano-container').attr('style','transform:scaleX(1)')

// })

$('.namesubmit').on("click", event=>{
    event.preventDefault();
    event.stopPropagation();
    if($('.nameinput').val().length>0){
    var name= $('.nameinput').val()
    var welcomeMessage='welcome '+name+' please click on the large box to begin'
    $('.name-display').html(welcomeMessage)
    $('.name-display').removeClass('invisibleP');
    $('.colorssubmit').removeClass('invisibleP')
    $('form').addClass('invisibleP')

    }
})

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
    if(strip.length>0){
        for(i=0; i<strip.length;i++){
            var tabcolor=$(strip[i]).attr('style')
            var tabcolorarray= tabcolor.split(":");
            tabcolor=tabcolorarray[1];
            Decorcolors.push(tabcolor);
            console.log('decorcolors')
            console.log(Decorcolors);
        }
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
                  
                
         }
}

$('.decorate').on("click", event=>{
    event.preventDefault();
    event.stopPropagation();
    decorate();

})