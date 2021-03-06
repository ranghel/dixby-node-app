// Require files

var fs = require('fs');
var request = require('request');
var spotify = require('spotify');
var Twitter = require('twitter');

// Global variables
var keysFile = require("./keys.js");
var action = process.argv[2];
var value = process.argv[3];

// Get user input
var input = function(caseData, functionData){

    switch(caseData){

        case 'my-tweets':
            showTweets();
            break;

        case 'spotify-this-song':
            spotifyThisSong(functionData);
            break;

        case 'movie-this':
            movieThis(functionData);
            break;

        case 'do-what-it-says':
            doWhatItSays();
            break;

        default:
            console.log("Select one of the following options: 'my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says'");

    }
}


// Twitter function
function showTweets(){

    var twitterKeys = keysFile.twitterKeys;

    var client = new Twitter(twitterKeys);

    var params = {
        screen_name: 'anghelramona30',
        count: "20"
    };

    client.get('statuses/user_timeline', params, function(error, tweets, response) {

        if(error) {
            throw error;
        }

        for(var i = 0; i < tweets.length; i++){
                tweetText = tweets[i].text;
                tweetTime = tweets[i].created_at;

                console.log(tweetText + " Posted on: " + tweetTime);
        }
    })
}

// Spotify function
function spotifyThisSong(songName) {

    if (songName == undefined){

        songName = "Ace of Base The Sign";
    }

    spotify.search({
        type: 'track',
        query:songName

    }, function(error, data) {
        if ( error ) {
            throw error;
        }

        else{
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song Name: " + data.tracks.items[0].name);
            console.log("Spotify Preview URL: " + data.tracks.items[0].preview_url);
            console.log("Album: " + data.tracks.items[0].album.name);
        }
    });
}

// Movie function
function movieThis (movieName){

    if (movieName == undefined){

        movieName = "Mr. Nobody";
    }

    var queryUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&tomatoes=true&r=json';

    request(queryUrl, function(error, response, body) {

        if(!error && response.statusCode == 200) {

            var data = JSON.parse(body);

            console.log("Movie Title: " + data.Title);
            console.log("Year Released: " + data.Year);
            console.log("IMDB Rating: " + data.imdbRating);
            console.log("Country: " + data.Country);
            console.log("Language: " + data.Language);
            console.log("Plot: " + data.Plot);
            console.log("Actors: " + data.Actors);
            console.log("Rotten Tomatoes Rating: " + data.Ratings[1].Value);
            console.log("Rotten Tomatoes URL: " + data.tomatoURL);
        }
    });
}

// Do What It Says function
function doWhatItSays () {

    fs.readFile('random.txt', 'utf8', function(error, data) {

        if (error) {
            throw error;
        }

        var dataArray = data.split(',');
        console.log(dataArray);

        action = dataArray[0];
        value = dataArray[1];
        input(action, value);


    });
}


input(action, value);