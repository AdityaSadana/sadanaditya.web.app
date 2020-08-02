 var spinner=$('#loader');
var mess=$("#mess");
$(function() {
    $('#message_form').submit(function(e) {
        e.preventDefault();
        mess.hide();
        spinner.show();;
        setTimeout(function(){
        spinner.hide();
        mess.show();
        }, 3000);
    });
});
$(function() {
    $("#message_form").submit(function(e) {
        this.reset();
    });
});

$(".nav-link").click(function() {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
})
    
var a=0
var r = setInterval(() => {
    document.getElementById("loader").style.width=`${a}%`;
    a+=1;
    document.getElementById("percent").innerHTML=`Loading <br>${a}%`;
    if (a==100) {
        document.getElementById("content").style.display="block";
        $("#percent").animate({opacity: 0});
        $("#content").animate({opacity: 1});
        document.getElementById("load").style.display="none";
        document.getElementById("loader").style.display="none";
        document.getElementById("percent").style.display="none";
        
        AOS.init();
        document.getElementById("content").style.transition="all 1s";
        clearInterval(r);
    }
},30);

function scroller() {
    let progress = document.getElementById('progressbar');
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = `${progressHeight}%`;
}
