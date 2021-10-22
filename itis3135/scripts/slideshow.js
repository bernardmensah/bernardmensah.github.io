
$(function()
{
    var pictures = [
        ["images/1.jpg"],
        ["images/3.jpg"],
        ["images/atTheMusuem.jpg"],
        ["images/mule-openclipart-org.png"],
        ["images/4.jpg"],
        ["images/5.jpg"]
    ];

    var picturesCount = pictures.length;
    var cur = 1;

    var $images = new Array();
    for(var i = 0; i < picturesCount-1; i++)
    {
        $images.push($('<img>').attr('src', pictures[i][0]).css({ width: 300, height: 300 }))
    }


    $("#pics-holder").append("<ul>");
    $("#pics-holder ul").css("width", (picturesCount) * 990);

    for(var i = 0; i < picturesCount-1; i++)
    {
        var $li = $("<li>").append($images[i]);
        $("#pics-holder ul").append($li);
    }

    var $last_li = $("<li><img style = width:300px src= '" + pictures[pictures.length-1][0] + "'/></li>");
    $("#pics-holder ul").prepend($last_li);

    var $right = $("<div class = 'right-handle'>");
    $("#pics-holder").append($right);
    $("right-handle").click(function()
    {

    })
})