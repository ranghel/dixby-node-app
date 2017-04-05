# dixby-node-app

DIXBY is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, DIXBY is a command line interface. DIXBY is a command line node app that takes in parameters and gives you back data.

What Each Command Does:

  node dixby.js my-tweets:
    This will show the last 20 tweets and when they were created at in your terminal/bash window.
  
  node dixby.js spotify-this-song 'song name here':
    This will show the following information about the song in your terminal/bash window
      Artist(s)
      The song's name
      A preview link of the song from Spotify
      The album that the song is from
      If no song is provided then your program will default to "The Sign" by Ace of Base

  node dixby.js movie-this 'movie name here':
    This will output the following information to your terminal/bash window:
      Title of the movie
      Year the movie came out
      IMDB Rating of the movie
      Country where the movie was produced
      Language of the movie
      Plot of the movie
      Actors in the movie
      Rotten Tomatoes Rating
      Rotten Tomatoes URL
    If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

node dixby.js do-what-it-says:
  Using the fs Node package, DIXBY will take the text inside of random.txt and then use it to call one of DIXBY's commands.
  It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

