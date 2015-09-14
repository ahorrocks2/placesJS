$(document).ready(function() {
  $("#add-landmark").click(function() {
    $("#newLandmarks").append('<div class="newLandmark">' +
                                '<div class="form-group">' +
                                  '<input type="text" class="form-control newLandmarkName" placeholder="Name of Landmark">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<input type="text" class="form-control newLandmarkDescription" placeholder="Description of Landmark">' +
                                '</div>' +
                              '</div>');
  });


  $("form#newPlace").submit(function(event) {
    var inputtedPlaceName = $("input#newPlaceName").val();
    var inputtedPlaceLocation = $("input#newPlaceLocation").val();

    var newPlace = { name: inputtedPlaceName, location: inputtedPlaceLocation, landmarks: [] };

    $(".newLandmark").each(function() {
      var inputtedName = $(this).find("input.newLandmarkName").val();
      var inputtedDescription = $(this).find("input.newLandmarkDescription").val();

      var newLandmark = { name: inputtedName, description: inputtedDescription };
      newPlace.landmarks.push(newLandmark);
    });



    $("ul#places").append("<li><span class='place'>" + newPlace.name + "</span></li>" );

    $(".place").last().click(function() {
      $("#showPlace").show();

      $("#showPlace h2").text(newPlace.name);
      $(".placeName").text(newPlace.name);
      $(".placeLocation").text(newPlace.location);

      $("ul#landmarks").text("");
      newPlace.landmarks.forEach(function(landmark) {
        $("ul#landmarks").append("<li>" + landmark.name + ", " + landmark.description + "</li>");
      });
    });


    $("input#newPlaceName").val("");
    $("input#newPlaceLocation").val("");
    $("input.newLandmarkName").val("");
    $("input.newLandmarkDescription").val("");

    event.preventDefault();
  });
});
