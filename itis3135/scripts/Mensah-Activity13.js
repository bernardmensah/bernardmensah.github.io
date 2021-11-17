$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "z_archives/team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "JSON",
        success: function(data) {
            $("#team").html("");
            $.each(data, function() {
                $.each(this, function(key, value)
                {
                    $("#team").append
                    ("<h3>" + value.name + "</h3>" +
                              value.title + "<br>" +
                              value.bio + "<br>");
                })
            });
        }
    });
});