$(document).ready(function () {

    var uiSubmitBtn = document.getElementById('uiSubmitBtn');
    var addNewContentBtn = $(".addNewContentBtn"); //Add button ID
    var addChoiceFieldBtn = $(".addChoiceFieldBtn"); //Add button ID
    
    var nodeName = "";
    var nodeType = "";
    var nodeText = "";
    var nodeDetails = "";
    var choiceOne = "";
    var choiceTwo = "";
    var choiceThree = "";
    var choiceFour = "";
    var choiceFive = "";

    
    var x = 0; //initlal text box count
    var max_fields = 5; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    // var y = 0; //initlal text box count
    // var max_elements = 10; //maximum input boxes allowed
    // var elementWrapper = $(".type_fields_wrap"); //Fields wrapper
    

    var myObject = "";

    

    
        var aNewRequest = new XMLHttpRequest();
        aNewRequest.open('GET', 'http://localhost:3000/guide1/')
        aNewRequest.onload = function () {
            myObject = JSON.parse(aNewRequest.responseText);
            renderHTML(myObject)
        }
        aNewRequest.send();
    



    
    $(addChoiceFieldBtn).click(function (e) { //on add input button click
        var r = nodeID;
        // var t;
        // var n = $('.fieldDiv').length;
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            
            r = r + x;
            
            $(wrapper).append('<div class="fieldDiv"><br><input type="text" name="choice' + x + '"/><input type="hidden" value="" id="" name="nodeChoice' + x + '"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
            
        }
    });
    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    });



    $("#nodeChoiceBox").click(function () {
        console.log("#nodeChoiceBox");
        if ($(this).is(":checked")){
            $("#nodeChoiceConnectionDiv").show();
            $("#nodeChoiceConnectionDiv2").show();
            $(".displayDiv").show();
        }else{
            $("#nodeChoiceConnectionDiv").hide();
            $("#nodeChoiceConnectionDiv2").hide();
            $(".displayDiv").hide();
        }
    });
    // $(addNewContentBtn).click(function (e) { //on add input button click
        
    //     e.preventDefault();
    //     if (y < max_elements) { //max elements fields allowed
    //         y++; //text box increment
    //         $(elementWrapper).append('<div class="elementDiv"><br>Element Type:<br><select id = "nodeType" class= "nodeType" name = "nodeType"><option value="" disabled selected>Please select a type.</option><option value="image">Image</option><option value="question">Question</option><option value="text">Text</option><option value="video">Video</option></select><br><input placeholder="ex: text, file name" type="text" name="bob"/><a href="#" class="removeElement">Remove</a></div>'); //add input box
    //     }
    // });

    // $(elementWrapper).on("click", ".removeElement", function (e) { //user click on remove text
    //     console.log("This is: " + this);
    //     console.log("This is the parent: " + this.parent);
    //     e.preventDefault(); $(this).parent('div').remove(); y--;
    // });
    

    uiSubmitBtn.addEventListener('click', function () {
        var $nodeName = $("input[name='nodeName']").val(); 
        var $nodeType = $("input[name='nodeType']").val();
        var $nodeText = $("input[name='nodeText']").val();
        var $nodeDetails = $("textarea[name='nodeDetails']").val();
        var $nextNodeChoice1 = $("input[name='choice1']").val();
        var $nextNodeChoice2 = $("input[name='choice2']").val();
        var $nextNodeChoice3 = $("input[name='choice3']").val();
        var $nextNodeChoice4 = $("input[name='choice4']").val();
        var $nextNodeChoice5 = $("input[name='choice5']").val();
        var $nodeID1 = $("input[name='nodeChoice1']").val();
        var $nodeID2 = $("input[name='nodeChoice2']").val();
        var $nodeID3 = $("input[name='nodeChoice3']").val();
        var $nodeID4 = $("input[name='nodeChoice4']").val();
        var $nodeID5 = $("input[name='nodeChoice5']").val();
        var $selectedNC = $('#nodeChoiceSelection2 option:selected').id;
        var $selectedNCindex = $('#nodeChoiceSelection2 option:selected').name;
        
        // var n = $('.fieldDiv').length;
        
        //     if ($nodeID1 !== ''){
        //     $nodeID1 + n;
        //     }
        //     else {
        //         $nodeID1, $nextNodeChoice1 = undefined
        //     }
        //     if ($nodeID2 != '') {
        //         $nodeID2 + n;
        //     }
        //     else {
        //         $nodeID2, $nextNodeChoice2 = undefined
        //     }
        //     if ($nodeID3 != '') {
        //             $nodeID3 + n;
        //         }
        //     else {
        //         $nodeID3, $nextNodeChoice3 = undefined
        //     }
        //     if ($nodeID4 != '') {
        //             $nodeID4 + n;
        //         }
        //     else {
        //         $nodeID4,$nextNodeChoice4 = undefined
        //     }
        //     if ($nodeID5 != '') {
        //             $nodeID5 + n;
        //         }
        //         else{
        //         $nodeID5, $nextNodeChoice5 = undefined
        //         }
            
        
        var contentPage = JSON.stringify({
            'nodeName': $nodeName,
            'nodeText': $nodeText,
            'nodeDetails': $nodeDetails,
            'nextNodes': [
                {
                'choice1': $nextNodeChoice1,
                'id': ''
                },
                {
                'choice2': $nextNodeChoice2,
                'id': ''
                },
                {
                'choice3':  $nextNodeChoice3,
                'id': ''
                },
                {
                'choice4': $nextNodeChoice4,
                'id': ''
                },
                {
                'choice5': $nextNodeChoice5,
                'id': ''
                }
            ]
        })
        

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'http://localhost:3000/guide1',
            data: contentPage,
            contentType: 'application/json; charset=utf-8',
            complete: function(){
                // if ($('#nodeChoiceBox').is(":checked")) {
                    var l;
                    if ($selectedNCindex == "choice1") {
                        l = "nextNodes"[0].id
                    } if ($selectedNCindex == "choice2") {
                        l = "nextNodes"[1].id
                    } if ($selectedNCindex == "choice3") {
                        l = "nextNodes"[2].id
                    }
                    // nextNodes[l].id = selectedNC
                    var updateNodeChoiceID = JSON.stringify({
                        'nextNodes': [
                            {
                                'id': '5'
                            },
                            {
                                'id': '5'
                            },
                            {
                                'id': '5'
                            }
                        ]
                    })
                    $.ajax({
                        type: 'POST',
                        dataType: 'json',
                        url: 'http://localhost:3000/guide1/' + $selectedNC,
                        data: updateNodeChoiceID,
                        contentType: 'application/json; charset=utf-8',

                    })
                // };
            }
            
        })
        // var updateNodeChoiceID = JSON.stringify({
        //     'nextNodes': [
        //         {
        //             'id': selectedNC
        //         }
        //     ]
        // })

        // if ($('#nodeChoiceBox').is(":checked")) {
        //     var l;
        //     if ($selectedNCindex == "choice1"){
        //         l = ("nextNodes"[0].id)
        //     } if ($selectedNCindex == "choice2") {
        //         l = ("nextNodes"[1].id)
        //     } if ($selectedNCindex == "choice3"){
        //         l = ("nextNodes"[2].id)
        //     }
        //     // nextNodes[l].id = selectedNC
        //     var updateNodeChoiceID = JSON.stringify({
        //         l : $selectedNC
        //     })
        //     $.ajax({
        //         type: 'POST',
        //         dataType: 'json',
        //         url: 'http://localhost:3000/guide1/' + $selectedNC,
        //         data: updateNodeChoiceID,
        //         contentType: 'application/json; charset=utf-8',

        //     })
        // };
    });

    $("#nodeChoiceSelection").change(function () {
        var selectedChoice = $("#nodeChoiceSelection option:selected").val();
        for (var i = 0; i < myObject.length; i++) {
            nodeID = myObject[i].id;
            nodeText = myObject[i].nodeText;
            nodeDetails = myObject[i].nodeDetails;
            choiceOne = myObject[i].nextNodes[0].choice1;
            choiceTwo = myObject[i].nextNodes[1].choice2;
            choiceThree = myObject[i].nextNodes[2].choice3;
            if (selectedChoice == nodeID){
                $('.emptyThisClass').remove()
                $("#nodeChoiceSelection2").prop("selectedIndex", 0).change();
                $('#nodeChoiceSelection2').append($('<option class="emptyThisClass">').text(nodeID + ' - ' + choiceOne).attr({value: choiceOne, id: nodeID, name: "choice1"}));
                $('#nodeChoiceSelection2').append($('<option class="emptyThisClass">').text(nodeID + ' - ' + choiceTwo).attr({value: choiceTwo, id: nodeID, name: "choice2"}));
                $('#nodeChoiceSelection2').append($('<option class="emptyThisClass">').text(nodeID + ' - ' + choiceThree).attr({value: choiceThree, id: nodeID, name: "choice3"}));
            break;
            }
        }
    }) 


    function renderHTML(data) {
        for (var i = 0; i < data.length; i++) {
        nodeID = data[i].id;
        nodeText = data[i].nodeText;
        nodeDetails = data[i].nodeDetails;
        choiceOne = data[i].nextNodes[0].choice1;
        choiceTwo = data[i].nextNodes[1].choice2;
        choiceThree = data[i].nextNodes[2].choice3;
        // choiceFour = data[i].nextNodes[3].choice4;
        // choiceFive = data[i].nextNodes[4].choice5;
        
        $('#nodeChoiceSelection').append($('<option>').text(nodeID + ' - ' + nodeText).attr('value', nodeID));
            $(".displayDiv").append("<p>" + nodeID + ' - ' + nodeText + "<br>" + 'Choice 1: ' + choiceOne + "<br>" + 'Choice 2: ' + choiceTwo + "<br>" + 'Choice 3: ' + choiceThree + "</p><br>");
        
        
            
        }
    }

});