/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RixTQUFTLFNBQVMsT0FBTztBQUNsSDtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFlBQVk7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGFBQWE7QUFDdEQ7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELG1CQUFtQjs7O0FBRzVFO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnQkFBZ0IsWUFBWSxlQUFlOztBQUV6RjtBQUNBO0FBQ0EsOENBQThDLFdBQVc7O0FBRXpEO0FBQ0E7QUFDQSw2Q0FBNkMsWUFBWTs7QUFFekQ7QUFDQTtBQUNBLDJDQUEyQyxXQUFXOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBhcGlLZXkgPSAnMzU2ZjA3MGNkMzliMmZhMmNmZjljYWYxYzNjYTY4OTUnO1xuXG5sZXQgbG9jYXRpb24gPSAnU2FpbnQgUGF1bCc7XG5nZXRXZWF0aGVyKCk7XG5sb2NhdGlvbiA9ICcnO1xuXG4vL2FkZCBpbiB6aXAgY29kZSBpbXBsZW1lbnRhdGlvblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgICBsZXQgd2VhdGhlckRhdGEgPSB7fTtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD0ke2FwaUtleX1gLCB7XG4gICAgICAgICAgICBtb2RlOiAnY29ycydcbiAgICAgICAgfSk7XG4gICAgICAgIHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KFwiRXJyb3IhIFBsZWFzZSBlbnRlciBhIHZhbGlkIGNpdHkhXCIpO1xuICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgICAgICByZW5kZXJXZWF0aGVyKHdlYXRoZXJEYXRhKTtcbn1cblxuXG5mdW5jdGlvbiBnZXRMb2NhdGlvbiAoKSB7XG4gICAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpO1xuICAgIGxvY2F0aW9uID0gbG9jYXRpb25JbnB1dC52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gICAgcmV0dXJuIGxvY2F0aW9uOyAgICBcbn1cblxubGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbnN1Ym1pdGJ0bicpO1xuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlbGV0ZVdlYXRoZXIoKTtcbiAgICBnZXRMb2NhdGlvbigpO1xuICAgIGdldFdlYXRoZXIoKTtcbn0pO1xuXG5mdW5jdGlvbiByZW5kZXJXZWF0aGVyICh3ZWF0aGVyRGF0YSkge1xuICAgIGxldCB3ZWF0aGVyRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyZGlzcGxheScpO1xuICAgIGxldCB3ZWF0aGVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgd2VhdGhlckxpc3Quc2V0QXR0cmlidXRlKCdpZCcgLCAnd2VhdGhlcmxpc3QnKTtcbiAgICB3ZWF0aGVyRGlzcGxheS5hcHBlbmRDaGlsZCh3ZWF0aGVyTGlzdCk7XG5cbiAgICBpZiAod2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluID09ICdDbG91ZHMnKSB7XG4gICAgICAgIGxldCB3ZWF0aGVySW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJpbWcnKTtcbiAgICAgICAgd2VhdGhlckltZy5zcmMgPSAnaHR0cHM6Ly9mcmVlaWNvbnNob3AuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9lZGQvY2xvdWQtb3V0bGluZS5wbmcnO1xuICAgIH1cbiAgICBlbHNlIGlmICh3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW4gPT0gJ1JhaW4nIHx8IHdlYXRoZXJEYXRhLndlYXRoZXJbMV0ubWFpbiA9PSAnUmFpbicpIHtcbiAgICAgICAgbGV0IHdlYXRoZXJJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcmltZycpO1xuICAgICAgICB3ZWF0aGVySW1nLnNyYyA9ICdodHRwczovL2ljb25zLmljb25hcmNoaXZlLmNvbS9pY29ucy9pY29uczgvd2luZG93cy04LzI1Ni9XZWF0aGVyLVJhaW4taWNvbi5wbmcnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IHdlYXRoZXJJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcmltZycpO1xuICAgICAgICB3ZWF0aGVySW1nLnNyYyA9ICdodHRwczovL2ljb25zLmljb25hcmNoaXZlLmNvbS9pY29ucy9veHlnZW4taWNvbnMub3JnL294eWdlbi8yNTYvU3RhdHVzLXdlYXRoZXItY2xlYXItaWNvbi5wbmcnO1xuICAgIH1cblxuICAgIGxldCBkZXNjcmlwdGlvbkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvbkRPTS5jbGFzc0xpc3QgKz0gJ2Rlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvbkRPTS50ZXh0Q29udGVudCA9IGAke2Rlc2NyaXB0aW9ufWAudG9VcHBlckNhc2UoKTtcblxuICAgIGlmICh3ZWF0aGVyRGF0YS53ZWF0aGVyWzFdKSB7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbkRPTTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24yID0gd2VhdGhlckRhdGEud2VhdGhlclsxXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGVzY3JpcHRpb25ET00yLmNsYXNzTGlzdCArPSAnZGVzY3JpcHRpb24nO1xuICAgICAgICBkZXNjcmlwdGlvbkRPTTIudGV4dENvbnRlbnQgPSBgJHtkZXNjcmlwdGlvbjJ9YC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB3ZWF0aGVyTGlzdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRPTTIpO1xuICAgIH1cblxuXG4gICAgbGV0IGN1cnJlbnRUZW1wRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgY3VycmVudFRlbXBlcmF0dXJlID0gKCg5LzUpICogKHdlYXRoZXJEYXRhLm1haW4udGVtcCAgLSAyNzMpICsgMzIpLnRvRml4ZWQoMCk7XG4gICAgY3VycmVudFRlbXBET00uY2xhc3NMaXN0ICs9ICdjdXJyZW50dGVtcCc7IFxuICAgIGN1cnJlbnRUZW1wRE9NLnRleHRDb250ZW50ID0gYEN1cnJlbnQgVGVtcGVyYXR1cmU6ICR7Y3VycmVudFRlbXBlcmF0dXJlfVxcdTAwQjBGYDtcblxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgaGlnaFRlbXBlcmF0dXJlID0gKCg5LzUpICogKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXggIC0gMjczKSArIDMyKS50b0ZpeGVkKDApOyBcbiAgICBsZXQgbG93VGVtcGVyYXR1cmUgPSAoKDkvNSkgKiAod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbiAgLSAyNzMpICsgMzIpLnRvRml4ZWQoMCk7IFxuICAgIGhpZ2hMb3dUZW1wRE9NLnRleHRDb250ZW50ID0gYEhpZ2gvTG93OiAke2hpZ2hUZW1wZXJhdHVyZX1cXHUwMEIwRiAvICR7bG93VGVtcGVyYXR1cmV9XFx1MDBCMEZgO1xuXG4gICAgbGV0IHdpbmRTcGVlZERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IHdpbmRTcGVlZCA9ICAod2VhdGhlckRhdGEud2luZC5zcGVlZCAqIDIuMjM2OTQpLnRvRml4ZWQoMCk7XG4gICAgd2luZFNwZWVkRE9NLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d2luZFNwZWVkfSBtcGhgO1xuXG4gICAgbGV0IHN1bnJpc2VUaW1lRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgc3VucmlzZVRpbWUgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5zeXMuc3VucmlzZSAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIHN1bnJpc2VUaW1lRE9NLnRleHRDb250ZW50ID0gYFN1bnJpc2U6ICR7c3VucmlzZVRpbWV9YDtcblxuICAgIGxldCBzdW5zZXRUaW1lRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgc3Vuc2V0VGltZSA9IG5ldyBEYXRlKHdlYXRoZXJEYXRhLnN5cy5zdW5zZXQgKiAxMDAwKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICBzdW5zZXRUaW1lRE9NLnRleHRDb250ZW50ID0gYFN1bnNldDogJHtzdW5zZXRUaW1lfWA7XG5cbiAgICB3ZWF0aGVyTGlzdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRPTSk7XG4gICAgd2VhdGhlckxpc3QuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBET00pO1xuICAgIHdlYXRoZXJMaXN0LmFwcGVuZENoaWxkKGhpZ2hMb3dUZW1wRE9NKTtcbiAgICB3ZWF0aGVyTGlzdC5hcHBlbmRDaGlsZCh3aW5kU3BlZWRET00pO1xuICAgIHdlYXRoZXJMaXN0LmFwcGVuZENoaWxkKHN1bnJpc2VUaW1lRE9NKTtcbiAgICB3ZWF0aGVyTGlzdC5hcHBlbmRDaGlsZChzdW5zZXRUaW1lRE9NKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlV2VhdGhlcigpIHtcbiAgICBsZXQgd2VhdGhlckxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcmxpc3QnKTtcbiAgICB3ZWF0aGVyTGlzdC5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tXZWF0aGVyKGtleXdvcmQpIHtcbiAgICBsZXQgd2VhdGhlckJvb2wgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYXRoZXJEYXRhLndlYXRoZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICAgIGlmICh3ZWF0aGVyRGF0YS53ZWF0aGVyW2ldLm1haW4gPT0ga2V5d29yZCkge1xuICAgICAgICAgICAgd2VhdGhlckJvb2wgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdlYXRoZXJCb29sID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9