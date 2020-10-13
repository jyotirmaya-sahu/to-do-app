$(document).ready(function () {
    $("#login-form").submit(function (e) { 
        e.preventDefault();
        if(validateForm())
        {
            window.location.href = "app.html"
        }

    });
    function validateForm()
    {
        let status = true
        if($("#userName").val() == "" || $("#userName").val() != "jinu" )
        {
            $("#userNameError").text("enter valid user name");
            $("#userNameError").removeClass("d-none");
            status = false
        }
        if($("#password").val() == "" ||$("#password").val() != "password")
        {
            $("#passwordError").text("enter valid password");
            $("#passwordError").removeClass("d-none");
            status =false
        }

        return status
    }
});
