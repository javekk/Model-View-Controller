var tmpl = "<tr class='row'>" +
               "<td class='id1'> " +
               "    ida " +
               "</td>" +
               "<td class='nickname1'> " +
               "    nicka " +
               "</td>" +
               "<td class='class1'> " +
               "    classa " +
               "</td>" +
               "<td class='first1'> " +
               "    firsta " +
               "</td>" +
               "<td class='second1'> " +
               "    seconda " +
               "</td>" +
               "<td class='nade1'> " +
               "    nadea " +
               "</td>" +
            "</li>";


function getDataFromForm(){
    var temp = tmpl;
    
    temp = temp.replace("ida", document.getElementById('uno').value);
    temp = temp.replace("nicka", document.getElementById('due').value);
    temp = temp.replace("classa", document.getElementById('tre').value);
    temp = temp.replace("firsta", document.getElementById('quattro').value);
    temp = temp.replace("seconda", document.getElementById('cinque').value);
    temp = temp.replace("nadea", document.getElementById('sei').value);

    return temp;
}

function addElementToTable(){
    var elem = getDataFromForm();
    $("#table").append(elem);
}

$(document).ready(function(){
    $("#addElem").click(function(){
        $("#form").show();
    });
    
    $("#submit").click(function(){
        addElementToTable();
        $("#form").hide();
    });
    
    $("table").delegate("tr.row", "click", function(){
        var target =  event.target; 
        var parent = $(target).parent()[0];
        $(parent).addClass("clicked"); 
        $(parent).removeClass("row");     
    });
    
    $("table").delegate("tr.clicked", "click", function(){                
        var target = event.target; 
        var parent = $(target).parent()[0];
        $(parent).addClass("row"); 
        $(parent).removeClass("clicked");    
    });
    
    $("#removeElem").click(function(){
        $(".clicked").remove();
    });
    
});