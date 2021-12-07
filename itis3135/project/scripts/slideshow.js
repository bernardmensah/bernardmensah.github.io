
$(document).ready(function()
{
    //array of images
    var pictures = [
        "",
        ["images/Image1.png"],
        ["images/Image2.png"],
        ["images/Image3.png"],
        ["images/Image5.jpg"],
        ["images/Image6.jpg"]
    ];

    var picturesCount = pictures.length;

    setInterval(function(){
        imageCounter = 0;
        var nextImage;
            $("#image").fadeOut(1000,
                    function() {
                        nextImage = pictures[Math.floor(Math.random() * 6)];
                        console.log(nextImage);
                        $("#image").attr("src",
                            nextImage[0]).fadeIn(3000);
                    });
    }, 3000);

});