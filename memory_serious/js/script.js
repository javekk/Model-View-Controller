var numberOfCards = 10; /*you could change it if you want*/

var tmp =   "<li class='hidden'>" 
          +     "."
          +     "<img src='img/img-asd.png'></img>" 
          + "</li>";


var prhesa=0;
var igno=0;
var cartaOld;
var cartaNew;
var cercoCoppia = false;
var mySet = new Set();
var apSet = new Set();
var myArray = [];

function shake(){    
    clean(); 
    for(var i = 1; i <= numberOfCards/2; i++){
        mySet.add(i);
        apSet.add(i);
    }
    var cantExit = true;
    while(cantExit){
        var random = parseInt((Math.random()*5)+1);      
        if (mySet.size==0 && apSet.size==0){
            cantExit=false;
        }
        else if(apSet.has(random)){
            myArray.push(random);
            apSet.delete(random);
        }
        else if(mySet.has(random)){
            myArray.push(random);
            mySet.delete(random);
        }
    } 
}

function cleanArray(){
    myArray = [];
}

function generate(){
    shake();
    for(var i = 0; i < numberOfCards; i+=2){       
        $(".table").append(tmp.replace("asd", myArray[i]));
        $(".table").append(tmp.replace("asd", myArray[i+1]));
    } 
    cleanArray();

}

function clean(){
    $("li").remove();
}


function checkCoppia(carta) {
    if (!cercoCoppia) {
        cercoCoppia = true;
        cartaOld = carta;
        carta = null;
    }
    else {
        cartaNew=carta;
        var $cartaNewImg = ($(cartaNew).find("img").attr("src"));
        var $cartaOldImg = ($(cartaOld).find("img").attr("src"));
        if($cartaNewImg == $cartaOldImg) {
            prhesa++;
            alert("UGUALI");
            cercoCoppia=false;
            cartaOld=null;
            cartaNew=null;
            if (prhesa==numberOfCards) {
                alert("Ma bravoh");
                clean();
                $(".table").append("<li><h1>HAI CAZZO DI VINTO</h1></li>");
            }
        }
        else {
            igno++;
            if (igno>=4) {
                alert("Ma daii");
                clean();
                $(".table").append("<li><h1>SEI PEGGIO DEL DRAGO DI CERTO!</h1></li>");
                
            }
            else{
                alert("Eh, spiace, hai ancora: " +(4-igno) + " prove");
                cercoCoppia = false;
                $(cartaNew).removeClass("show");
                $(cartaNew).addClass("hidden");
                $(cartaOld).removeClass("show");
                $(cartaOld).addClass("hidden"); 
                cartaOld=null;
                cartaNew=null;                    
            }
        }
    }
}

$(document).ready(function(){  
    
    $("#btn-gen").click(function(){
        igno=0;
        prhesa=0;
        generate();
        $('li').click(function(){
            var target= event.target;
            $(target).removeClass("hidden");
            $(target).addClass("show");
            checkCoppia(target);
        }); 
    });  
});