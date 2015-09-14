$(document).ready(function() {
  $("form#newPlace").submit(function(event) {
    var inputtedPlaceName = $("input#newPlaceName").val();
    var inputtedPlaceLocation = $("input#newPlaceLocation").val();

    var newPlace = { name: inputtedPlaceName, location: inputtedPlaceLocation };

    $("ul#places").append("<li><span class='place'>" + newPlace.name + "</span></li>" );

    $(".place").last().click(function() {
      $("#showPlace").show();

      $("#showPlace h2").text(newPlace.name);
      $(".placeName").text(newPlace.name);
      $(".placeLocation").text(newPlace.location);
    });


    $("input#newPlaceName").val("");
    $("input#newPlaceLocation").val("");

    event.preventDefault();
  });
});
