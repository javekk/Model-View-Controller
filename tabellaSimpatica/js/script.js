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

/*prende i valori dal form per la ricerca, ciclo su ogni riga della tabella per verificare se una riga soddisfa tutti i requisiti, se lo fa la 
  seleziono */
function Search(){
    
    var id = document.getElementById('sette').value;
    var nickname =  document.getElementById('otto').value;
    var clas =  document.getElementById('nove').value;
    var first =  document.getElementById('dieci').value;
    var second =  document.getElementById('undici').value;
    var nade =  document.getElementById('dodici').value;
    
    for(var i = 1; i < ($('#table tr:last').index() + 2); i++){
        var $primo = $("#table tr:eq(" + i + ") td:first-child");
        var $secondo = $("#table tr:eq(" + i + ") td:eq(1)");
        var $terzo = $("#table tr:eq(" + i + ") td:eq(2)");
        var $quarto = $("#table tr:eq(" + i + ") td:eq(3)");
        var $quinto = $("#table tr:eq(" + i + ") td:eq(4)");
        var $sesto = $("#table tr:eq(" + i + ") td:eq(5)"); 
        
        if($primo.text().trim() == id || id== ""){
            if($secondo.text().trim() == nickname || nickname == ""){
                if($terzo.text().trim() == clas || clas == ""){
                    if($quarto.text().trim() == first || first == ""){
                        if($quinto.text().trim() == second || second == ""){
                            if($sesto.text().trim() == nade || nade == ""){
                                if($("#table tr:eq("+ i +")").attr("class") == "row"){
                                    $("#table tr:eq("+ i +")").removeClass("row");
                                    $("#table tr:eq("+ i +")").addClass("clicked");
                                }                               
                            }
                        }
                    }    
                }
            }    
        }
    }
    
}


/*this function get data from form and append those data in table as html */
function addElementToTable(){
    var elem = getDataFromForm();
    $("#table").append(elem);
}

$(document).ready(function(){
    
    /*aggiunge gli input di prova*/
   
    $("#table").append(tmpl1);
    $("#table").append(tmpl2);
    $("#table").append(tmpl3);
    $("#table").append(tmpl4);
    $("#table").append(tmpl5);
    $("#table").append(tmpl6);
    
    
    /*this function  show the form for insert of data when you click the button add element*/
    $("#addElem").click(function(){
        $("#form").show();
    });
    
    /*this function add  the element in the table and hide form */
    $("#submit").click(function(){
        addElementToTable();
        $("#form").hide();
    });
    
    /*This function get the clicked entry in table, and get it parent (it is :row), and change it class from clicked to row(not clicked)  */
    $("table").delegate("tr.row", "click", function(){
        var target =  event.target; 
        var parent = $(target).parent()[0];
        $(parent).addClass("clicked"); 
        $(parent).removeClass("row");     
    });
    
    /*this function get the clicked entry in table, and get it parent (it is :row), and change it class from not clicked to clicked*/
    $("table").delegate("tr.clicked", "click", function(){                
        var target = event.target; 
        var parent = $(target).parent()[0];
        $(parent).addClass("row"); 
        $(parent).removeClass("clicked");    
    });
    
    /*this function remove the selected row*/
    $("#removeElem").click(function(){
        $(".clicked").remove();
    });
    
    /* this function show the form for search */
    $("#cercaElem").click(function(){
        $("#form2").show();
    });
    
    $("#cerca").click(function(){
        Search();
        $("#form2").hide();
    });
    
    
});