// function showPizzaOptions() {
//     var pizzaOptions = document.getElementById("pizza")

//     pizzaOptions.innerhtml = 
//     `<h6>Farm Tour and Lunch</h6>
//         <p>Groups of 10-14 - $35/Person</p>
//         <p>Groups of 15+ – $25/person</p>

//     <h6>Farm Tour and Dinner</h6>
//         <p>Groups of 10+ - $40/Person</p></p>

//     <h6>Mushroom Hunt & Lunch or Dinner</h6>
//         <p>Groups of 4-9 - $90/Person</p>
//         <p>Groups of 10+ – $80/person</p>

//     <p>We will accommodate any dietary needs and additional wood-fired food options are available.</p>
//     <p>We are also available for private events, please call for further information on pricing and options.</p>`
// }

$(".hamburger").click(function() {
    $(".hamburger").toggleClass(".change");
    $(".nav_bar").slideToggle();
});

function initMap() {
    const ourLocation = { lat: 35.335171, lng: -82.642408 };
    const millsRiver = { lat: 35.367535, lng: -82.524364 };
    const transylvaniaFarmersMarket = { lat: 35.231995, lng: -82.730588 };
    const saludaFarmersMarket = { lat: 35.235943, lng: -82.345406 };
    const tryonFarmersMarket = { lat: 35.244359, lng: -82.250948 };
    const sierraNevada = { lat: 35.430726, lng: -82.553794 };
    const kenmure = { lat: 35.255085, lng: -82.444495 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: millsRiver,
    });
    
    const marker1 = new google.maps.Marker({
      position: ourLocation,
      map: map,
    });
    const marker2 = new google.maps.Marker({
        position: transylvaniaFarmersMarket,
        map: map,
      });
    const marker3 = new google.maps.Marker({
        position: saludaFarmersMarket,
        map: map,
    });
    const marker4 = new google.maps.Marker({
        position: tryonFarmersMarket,
        map: map,
    });
    const marker5 = new google.maps.Marker({
        position: sierraNevada,
        map: map,
      });
    const marker6 = new google.maps.Marker({
        position: kenmure,
        map: map,
      });
  }

$(".pizza").click(function() {
    $(".pizza-slide").slideToggle();
});

$(".submit_form").click(function() {
    // var mailto = "<a href='mailto:greg@deepwoodsmushrooms.net?subject='" + subject + "'&body='" + messageContent + "> </a>";
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let messageContent = document.getElementById("message").value;
    let submitButton = document.getElementsByClassName("submit_form").value;
    window.location=`mailto:greg@deepwoodsmushrooms.net?subject=${subject}&body=${messageContent}%0D%0A%0D%0A${firstName} ${lastName}%0D%0A${phone}%0D%0A${email}`;
})

