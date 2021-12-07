$(document).ready(function () {

    //click event handler to store customer Info in localStorage and redirect to confirmation page
    $("#placeOrder").on('click', function () {
        if ($("#Name").val().length != 0 && $("#Email").val().length != 0 && $("#Phone").val().length != 0 && $("#Address").val().length != 0) {

            var info  = {
                Name: $("#Name").val(),
                Email: $("#Email").val(),
                Phone: $("#Phone").val(),
                Address: $("#Address").val(),
            }

            localStorage.setItem("Customer Info", JSON.stringify(info));

            location.replace("confirmation.html");
        }
        else{
        alert("Please fill out all fields!")
        }
    })
})
