var topics = ["Batman", "The League", "Deadpool", "Party Time", "Superman", "This is the End", "Covid-19"];
    
$(document).ready(function() {

function createButtons() {
    
    $("#buttons").empty()

    for(var i = 0; i < topics.length; i++) {
    
        var newButton = $("<button>");
        newButton.addClass("gifbutton");
        newButton.attr("data", topics[i]);
        newButton.text(topics[i]);
        $("#buttons").append(newButton);
    }
}

$("#add-item").on("click", function(event) {
    event.preventDefault();
    var newInput = $("#input").val();
    topics.push(newInput);
    createButtons()
})

function displayGif() {
    var gifName = $(this).attr("data");
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=zQ9cvPUPVYGG0yHzaLmUuFwz7v7Iq5zi&limit=10',
            type: 'GET',
        })
        .done(function(response) {
           
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage">';

        image = '<div class="newgif">' + image + "</div>";
        $('.gifs-here').prepend(image);
    }

    $('.movImage').on('click', function() {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }

    });
});
}

$(document).on("click", ".gifbutton", displayGif);
    
        createButtons()
});
