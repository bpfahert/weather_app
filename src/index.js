let apiKey = '356f070cd39b2fa2cff9caf1c3ca6895';

let location = 'Saint Paul';
getWeather();
location = '';

//add in zip code implementation
async function getWeather() {
    let weatherData = {};
    try{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`, {
            mode: 'cors'
        });
        weatherData = await response.json();
    } catch (error) {
        alert("Error! Please enter a valid city!");
    }
        console.log(weatherData);
        renderWeather(weatherData);
}


function getLocation () {
    const locationInput = document.getElementById('location');
    location = locationInput.value;
    console.log(location);
    return location;    
}

let submitBtn = document.getElementById('locationsubmitbtn');
submitBtn.addEventListener('click', () => {
    deleteWeather();
    getLocation();
    getWeather();
});

function renderWeather (weatherData) {
    let weatherDisplay = document.querySelector('.weatherdisplay');
    let weatherList = document.createElement('ul');
    weatherList.setAttribute('id' , 'weatherlist');
    weatherDisplay.appendChild(weatherList);

    if (weatherData.weather[0].main == 'Clouds') {
        let weatherImg = document.getElementById('weatherimg');
        weatherImg.src = 'https://freeiconshop.com/wp-content/uploads/edd/cloud-outline.png';
    }
    else if (weatherData.weather[0].main == 'Rain' || weatherData.weather[1].main == 'Rain') {
        let weatherImg = document.getElementById('weatherimg');
        weatherImg.src = 'https://icons.iconarchive.com/icons/icons8/windows-8/256/Weather-Rain-icon.png';
    }
    else {
        let weatherImg = document.getElementById('weatherimg');
        weatherImg.src = 'https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-clear-icon.png';
    }

    let descriptionDOM = document.createElement('li');
    let description = weatherData.weather[0].description;
    descriptionDOM.classList += 'description';
    descriptionDOM.textContent = `${description}`.toUpperCase();

    if (weatherData.weather[1]) {
        let descriptionDOM2 = document.createElement('li');
        let description2 = weatherData.weather[1].description;
        descriptionDOM2.classList += 'description';
        descriptionDOM2.textContent = `${description2}`.toUpperCase();
        weatherList.appendChild(descriptionDOM2);
    }


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

    let sunriseTimeDOM = document.createElement('li');
    let sunriseTime = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
    sunriseTimeDOM.textContent = `Sunrise: ${sunriseTime}`;

    let sunsetTimeDOM = document.createElement('li');
    let sunsetTime = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();
    sunsetTimeDOM.textContent = `Sunset: ${sunsetTime}`;

    weatherList.appendChild(descriptionDOM);
    weatherList.appendChild(currentTempDOM);
    weatherList.appendChild(highLowTempDOM);
    weatherList.appendChild(windSpeedDOM);
    weatherList.appendChild(sunriseTimeDOM);
    weatherList.appendChild(sunsetTimeDOM);
}

function deleteWeather() {
    let weatherList = document.getElementById('weatherlist');
    weatherList.remove();
}

function checkWeather(keyword) {
    let weatherBool = '';
    for (let i = 0; i < weatherData.weather.length; i++) {
        console.log(i);
        if (weatherData.weather[i].main == keyword) {
            weatherBool = true;
        }
        else {
            continue;
        }
    }
    if (weatherBool = true) {
        return true;
    }
    else {
        return false;
    }
}