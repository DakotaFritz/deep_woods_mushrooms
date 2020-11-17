$(".hamburger").click(function() {
    $(".nav_bar").slideToggle();
});

function initMap() {

    // Create variable of each marker's latitude and longitude
    const ourLocation = { lat: 35.335171, lng: -82.642408 };
    const millsRiver = { lat: 35.367535, lng: -82.524364 };
    const transylvaniaFarmersMarket = { lat: 35.231995, lng: -82.730588 };
    const saludaFarmersMarket = { lat: 35.235943, lng: -82.345406 };
    const tryonFarmersMarket = { lat: 35.244359, lng: -82.250948 };
    const sierraNevada = { lat: 35.430726, lng: -82.553794 };
    const kenmure = { lat: 35.255085, lng: -82.444495 };

    // Create variable with infowindow content for each marker
    const ourFarmInfo = "<h2>Our Farm</h2><p>70 Deep Woods Rd.</p><p>Mills River, NC 28759<P/>"
    const saludaInfo = "<h2>Saluda Farmers Market</h2><p>West Main St. Parking Lot</p><p>Saluda, NC 28773<P/>"
    const transylvaniaInfo = "<h1>Transylvania Farmers Market</h2><p>200 East Main St.</p><p>Brevard, NC 28712<P/>"
    const tryonInfo = "<h2>Tryon Farmers Market</h2><p>1519 Howard Gap Rd.</p><p>Tryon, NC 28782<P/>"
    const sierraInfo = "<h2>Sierra Nevada Brewing Company</h2><p>100 Sierra Nevada Way</p><p>Mills River, NC 28732<P/>"
    const kenmureInfo = "<h2>Kenmure Country Club</h2><p>100 Clubhouse Dr.</p><p>Flat Rock, NC 28731<P/>"


    // Set marker labels to letters
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let labelIndex = 0;

    // place map in "map" div
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: millsRiver,
    });
    
    // create markers for each location
    const marker1 = new google.maps.Marker({
      position: ourLocation,
      title: "Our Location",
      label: labels[labelIndex++ % labels.length],
      map: map,
    });
    const marker2 = new google.maps.Marker({
        position: saludaFarmersMarket,
        title: "Saluda Farmers Market",
        label: labels[labelIndex++ % labels.length],
        map: map,
      });
    const marker3 = new google.maps.Marker({
        position: transylvaniaFarmersMarket,
        title: "Transylvania Farmers Market",
        label: labels[labelIndex++ % labels.length],
        map: map,
    });
    const marker4 = new google.maps.Marker({
        position: tryonFarmersMarket,
        title: "Tryon Farmers Market",
        label: labels[labelIndex++ % labels.length],
        map: map,
    });
    const marker5 = new google.maps.Marker({
        position: sierraNevada,
        title: "Sierra Nevada Brewing Company",
        label: labels[labelIndex++ % labels.length],
        map: map,
      });
    const marker6 = new google.maps.Marker({
        position: kenmure,
        title: "Kenmure Country Club",
        label: labels[labelIndex++ % labels.length],
        map: map,
      });

    // create infowindow popout for each marker
    const infowindowFarm = new google.maps.InfoWindow({
      content: ourFarmInfo,
    });
    const infowindowSaluda = new google.maps.InfoWindow({
      content: saludaInfo,
    });
    const infowindowTransylvania = new google.maps.InfoWindow({
      content: transylvaniaInfo,
    });
    const infowindowTryon = new google.maps.InfoWindow({
      content: tryonInfo,
    });
    const infowindowSierra = new google.maps.InfoWindow({
      content: sierraInfo,
    });
    const infowindowKenmure = new google.maps.InfoWindow({
      content: kenmureInfo,
    });

    // add event listener on click to zoom on location marker that is clicked
    marker1.addListener("click", () => {
      map.setZoom(12);
      map.setCenter(marker1.getPosition());
      infowindowFarm.open(map, marker1);
    });
    marker2.addListener("click", () => {
      map.setZoom(12);
      map.setCenter(marker2.getPosition());
      infowindowSaluda.open(map, marker2);
    });
    marker3.addListener("click", () => {
      map.setZoom(12);
      map.setCenter(marker3.getPosition());
      infowindowTransylvania.open(map, marker3);
    });
    marker4.addListener("click", () => {
      map.setZoom(12);
      map.setCenter(marker4.getPosition());
      infowindowTryon.open(map, marker4);
    });
    marker5.addListener("click", () => {
      map.setZoom(12);
      map.setCenter(marker5.getPosition());
      infowindowSierra.open(map, marker5);
    });
    marker6.addListener("click", () => {
      map.setZoom(12);
      map.setCenter(marker6.getPosition());
      infowindowKenmure.open(map, marker6);
    });
  }

$(".pizza").click(function() {
    $(".pizza-slide").slideToggle();
    $(".pizza_before").toggleClass("pizza_change")
});

$(".submit_form").click(function() {
    // var mailto = "<a href='mailto:greg@deepwoodsmushrooms.net?subject='" + subject + "'&body='" + messageContent + "> </a>";
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let messageContent = document.getElementById("message").value;
    console.log(messageContent.split(/\r?\n/).map(x => x == "" ? "\n" : x).join("\n"));
    let submitButton = document.getElementsByClassName("submit_form").value;
    window.location=`mailto:greg@deepwoodsmushrooms.net?subject=${subject}&body=${messageContent.split(/\r?\n/).map(x => x == "" ? "\n" : x).join("\n")}%0D%0A%0D%0A${firstName} ${lastName}%0D%0A${phone}%0D%0A${email}`;
})

