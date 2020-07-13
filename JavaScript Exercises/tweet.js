var tweet = prompt('Compose your tweet');

var remaining = 250 - tweet.length
alert('You have written ' + tweet.length + ' characters, you have ' + remaining + ' characters remaining')
alert(tweet.slice(0, 250));

// var name = 'Angela';
// name.slice(1, 3);
