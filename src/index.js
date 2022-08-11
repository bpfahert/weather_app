let apiKey = '356f070cd39b2fa2cff9caf1c3ca6895';

async function getWeather () {
    try{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`, {
            mode: 'cors'
        });
        const weatherData = await response.json();
        console.log(weatherData);
        renderWeather(weatherData);
    } catch (error) {
        alert("Error! Please enter a valid city!");
    }
}



let location = '';

function getLocation () {
    const locationInput = document.getElementById('location');
    location = locationInput.value;
    console.log(location);
    return location;    
}

let submitBtn = document.getElementById('locationsubmitbtn');
submitBtn.addEventListener('click', () => {
    getLocation();
    getWeather();
});

function renderWeather (weatherData) {
    let weatherList = document.getElementById('weatherlist');

    let currentTempDOM = document.createElement('li');
    let currentTemperature = ((9/5) * (weatherData.main.temp  - 273) + 32).toFixed(0);
    currentTempDOM.classList += 'currenttemp'; 
    currentTempDOM.textContent = `Current Temperature: ${currentTemperature}\u00B0F`;


    let highLowTempDOM = document.createElement('li');
    let highTemperature = ((9/5) * (weatherData.main.temp_max  - 273) + 32).toFixed(0); 
    let lowTemperature = ((9/5) * (weatherData.main.temp_min  - 273) + 32).toFixed(0); 
    highLowTempDOM.textContent = `High/Low: ${highTemperature}\u00B0F / ${lowTemperature}\u00B0F`;

    let windSpeedDOM = document.createElement('li');
    let windSpeed =  (weatherData.wind.speed * 2.23694).toFixed(0);
    windSpeedDOM.textContent = `Wind Speed: ${windSpeed} mph`;

    weatherList.appendChild(currentTempDOM);
    weatherList.appendChild(highLowTempDOM);
    weatherList.appendChild(windSpeedDOM);
}