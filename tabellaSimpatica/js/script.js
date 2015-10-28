var tmpl = "<tr class= 'row'>" +
               "<td id='id1'> " +
               "    ida " +
               "</td>" +
               "<td id='nickname1'> " +
               "    nicka " +
               "</td>" +
               "<td id='class1'> " +
               "    classa " +
               "</td>" +
               "<td id='first1'> " +
               "    firsta " +
               "</td>" +
               "<td id='second1'> " +
               "    seconda " +
               "</td>" +
               "<td id='nade1'> " +
               "    nadea " +
               "</td>" +
            "</li>";

var data = [];


function getDataFromForm(){
    var temp = tmpl;
    
    temp = temp.replace("ida", document.getElementById('uno').value);
    temp = temp.replace("nicka", document.getElementById('due').value);
    temp = temp.replace("classa", document.getElementById('tre').value);
    temp = temp.replace("firsta", document.getElementById('quattro').value);
    temp = temp.replace("seconda", document.getElementById('cinque').value);
    temp = temp.replace("nadea", document.getElementById('sei').value);
    
    data.concat(temp);
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
    
});