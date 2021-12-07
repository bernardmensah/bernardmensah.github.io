
$(document).ready(function()
{
    //array of images
    var pictures = [
        "",
        ["images/image1.png"],
        ["images/image2.png"],
        ["images/image3.png"],
        ["images/image5.jpg"],
        ["images/image6.jpg"]
    ];

    var picturesCount = pictures.length;

    setInterval(function(){
        imageCounter = 0;
        var nextImage;
            $("#image").fadeOut(1000,
                    function() {
                        nextImage = pictures[Math.floor(Math.random() * 6)];
                        $("#image").attr("alt",
                            "slideshow image");
                        $("#image").attr("src",
                            nextImage[0]).fadeIn(3000);
                    });
    }, 3000);

});