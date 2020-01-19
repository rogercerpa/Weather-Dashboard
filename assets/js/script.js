$('#search-btn').on('click', function(event) {
	event.preventDefault();

	var currentdate = moment();

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
		var temp = JSON.stringify(weather.main.temp);
		var iconsrc = weather.weather[0].icon;
		var iconurl = 'http://openweathermap.org/img/w/' + iconsrc + '.png';

		// Transfer content to HTML
		$('.city').html(weather.name + ' Weather Details');
		$('.icon1').attr('src', iconurl);
		// $('.city').append('img');
		$('.wind').text('Wind Speed: ' + weather.wind.speed);
		$('.humidity').text('Humidity: ' + weather.main.humidity);
		$('.temperature').text(
			'Temperature ' + ((temp - 273.15) * 1.8 + 32).toFixed(1) + ' °F'
		);
		// $('.feels').text('Feels Like: ' + weather.main.feels_like);
	});

	$.ajax({
		url    : queryURL,
		method : 'GET'
	}).then(function(forecast) {
		console.log(queryURL);
		console.log(forecast);

		var temp1 = JSON.stringify(forecast.list[3].main.temp);
		var temp2 = JSON.stringify(forecast.list[11].main.temp);
		var temp3 = JSON.stringify(forecast.list[19].main.temp);
		var temp4 = JSON.stringify(forecast.list[27].main.temp);
		var temp5 = JSON.stringify(forecast.list[35].main.temp);

		// Transfer content to HTML

		//day1
		$('.image1').text(forecast.list[3].weather[0].icon);
		$('.temperature1').text(
			'Temp: ' + ((temp1 - 273.15) * 1.8 + 32).toFixed(1) + ' °F'
		);
		$('.humidity1').text('Humidity: ' + forecast.list[3].main.humidity + '%');
		//day2
		$('.image2').text(forecast.list[11].weather[0].icon);
		$('.temperature2').text(
			'Temp: ' + ((temp2 - 273.15) * 1.8 + 32).toFixed(1) + ' °F'
		);
		$('.humidity2').text('Humidity: ' + forecast.list[11].main.humidity + '%');
		//day3
		$('.image3').text(forecast.list[19].weather[0].icon);
		$('.temperature3').text(
			'Temp: ' + ((temp3 - 273.15) * 1.8 + 32).toFixed(1) + ' °F'
		);
		$('.humidity3').text('Humidity: ' + forecast.list[19].main.humidity + '%');
		//day4
		$('.image4').text(forecast.list[27].weather[0].icon);
		$('.temperature4').text(
			'Temp: ' + ((temp4 - 273.15) * 1.8 + 32).toFixed(1) + ' °F'
		);
		$('.humidity4').text('Humidity: ' + forecast.list[27].main.humidity + '%');
		//day5
		$('.image5').text(forecast.list[35].weather[0].icon);
		$('.temperature5').text(
			'Temp: ' + ((temp5 - 273.15) * 1.8 + 32).toFixed(1) + ' °F'
		);
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
