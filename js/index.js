console.log("Your index.js file is loaded correctly!");
    $(document).ready(function(){
        $("button").click(function(){
            $(this).css("background-color","#C4DDEC");
        });

// Changes nav. .li tags color on hover //

    $('#A').mouseenter(function(){
        $(this).css('background-color', '#f7f5dc');
    });
  
   
    $('#B').mouseenter(function(){
        $(this).css('background-color', '#f7f5dc');
    });


    $('#C').mouseenter(function(){
        $(this).css('background-color', '#f7f5dc');
    });


    $('#D').mouseenter(function(){
        $(this).css('background-color', '#f7f5dc');
    });

    // changes the nav. .li tags color back to original//
   
    $('#A').mouseout(function() {
        $(this).css('originalStyles');
    });
   
    //scroll behavior //
    });
