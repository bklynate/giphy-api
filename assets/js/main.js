var topics = ['chappelle','desus and mero','medical marijuana', 'whiskey', 'saitama']

// var url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC'
// var url = 'http://api.giphy.com/v1/gifs/search?q=' + + '&api_key=dc6zaTOxFJmzC'

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
    console.log(res);
    res.data.forEach(function(item){
      gifImgs = $('<img>');
      gifImgs.addClass('img-responsive img-thumbnail')
      gifImgs.attr('src', item.images.original.url)
      $('#gifBank').append(gifImgs)
    })
  })
}

$('#subBtn').on('click', function(event){
  console.log()
  event.preventDefault();
  newBtn = $('<button>');
  newBtnVal = $('#added-button').val();
  if(topics.indexOf(newBtnVal) === -1){
    console.log(newBtnVal)
    topics.push(newBtnVal)
    newBtn.attr('data-name', newBtnVal)
    newBtn.addClass('btn btn-success');
    newBtn.text(newBtnVal);
    $('#buttonBank').append(newBtn);
  }
  $('#added-button').val('');
})

$(document).on("click", ".btn-success", displayTopicalGifs);
