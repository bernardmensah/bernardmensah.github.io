$(document).ready(function () {
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'positionFromTop': 250,
        'maxHeight': 500,
        'maxWidth': 500
    })


    //photos url
    var photos = "http://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding"


    //ajax to get the data
    $.ajax({
        type: "GET",
        url: photos,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "JSON",
        success: function (data) {
            $("#new_building").html("");

            //function to attach lightbox and link <a> attributes to the images
            $.each(data.items, function (i, item) {
                var newLink = document.createElement("a");
                newLink.href = item.media.m;
                newLink.setAttribute("data-lightbox", "building_images")
                newLink.setAttribute("data-title", item.title);
                var newImage = document.createElement("img");
                newImage.src = item.media.m;
                newImage.alt = "vectacorp building";
                newLink.append(newImage);
                $("#new_building").append(
                    newLink);

            });
        }

    });

});
