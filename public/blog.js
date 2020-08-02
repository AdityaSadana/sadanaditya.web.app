var spinner=$('#loader');
var mess=$("#topic");
$(function() {
    $('#topic_form').submit(function(e) {
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
    $("#topic_form").submit(function(e) {
        this.reset();
    });
});

var divHeight = document.getElementById("blog-intro").offsetHeight;
var home = document.getElementById("hom");


document.addEventListener("scroll", function() {
    var scrolled = window.scrollY;
    if (scrolled >= divHeight) {
        home.style.backgroundColor = "black";
        home.style.color = "white";
    }
    else {
        home.style.backgroundColor = "white";
        home.style.color = "black";
    }
    console.log(divHeight, scrolled);
})



