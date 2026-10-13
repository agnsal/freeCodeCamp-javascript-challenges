const citySel = document.getElementById('city-select');
const getWeatherBtn = document.getElementById('get-weather-btn');

const weatherCard = document.getElementById('weather-card');
const wlocation = document.getElementById('location');
const wicon = document.getElementById('weather-icon');
const wmaintemp = document.getElementById('main-temperature');
const wfeels = document.getElementById('feels-like');
const wwmain = document.getElementById('weather-main');
const wwind = document.getElementById('wind');
const wwgust = document.getElementById('wind-gust');
const whumidity = document.getElementById('humidity');


// const getWeather = async city => {  // Const alternative: rejected by the freeCodeCamp test environment.
let getWeather = async city => {
    try {
        return await (await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${encodeURIComponent(city)}`)).json();
    }catch(err) {
        console.error(err);
        return null;
    }
}

// const showWeather = async city => {  // Const alternative: rejected by the freeCodeCamp test environment.
let showWeather = async city => {
    const w = await getWeather(city);
    if(!w || w.error) alert('Something went wrong, please try again later');
    else{
        wlocation.textContent = w.name ?? 'N/A';
        if(w.weather?.[0]?.icon) {
            wicon.src = w.weather[0].icon;
            wicon.alt = `${w.weather?.[0]?.main} icon`;
            wicon.classList.remove('invisible');
        }
        else wicon.classList.add('invisible');
        wmaintemp.textContent = `Temperature: ${null != w?.main?.temp ? w.main.temp+'° C':'N/A'}`;
        wfeels.textContent = `Feels Like: ${null != w?.main?.feels_like ? w.main.feels_like+'° C':'N/A'}`;
        wwmain.textContent = `Weather: ${w?.weather?.[0]?.main ?? 'N/A'}`;
        wwind.textContent = `Wind: ${null != w?.wind?.speed ? w.wind.speed+' m/s':'N/A'}`;
        wwgust.textContent = `Gusts: ${null != w?.wind?.gust ? w?.wind?.gust+' m/s':'N/A'}`;
        whumidity.textContent = `Humidity: ${null != w?.main?.humidity?w.main.humidity+'%':'N/A'}`;
        weatherCard.classList.add('card');
        weatherCard.classList.remove('invisible');
    }
}

getWeatherBtn.addEventListener('click', () => {
    if(citySel.value) showWeather(citySel.value);
})

// const showWeather = async city => {  // Previous approach
//     const w = await getWeather(city);
//     if(w.error){
//         alert('Something went wrong, please try again later');
//     }
//     else{
//         weatherCard.innerHTML = `
//             <div id="weather-title">
//                 <h2 id="location">${w.name}</h2>
//                 <img id="weather-icon" src="${w.weather?.[0]?.icon ?? 'N/A'}" alt="${w.weather?.[0]?.main} icon">
//             </div>
//             <div class="sep"></div>
//             <div id="weather-info">
//                 <p id="main-temperature">Temperature: ${null !== w.main?.temp? w.main.temp+'° C':'N/A'}</p>
//                 <p id="feels-like">Feels Like: ${null !== w.main?.feels_like?w.main.feels_like+'° C':'N/A'}</p>
//                 <p id="weather-main">Weather: ${w.weather?.[0]?.main ?? 'N/A'}</p>
//                 <p id="wind-gust">Gusts: ${w.wind?.gust ?? 'N/A'}</p>
//             </div>
//         `;
//         weatherCard.classList.add('card');
//     }
// }