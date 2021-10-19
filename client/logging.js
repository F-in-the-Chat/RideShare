//previous work from a different course so good starting spot

$('#login').on('submit', function (e) {
    e.preventDefault();

    let mail = $('#email').val();
    let secret = $('#pass').val();

    $.ajax({
        type: "POST",
        url:  "/login",
        data: {email: mail, password: secret},
        success:function(response){
            console.log(response);
            if (response.success) {
                // location.href = window.location.origin + "/" + response.userID + "/dashboard";
            }
            else {
                alert("Incorrect Email or Password")
            }
        },
        error: function (request, status, error) {
            alert("An error occurred, Please try again.");
        }                  
    });
})