$('#search-btn').on('click', function(event) {
	event.preventDefault();

	//user text input city name
	var cityname = $('#searchtext').val().trim();
	//API KEY
	var APIKey = '712010c635163bedc765625963bdff72';
	//API URL link for forecast weather data
	var queryURL =
		'https://api.openweathermap.org/data/2.5/forecast?q=' +
		cityname +
		',us&mode=JSON&apikey=' +
		APIKey;
	//API URL link for current weather data
	var queryURL2 =
		'https://api.openweathermap.org/data/2.5/weather?q=' +
		cityname +
		'&mode=JSON&apikey=' +
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

	$.ajax({
		url    : queryURL,
		method : 'GET'
	}).then(function(forecast) {
		console.log(queryURL);
		console.log(forecast);

		// Transfer content to HTML
		//day 1
		$('.image1').text(forecast.list[3].weather[0].icon);
		$('.temperature1').text('Temp: ' + forecast.list[3].main.temp + ' °F');
		$('.humidity1').text('Humidity: ' + forecast.list[3].main.humidity + '%');
		// day2
		$('.image2').text(forecast.list[11].weather[0].icon);
		$('.temperature2').text('Temp: ' + forecast.list[11].main.temp + ' °F');
		$('.humidity2').text('Humidity: ' + forecast.list[11].main.humidity + '%');
		//day3
		$('.image3').text(forecast.list[19].weather[0].icon);
		$('.temperature3').text('Temp: ' + forecast.list[19].main.temp + ' °F');
		$('.humidity3').text('Humidity: ' + forecast.list[19].main.humidity + '%');
		//day4
		$('.image4').text(forecast.list[27].weather[0].icon);
		$('.temperature4').text('Temp: ' + forecast.list[27].main.temp + ' °F');
		$('.humidity4').text('Humidity: ' + forecast.list[27].main.humidity + '%');
		//day5
		$('.image5').text(forecast.list[35].weather[0].icon);
		$('.temperature5').text('Temp: ' + forecast.list[35].main.temp + ' °F');
		$('.humidity5').text('Humidity: ' + forecast.list[35].main.humidity + '%');
	});

	// Preventing the buttons default behavior when clicked (which is submitting a form)
	// This line grabs the input from the textbox
	console.log(cityname);
	// Adding the movie from the textbox to our array
	// movies.push(movie);

	// Calling renderButtons which handles the processing of our movie array
	// renderButtons();
});
