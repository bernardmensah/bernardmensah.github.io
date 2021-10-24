
$(document).ready(function()
{
    //array of images
    var pictures = [
        ["images/1.jpg"],
        ["images/3.jpg"],
        ["images/atTheMusuem.jpg"],
        ["images/mule-openclipart-org.png"],
        ["images/4.jpg"],
        ["images/5.jpg"]
    ];

    var picturesCount = pictures.length;

    var $images = new Array();

    //this for-loop loops through the images adds the image attribute and pushes it into the $images array
    for(var i = 0; i < picturesCount-1; i++)
    {
        $images.push($('<img>').attr('src', pictures[i][0]).css({ width: 500, height: 500 }))
    }

    $("#picture-holder").css({width: 500, height: 500 });
    $("#picture-holder").append("<ul>");
    $("#picture-holder ul").css({width: (picturesCount) * 500, marginLeft: - 500});


    //This for-loop appends the list of images except the last image in the array to the picture holder ul div
    for(var i = 0; i < picturesCount-1; i++)
    {
        var $li = $("<li>").append($images[i]);
        $("#picture-holder ul").append($li);
    }

    //the last image in the array is put in front of the others
    var $last_li = $("<li>").append($('<img>').attr('src', pictures[pictures.length-1][0]).css({ width: 500, height: 500 }));
    $("#picture-holder ul").prepend($last_li);


    //this function allows you to get the previous picture in your slideshow
    function getPreviousPicture() {
        $('#picture-holder ul').animate({
            left: + 500
        }, 200, function () {
            $('#picture-holder ul li:last-child').prependTo('#picture-holder ul');
            $('#picture-holder ul').css('left', '');
        });
    };

    //this function allows you to get the next picture in your slideshow
    function getNextPicture() {
        $('#picture-holder ul').animate({
            left: - 500
        }, 200, function () {
            $('#picture-holder ul li:first-child').appendTo('#picture-holder ul');
            $('#picture-holder ul').css('left', '');
        });
    };


    //function call for when the previous button is click
    $('a.previous').click(function () {
        getPreviousPicture();
    });

    //function call for when the next button is click
    $('a.next').click(function () {
        getNextPicture();
    });
});