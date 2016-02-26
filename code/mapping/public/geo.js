var map;
var geocoder = new google.maps.Geocoder();

$(document).ready(function(){
  initMap();
  $('#locate').click(getLocation);
  $('#query').click(query);
});

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7833, lng: -122.4167},
    zoom: 15
  });
}

function getLocation(){
  navigator.geolocation.getCurrentPosition(function(pos){
    var latlng = {lat: pos.coords.latitude, lng: pos.coords.longitude};
    geocoder.geocode({'location': latlng}, function(results, status){
      sendAjax(results[0].formatted_address, latlng);
    });
  });
}

function sendAjax(address, latlng){
  $.ajax({
    url: '/location',
    method: 'post',
    dataType: 'json',
    data: {address: address, lat: latlng.lat, lng: latlng.lng},
    success: function(){
      console.log('saved to cloudant!');
    }
  });
}

function query(){
  $.ajax({
    url: '/locations',
    method: 'get',
    dataType: 'json',
    success: function(response){
      addMarkers(response);
      console.log('******', response);
    }
  });
}

function addMarkers(locations){
  locations.forEach(function(l){
    var marker = new google.maps.Marker({
      position: {lat: l.lat, lng: l.lng},
      map: map,
      title: l.address
    });
  });
}
