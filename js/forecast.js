// Handling weather API

// API Key
const key = "LAu8scVopj4b6KGJHEtcAbzksxO0lrGP";

  // Geting weather information
  // Location or the ID
  const getWeather = async function(id){

   // Other format 
  // http://dataservice.accuweather.com/currentconditions/v1/{locationKey}

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query =  `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data     =  await response.json();

    return data[0];
      
};


const getCity = async (city) => {
  // making a base Request from the weather API
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";

  // ?- add parameter to the end of the URL
  // apikey =  //
  //city(parameter)
  // & and

  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data =     await response.json();

  return data[0];
};


