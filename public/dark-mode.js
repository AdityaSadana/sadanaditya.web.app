$("#dark").click(function() {
        if ($("body").hasClass("body")){
            $("body").addClass("body1");
            $("body").removeClass("body");
            $(".card").css("background-color","black");
            $(".card").css("color","white");
            $(".links1").css("background","rgb(51, 102, 255)");
            $("#javascript").attr('src','images/javascript-dark.png');
            $(".form-control").css("background-color","rgb(50,50,50");
            $(".form-control").css("color","rgb(200,200,200");
            $("#python").attr('src','images/python-dark.png');
            $("#angular").attr('src','images/angular-dark.png');
            $("#boot").attr('src','images/bootstrap-dark.png');
            $("#nodejs").attr('src','images/nodejs-dark.png');
            $("#css").attr('src','images/css-dark.png');
            $("#mongo").attr('src','images/mongodb-dark.png');
            $("#mysql").attr('src','images/mysql-dark.png');
            $("#ionic").attr('src','images/ionic-dark.png');
            $("#git").attr('src','images/git-dark.png');
            $("#visual").attr('src','images/visual-dark.png');
            $("#cv").attr('src','images/opencv-dark.png');
            $("#jquery").attr('src','images/jquery-dark.png');
            $("#html").attr('src','images/html-dark.png');
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
            $(".card").css("background","white");
            $(".card").css("color","black");
            $(".links1").css("background","rgb(51, 102, 255)");
            $("#javascript").attr('src','images/javascript-skils.png');
            $(".form-control").css("color","black");
            $(".form-control").css("background-color","white");
            $("#python").attr('src','images/python-skills.png');
            $("#angular").attr('src','images/angular-skills.png');
            $("#boot").attr('src','images/bootstrap-skills.png');
            $("#nodejs").attr('src','images/nodejs-skills.png');
            $("#css").attr('src','images/css-skill.png');
            $("#mongo").attr('src','images/mongodb-skills.png');
            $("#mysql").attr('src','images/mysql-skills.png');
            $("#ionic").attr('src','images/ionic-skills.png');
            $("#git").attr('src','images/git-skills.png');
            $("#visual").attr('src','images/visual-skills.png');
            $("#cv").attr('src','images/opencv-skills.png');
            $("#jquery").attr('src','images/jquery-skills.png');
            $("#html").attr('src','images/html-skills.png');
            $(".project").on("mouseover", function() {
                $(this).css("background","rgb(51, 102, 255)");
            })
            $(".project").on("mouseout", function() {
                $(this).css("background","#fff");
            })
        }
    })