// var cityname = $('#searchtext').val();
// console.log(cityname);

// Here we are building the URL we need to query the database

var APIKey = '712010c635163bedc765625963bdff72';
var queryURL =
	'https://api.openweathermap.org/data/2.5/forecast?q=atlanta,us&mode=JSON&apikey=' +
	APIKey;
var queryURL2 =
	'https://api.openweathermap.org/data/2.5/weather?q=atlanta&mode=JSON&apikey=' +
	APIKey;

$.ajax({
	url    : queryURL2,
	method : 'GET'
}).then(function(weather) {
	console.log(weather);
	console.log(queryURL2);

	// Transfer content to HTML
	$('.city').html(weather.name + ' Weather Details');
	$('.wind').text('Wind Speed: ' + weather.wind.speed);
	$('.humidity').text('Humidity: ' + weather.main.humidity);
	$('.temperature').text('Temperature (F) ' + weather.main.temp);
	$('.feels').text('Feels Like: ' + weather.main.feels_like);
});

// $.ajax({
// 	url    : queryURL,
// 	method : 'GET'
// }).then(function(forecast) {
// 	console.log(queryURL);
// 	console.log(forecast);

// 	// Transfer content to HTML
// 	$('.temperature1').text('Temperature (F) ' + weather.list.main.temp);
// 	$('.humidity1').text('Humidity: ' + weather.list.main.humidity);
// });
