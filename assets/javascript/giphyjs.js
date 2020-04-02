$(document).ready(function() {


<<<<<<< HEAD
var list = ["Batman", "The League", "Deadpool", "Party Time"];
var apiKey = zQ9cvPUPVYGG0yHzaLmUuFwz7v7Iq5zi;
var input = $(this).attr("data");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + apiKey + "&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    console.log(response)
    var newDiv = $("div");
    var rating = response.data.rating

});
=======
    var list = ["Batman", "The League", "Deadpool", "Party Time"];
    
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
        var newDiv = $("<div>");
        var text = $("<p>");
        var newImage = $("<img>");
        
        $(text).text("Rating: " + results[i].rating);
        $(newImage).attr("src", results[i].images.fixed_height.url);
        $(newDiv).append(text, newImage);
>>>>>>> fd9437da6458b3e8e3d5aad765eb052ea3712a08

        $(".gifs-here").prepend(newDiv); 
        } 
        });
    }
    
    function createButtons() {

        $("#buttons").empty()

        for(var i = 0; i < list.length; i++) {
        
            var newButton = $("<button>");
            newButton.addClass("gif");
            newButton.attr("data", list[i]);
            newButton.text(list[i]);
            $("#buttons").append(newButton);
        }
    }

    $("#add-item").on("click", function(event) {
        event.preventDefault();
        var newInput = $("#input").val();
        list.push(newInput);
        createButtons()
    })

    $(document).on("click", ".gif", displayGif);

    createButtons()
});