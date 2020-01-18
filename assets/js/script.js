var APIKey = '712010c635163bedc765625963bdff72';
var cityname = $('#searchtext').val();
console.log(cityname);

// Here we are building the URL we need to query the database

var queryURL =
	'api.openweathermap.org/data/2.5/forecast?q=' +
	cityname +
	',us&mode=JSON&apikey=' +
	APIKey;
console.log(queryURL);

$.ajax({
	url    : queryURL,
	method : 'GET'
}).then(function(response) {
	console.log(response);

	// Transfer content to HTML
	// $('.city').html('<h1>' + response.name + ' Weather Details</h1>');
	// $('.wind').text('Wind Speed: ' + response.wind.speed);
	// $('.humidity').text('Humidity: ' + response.main.humidity);
	// $('.temperature').text('Temperature (F) ' + response.main.temp);
	// $('.feels').text('Feels Like: ' + response.main.feels_like);
});
