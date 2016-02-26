$(document).ready(function(){
  $('#get-coordinates').click(function(){

    navigator.geolocation.getCurrentPosition(function(pos){
      $('#lat').text(pos.coords.latitude);
      $('#lng').text(pos.coords.longitude);
    });

  });

  $('#get-weather').click(function(){
    var lat = $('#lat').text();
    var lng = $('#lng').text();
    $.ajax({
      url: '/forecast/' + lat + '/' + lng,
      method: 'get',
      dataType: 'json',
      success: function(response){
        response.forecast.forecasts.forEach(function(f){
          var tr = "<tr><td>"+f.dow+"</td><td>"+f.narrative+"</td></tr>";
          $('#wdata').append(tr);
        });
      }
    });
  });
});
