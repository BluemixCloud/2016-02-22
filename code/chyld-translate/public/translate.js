$(document).ready(function(){
  $('#speak').click(function(){
    var target = $('#target').val();
    var url = "https://ca-101-chyld-nodered.mybluemix.net/speak?text=" + target;
    $('audio').attr('src', url);
    $('audio')[0].play();
  });

  $('#translate').click(function(){
    var source = $('#source').val();
    $.ajax({
      url: '/translate',
      method: 'post',
      data: {source: source},
      dataType: 'json',
      success: function(response){
        $('#target').val(response.translated);
      }
    });
  });
});
