$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: "z_archives/facultyList.json",
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "JSON",
        success: function(data) {
            $("#faculty").html("");
            $.each(data, function() {
                $.each(this, function(key, value)
                {
                    $("#faculty").append
                    (`<img src='${value.image}' alt="toobin_picture">` +
                        "<h2>" + value.full_name + "</h2>" +
                    "<h3>" + value.department + "</h3>" +
                   "<p>" + value.bio + "</p>");
                })
            });
        }
    });
});
