$(document).ready(function () {

    var uiSubmitBtn = document.getElementById('uiSubmitBtn');
    var addNewContentBtn = $(".addNewContentBtn"); //Add button ID
    var addChoiceFieldBtn = $(".addChoiceFieldBtn"); //Add button ID
    
    
    var x = 0; //initlal text box count
    var max_fields = 10; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    // var y = 0; //initlal text box count
    // var max_elements = 10; //maximum input boxes allowed
    // var elementWrapper = $(".type_fields_wrap"); //Fields wrapper
    
    // $(addChoiceFieldBtn).click(function (e) { //on add input button click
        
    //     e.preventDefault();
    //     if (x < max_fields) { //max input box allowed
    //         x++; //text box increment
    //         $(wrapper).append('<div class="fieldDiv"><br><input type="text" name="nextNodes[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
    //     }
    // });
    // $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
    //     e.preventDefault(); $(this).parent('div').remove(); x--;
    // });



    
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
        
        var contentPage = JSON.stringify({
            'nodeName': $nodeName,
            'nodeType': $nodeType,
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
            
        })
    });





});