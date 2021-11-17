$(document).ready(function() {
	
$("#nav_list li a").on('click', function()
{

    var tabName = $(this).attr("title");
    console.log(tabName);

    //if clicked tab is toobin
    if(tabName == 'toobin')
    {
        $.ajax({
            type: "GET",
            url: "z_archives/json_files/toobin.json",
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "JSON",
            success: function(data) {
                $("main").html("");
                $.each(data, function() {
                    $.each(this, function(key, value)
                    {
                        $("main").append
                        ("<h1>" + value.title + "</h1>" +
                        "<h2>" + value.month + "</h2>" +
                        "<h3>" + value.speaker + "</h3>" +
                        `<img src='${value.image}' alt="toobin_picture">` +
                                  value.text + "<br>");
                    })
                });
            }
        });
    }

    //if clicked tab is sorkin
    if(tabName == 'sorkin')
    {
        $.ajax({
            type: "GET",
            url: "z_archives/json_files/sorkin.json",
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "JSON",
            success: function(data) {
                $("main").html("");
                $.each(data, function() {
                    $.each(this, function(key, value)
                    {
                        $("main").append
                        ("<h1>" + value.title + "</h1>" +
                        "<h2>" + value.month + "</h2>" +
                        "<h3>" + value.speaker + "</h3>" +
                        `<img src='${value.image}' alt="sorkin_picture">` +
                                  value.text + "<br>");
                    })
                });
            }
        });
    }
        
    //if clicked tab is chua
    if(tabName == 'chua')
    {
        $.ajax({
            type: "GET",
            url: "z_archives/json_files/chua.json",
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "JSON",
            success: function(data) {
                $("main").html("");
                $.each(data, function() {
                    $.each(this, function(key, value)
                    {
                        $("main").append
                        ("<h1>" + value.title + "</h1>" +
                        "<h2>" + value.month + "</h2>" +
                        "<h3>" + value.speaker + "</h3>" +
                        `<img src='${value.image}' alt="chua_picture">` +
                                  value.text + "<br>");
                    })
                });
            }
        });
    }

       
    //if clicked tab is sampson
    if(tabName == 'sampson')
    {
        $.ajax({
            type: "GET",
            url: "z_archives/json_files/sampson.json",
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "JSON",
            success: function(data) {
                $("main").html("");
                $.each(data, function() {
                    $.each(this, function(key, value)
                    {
                        $("main").append
                        ("<h1>" + value.title + "</h1>" +
                        "<h2>" + value.month + "</h2>" +
                        "<h3>" + value.speaker + "</h3>" +
                        `<img src='${value.image}' alt="sampson_picture">` +
                                  value.text + "<br>");
                    })
                });
            }
        });
    }
});


}); // end ready