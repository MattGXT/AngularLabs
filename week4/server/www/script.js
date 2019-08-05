$( document ).ready(function(){
    console.log("page ready");
    $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost(){
        var formData = {
            email : $("#email").val(),
            pwd : $("#pwd").val()
        }
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : window.location + "api/auth",
            data : JSON.stringify(formData),
            dataType : 'json',
            success: function(result){
                if(result.valid == true){
                    sessionStorage.setItem('user',JSON.stringify(result));
                    $("#errormsg").addClass("hidemessage")
                    $("#errormsg").removeClass("showmessage")
                }else{
                    $("#errormsg").addClass("showmessage")
                    $("#errormsg").removeClass("hidemessage")
                }
                $("#postresult").html("<p>" + "Post successfully!" + "</p>" + sessionStorage.getItem('user'));
            },
            error:function(e){
                alert("Error")
                console.log("Error: ", e);
            }
        });
        resetData();
    }

    function resetData(){
        $("#email").val("");
        $("#pwd").val("");
    }
});