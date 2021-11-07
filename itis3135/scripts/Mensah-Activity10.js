$(document).ready(function() {

    // preload the image for each link
    $(".image-link").each(function()
    {
            var swappedImage = new Image();
            swappedImage.src = $(this).attr("href");
    });


    // set up the event handlers for each link
    $(".image-link").click(function(evt)
    {
        // start slide show
        var imageURL = $(this).attr("href");
        
        var caption = $(this).attr("title");
        console.log($(this).attr("title"));
        $("#caption").fadeOut(1000);
        $("#image").fadeOut(1000,
                function() {
                        // get the image URL and caption for each image and animate the caption
                        $("#image").attr("src", imageURL).fadeIn(3000);
                        $("#caption").text(caption);
                        $("#caption").animate({fontSize: "2em"}).fadeIn(3000);   
                }
            ); 

        
        // cancel the default action of each link
        evt.preventDefault();

    })

    // move the focus to the first link
    $("li:first-child a").focus();




}); // end ready