
//Get Who is in Space
$.getJSON('https://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    $('#spacepeeps').html("There are currently " + number + " people in space");

    data['people'].forEach(function (d) {
         $('#astronames').append('<li>' + d['name'] + '</li>');
    });
});

//Leaflet.js Map Setup
const mymap = L.map('mapid').setView([51.505, -0.09], 13);
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const icon = L.icon({
  iconUrl: "../assets/iss.svg",
  iconSize:[175,175]
});
const issMarker = L.marker([0,0],{icon:icon}).addTo(mymap);
L.tileLayer(tileURL, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

const iss_url = "https://api.wheretheiss.at/v1/satellites/25544";

//ISS Info
async function getISSInfo(){
  const response = await fetch(iss_url);
  const data = await response.json();
  const{latitude,longitude, velocity, altitude} = data;
  mymap.setView([latitude,longitude],3);
  issMarker.setLatLng([latitude,longitude]);
  document.getElementById('lat').textContent = latitude.toFixed(4);
  document.getElementById('lng').textContent = longitude.toFixed(4);
  document.getElementById('velocity').textContent = velocity.toFixed(2);
  document.getElementById('altitude').textContent = altitude.toFixed(2);
}


getISSInfo();
setInterval(getISSInfo,1000);
