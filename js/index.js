console.log("Your index.js file is loaded correctly!");
    $(document).ready(function(){
        $("button").click(function(){
            $(this).css("background-color","#C4DDEC");
        });

// Changes nav. .li tags color on hover //

    $('#A,#B,#C,#D').mouseenter(function(){
         $(this).css('background-color', '#f7f5dc');
         console.log("this is now yellow");
    });
  
   
   /*  /$('#B').mouseenter(function(){
        $(this).css('background-color', '#f7f5dc');
    });


    $('#C').mouseenter(function(){
        $(this).css('background-color', '#f7f5dc');
    });


    $('#D').mouseenter(function(){
        $(this).css('background-color', '#f7f5dc');
    }); */

    // changes the nav. .li tags color back to original//
   
    $('#A,#B,#C,#D').mouseleave(function() {
        $(this).css('background-color','rgba(208, 229, 248, 0.849');
        console.log("this is now blue")
    });
   
    //scroll behavior //
    });
