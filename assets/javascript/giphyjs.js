$(document).ready(function() {


    var list = ["Batman", "The League", "Deadpool", "Party Time"];
var apiKey = zQ9cvPUPVYGG0yHzaLmUuFwz7v7Iq5zi
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

$("#add-items").on("click", function(event) {
    event.preventDefault();
    var newInput = $("#input").val();
    list.push(newInput);
    createButtons()
})


    createButtons()
});