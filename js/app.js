//Handling forms
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    // Creating Object from the object CityDetails && weather
    /*
    const cityDets = data.cityDets;
    const weather = data.weather;
    */
    // Destructing the code same as the code UP there
    const {
        cityDets,
        weather
    } = data;


    //update details templates
    details.innerHTML = `
    <h5 class="my-3">  ${cityDets.EnglishName} </h5>
    <div class="my-3"> ${weather.WeatherText} </div>
    <div class="display-4 my-4">
        <span> ${weather.Temperature.Metric.Value} </span>
        <span> &deg;C </span>
    </div>
    `;


    //update ICON based on weather State
    const iconScr = `images/icons/${weather.WeatherIcon}.svg `;
    icon.setAttribute('src', iconScr);


    // Update the night and Day icons images 
    // let timeScr = null;

    // if (weather.IsDayTime) {
    //     timeScr = 'images/day.svg';
    // } else {
    //     timeScr = 'images/night.svg';
    // }

    let timeScr = weather.IsDayTime ? 'images/day.svg' : 'images/night.svg';
    time.setAttribute('src', timeScr);

    // Remove the d-none class if present 
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};



const updatedCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    /* Object short habd Notation */
    return {
        cityDets,
        weather
    };

    // return {
    //     cityDets : cityDets,
    //     weather : weather
    // };

    console.log(cityDets);
};



cityForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updatedCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));


    // set local Storage
    localStorage.setItem('city', city);

});


// Checking to set location has been set

if (localStorage.getItem('city')) {
    updatedCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}