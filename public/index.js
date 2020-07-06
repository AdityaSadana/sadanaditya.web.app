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