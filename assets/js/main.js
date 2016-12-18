var topics = ['chappelle','desus and mero','medical marijuana', 'whiskey', 'saitama']

var url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC'

topics.forEach(function(item){
  button = $('<button>');
  button.addClass("btn btn-success");
  button.text(item)
  $('#buttonBank').append(button)
});
