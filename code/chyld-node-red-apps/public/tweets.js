$(document).ready(function(){
  $('#get-tweets').click(function(){
    $.ajax({
      url: '/tweets',
      method: 'get',
      dataType: 'json',
      success: function(response){
        drawChart(response.results);

        for(var i = 0; i < response.results.length; i++){
          var o = response.results[i];
          var row = '<tr><td>' + o.tweet + '</td><td>' + o.score + '</td></tr>';
          $('#tbody').append(row);
        }
      }
    });
  });
});

function drawChart(tweets){
  $('#graph').highcharts({
    title: {
      text: 'Tweet Sentiment Analysis'
    },
    xAxis: {
       categories: tweets.map(function(t, i){return i})
    },
    series: [
     {
       data: tweets.map(function(t){return t.score})
     }
    ]
  });
}
