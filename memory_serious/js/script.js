var numberOfCards = 10; /*you could change it if you want*/

var tmp =   "<li class='hidden'>" 
          +     "."
          +     "<img src='img/img-asd.png'></img>" 
          + "</li>";






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

var click;

$(document).ready(function(){  
    
    $(document).click(function(){
        click = $(event.target);
    });
    $("#btn-gen").click(function(){
        generate();
        $('li').click(function(){
            var target= event.target;
            $(target).removeClass("hidden");
            $(target).addClass("show");
        }); 
    });  
});