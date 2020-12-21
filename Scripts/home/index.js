$(document).ready(function () {


    $('#btn-submit').click(() => {
        submit();
    })

});


function submit() {

    var model = {
        Name: $("#name").val(),
        PhoneNumber: $("#phoneNumber").val(),
        Email: $("#email").val(),
        Message: $("#message").val()
    };

    if (validate()) {

        $.ajax({
            url: '/Home/submit',
            type: 'POST',
            dataType: "json",
            traditional: true,
            data: model,
            success: function (response) {

                if (response.success) {

                    alert(response.msg);
                }
                else {
                    alert(response.msg);
                }
            }
        });
    }
}

function validate(){
    return true;
}