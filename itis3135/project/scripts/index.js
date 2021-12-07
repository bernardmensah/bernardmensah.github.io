$(document).ready(function()
{

    //click event handler for playButton in homepage
    $("#playButton").on('click', function()
    {
        var audio = document.getElementById("homepage-audio");
        audio.style.visibility = "visible";
        var introPlay = document.getElementById("intro");
        introPlay.play();

    })

})