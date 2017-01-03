var fullTrackName = '';
var trackName = '';
var mix = '';
var artists = '';

//get all artists
artists = $('.player-current-track-container .player-track-name-artist.player-track-name-artist-standard .track-artist').text();

//get track name
trackName = $('.player-current-track-container .player-track-name-artist.player-track-name-artist-standard .track-title .primary-title').text();

//get mix name 
mix = $('.player-current-track-container .player-track-name-artist.player-track-name-artist-standard .track-title .remixed').text();

//sets the full track name
fullTrackName = artists + ' - ' + trackName + ' ' + mix;

//create the search query for youtube
var searchQuery = 'http://www.youtube.com/results?search_query='.concat(fullTrackName).concat('&sm=3');

var win = window.open(searchQuery, 'BeatportToYoutube');
win.focus();
