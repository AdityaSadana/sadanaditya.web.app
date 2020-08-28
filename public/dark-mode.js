$("#dark").click(function() {
        if ($("body").hasClass("body")){
            $("body").addClass("body1");
            $("body").removeClass("body");
            $("#dark").html("Dark Mode");
            $("#dark").css("background-color","rgb(50,50,50)");
            $("#dark").css("color","white");
            $(".card").css("background-color","black");
            $(".card").css("color","white");
            $(".links1").css("background","rgb(51, 102, 255)");
            $(".form-control").css("background-color","rgb(50,50,50");
            $(".form-control").css("color","rgb(200,200,200");
            $(".project").on("mouseover", function() {
                $(this).css("background","rgb(51, 102, 255)");
            })
            $(".project").on("mouseout", function() {
                $(this).css("background","#000");
            })
        }
        else {
            $("body").addClass("body");
            $("body").removeClass("body1");
            $("#dark").html("Light Mode");
            $("#dark").css("background-color","rgb(200,200,200)");
            $("#dark").css("color","black");
            $(".card").css("background","white");
            $(".card").css("color","black");
            $(".links1").css("background","rgb(51, 102, 255)");
            $(".form-control").css("color","black");
            $(".form-control").css("background-color","white");
            $(".project").on("mouseover", function() {
                $(this).css("background","rgb(51, 102, 255)");
            })
            $(".project").on("mouseout", function() {
                $(this).css("background","#fff");
            })
        }
    })
