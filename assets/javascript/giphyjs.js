$(document).ready(function() {


    var topics = ["Batman", "The League", "Deadpool", "Party Time", "Superman", "This is the End", "Covid-19"];
    
    function displayGif() {
        var apiKey = "zQ9cvPUPVYGG0yHzaLmUuFwz7v7Iq5zi";
        var input = $(this).attr("data");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + apiKey + "&limit=10";

        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response){
        
        console.log(response);
        
        var results = response.data;    
        for (var i = 0; i < results.length; i++) {
        var newDiv = $("<div class='newgif'>");
        var text = $("<p>");
        var newImage = $('<img src= " ' + results[i].images.fixed_height_still.url + ' " data-still=" ' + results[i].images.fixed_height_still.url + ' " data-animate=" ' + results[i].images.fixed_height.url + ' " data-state = "still" class= "movImage" style = "width:250px; height:250px;">');
        
        $(text).text("Rating: " + results[i].rating);
        //$(newImage).attr("src", results[i].images.fixed_height_still.url);
        $(newDiv).append(text, newImage);

        $(".gifs-here").prepend(newDiv); 
        } 
        });
    }
    


    function createButtons() {

        $("#buttons").empty()

        for(var i = 0; i < topics.length; i++) {
        
            var newButton = $("<button>");
            newButton.addClass("gif");
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

    $(document).on("click", ".gif", displayGif);

    createButtons()
});