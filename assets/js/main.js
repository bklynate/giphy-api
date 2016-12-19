var topics = ['chappelle','desus and mero','medical marijuana', 'whiskey', 'saitama']

topics.forEach(function(item){
  button = $('<button>');
  button.addClass('btn btn-success');
  button.attr('data-name', item)
  button.text(item)
  $('#buttonBank').append(button)
});

function displayTopicalGifs() {
  $('#gifBank').empty();
  var buttonData = $(this).data('name')
  var url = 'http://api.giphy.com/v1/gifs/search?q=' + buttonData + '&api_key=dc6zaTOxFJmzC'
  $.ajax({
    url: url,
    method: 'GET'
  }).done(function(response){
    var res = response;
    res.data.forEach(function(item){
      gifImgDiv = $('<div>');
      gifImgs = $('<img>');
      gifRating = $('<span>');
      gifRating.addClass('label label-important arrowed-in');
      gifImgDiv.addClass('relative');
      gifImgDiv.css('display', 'inline');
      gifRating.html('Rating: ' + item.rating)
      gifImgs.addClass('img-responsive img-thumbnail');
      gifImgs.attr('src', item.images.original_still.url);
      gifImgDiv.prepend(gifRating);
      gifImgDiv.prepend(gifImgs);
      // $('#gifBank').append(gifRating);
      $('#gifBank').append(gifImgDiv);
      gifImgs.on('click', function(){
        var self = $(this)
        if($(this).attr('src') === item.images.original.url){
          $(self).attr('src', item.images.original_still.url);
        } else {
          $(self).attr('src', item.images.original.url);
        }
      })
    })
  })
}

$('#subBtn').on('click', function(event){
  event.preventDefault();
  newBtn = $('<button>');
  newBtnVal = $('#added-button').val();
  if(topics.indexOf(newBtnVal) === -1){
    topics.push(newBtnVal)
    newBtn.attr('data-name', newBtnVal)
    newBtn.addClass('btn btn-success');
    newBtn.text(newBtnVal);
    $('#buttonBank').append(newBtn);
  }
  $('#added-button').val('');
})

$(document).on("click", ".btn-success", displayTopicalGifs);
