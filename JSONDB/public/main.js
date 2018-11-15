$(document).ready(function () {


var titleHeader = document.querySelector('#titleHeader');
var nodeDetails = document.querySelector('#nodeDetails');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');


var myObject = "";

// window.location.reload(true);

choice1.addEventListener('click', function(e) {
    var aNewRequest = new XMLHttpRequest();
    aNewRequest.open('GET', 'http://localhost:3000/guide1/')
    aNewRequest.onload = function() {
        myObject = JSON.parse(aNewRequest.responseText);
        renderHTML(myObject, e)
}
aNewRequest.send();
});

choice2.addEventListener('click', function (e) {
    var aNewRequest = new XMLHttpRequest();
    aNewRequest.open('GET', 'http://localhost:3000/guide1/')
    aNewRequest.onload = function () {
        myObject = JSON.parse(aNewRequest.responseText);
        renderHTML(myObject, e)
    }
    aNewRequest.send();
});

choice3.addEventListener('click', function (e) {

    var aNewRequest = new XMLHttpRequest();
    aNewRequest.open('GET', 'http://localhost:3000/guide1/')
    aNewRequest.onload = function () {
        myObject = JSON.parse(aNewRequest.responseText);
        renderHTML(myObject, e)
    }
    aNewRequest.send();
});


function renderHTML(data, e){
var hutURL = "http://localhost:3000/hut/hut.html";

    for (var i=0; i < data.length; i++){

        //Checks to see if the id of the node is equal to the name property of the target button.
        if (data[i].id == e.target.name) {
            console.log("Data id: " + data[i].id)
            if (e.target.name == 15){
                window.location = hutURL;
                break;
            }
            else {
            $('#titleHeader, #choice1, #choice2, #choice3, #nodeDetails').fadeOut(800, function () {
                titleHeader.innerHTML = data[i].nodeText;
                nodeDetails.innerHTML = data[i].nodeDetails;
                choice1.name = data[i].nextNodes[0].id;
                choice1.value = data[i].nextNodes[0].choice1;
                
                
                if (data[i].nextNodes[1] === undefined) {
                    $('#choice2').hide();
                }
                else{
                    choice2.value = data[i].nextNodes[1].choice2;
                    choice2.name = data[i].nextNodes[1].id;
                    
                }
                if (data[i].nextNodes[2] === undefined) {
                    $('#choice3').hide();
                }
                else {
                    choice3.value = data[i].nextNodes[2].choice3;
                    choice3.name = data[i].nextNodes[2].id;
                }
                
            });
            
            $('#titleHeader, #choice1, #choice2, #choice3, #nodeDetails').fadeIn(800);
            break;
        }
        
        }
}
}
})






