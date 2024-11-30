const apiKey = "98f5de3e98d74d43a63163701242811";  // Your API key from WeatherAPI

// Function to fetch weather data
async function getWeather() {
    const city = document.getElementById('city').value;

    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert(data.error.message);
            return;
        }

        displayWeather(data);
    } catch (error) {
        alert("Error fetching data. Please try again later.");
        console.error(error);
    }
}

// Function to display weather data
function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <div class="weather-item"><strong>Location:</strong> ${data.location.name}, ${data.location.country}</div>
        <div class="weather-item"><strong>Temperature:</strong> ${data.current.temp_c}°C</div>
        <div class="weather-item"><strong>Weather:</strong> ${data.current.condition.text}</div>
        <div class="weather-item"><strong>Humidity:</strong> ${data.current.humidity}%</div>
        <div class="weather-item"><strong>Wind Speed:</strong> ${data.current.wind_kph} km/h</div>
        <div class="weather-item"><strong>Pressure:</strong> ${data.current.pressure_mb} mb</div>
        
    `;
}


