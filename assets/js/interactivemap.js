let marker; // Declare a variable to hold the marker

function initMap() {
  // Create a map centered on Saudi Arabia
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 23.8859, lng: 45.0792 }, // Centered on Saudi Arabia
  });

  // Add a click event listener to the map
  map.addListener("click", function (event) {
    // Get the latitude and longitude from the click event
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    // Display the coordinates
    // document.getElementById("coords").textContent = `Latitude: ${lat}, Longitude: ${lng}`;
    $("#locationInput input").attr("value", `${lat} - ${lng}`);
    $("#locationInput input").attr("placeholder", `${lat} - ${lng}`);
    // console.log($("#locationInput input").attr("value"));
    setTimeout(() => {
      $("#chooseLocationModal").modal("hide");
    }, 300);

    // If a marker already exists, remove it
    if (marker) {
      marker.setMap(null);
    }

    // Add a new marker at the clicked location
    marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
      title: "Selected Location",
    });
  });
}

let marker2; // Declare a variable to hold the marker

if ($("#show_map_in_modal").length) {
  var newlat = "";
  var newlng = "";
  $("#show_map_in_modal button").on("click", function () {
    newlat = parseFloat($(this).attr("lat"));
    newlng = parseFloat($(this).attr("lng"));
    console.log(newlat, newlng);
    initMap2(newlat, newlng);
  });
  function initMap2(newlat, newlng) {
    // Create a map centered on Saudi Arabia
    const map = new google.maps.Map(document.getElementById("map2"), {
      zoom: 7,
      center: { lat: newlat, lng: newlng }, // Centered on Saudi Arabia
    });

    const marker = new google.maps.Marker({
      position: { lat: newlat, lng: newlng },
      map: map,
    });
  }
}
