//default settings
$.validator.setDefaults({
    submitHandler: function() {
        alert("Subscribed! You are all set");
        location.replace("index.html");
    }
});

//validation function set on page load
$(document).ready(function() {
    $("#newsletterForm").validate({
        rules: {
            Name: {
                required: true,
            },
            Email: {
                required: true,
                email: true
            },
            Phone: {
                required: true,
                number: true,
            }
        },
        messages: {
            Name: "Please enter your name",
            Email: "Please enter a valid email address",
            Phone: "Please enter a valid phone number"
        }
    });
    
});