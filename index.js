$(document).ready(function(){
     let value = "black-gun-game-wallpaper-wallpaper-wallpaperlepi-2.jpg";
    // $("img").attr("src",value);
    // $(".heading").append("Appended data")
    // $(".heading").empty()

//trigger
    $("#para").trigger("dblclick");

    //events

    $("#mybutton").click(()=>{
        $("img").attr("src",value);
        $("#para").addClass('big-heading');
        
       
    });

    $("#useless").hover(()=>{
        $("#useless").hide("10000");
    });

    $("#para").dblclick(()=>{
        $("#para").css("color" , "blue");
    });
    
    $("input").focus(()=>{
        $("input").addClass("my-class");
       
    });

    $('#nameinput').focusout(()=>{
        $('#nameinput').attr("placeholder", "Enter Something");
    });

    $("form").submit((event)=>{
        event.preventDefault();
        alert("kuth nighala");
    });
    $("#useless").parentsUntil("body").addClass("my-class");

});