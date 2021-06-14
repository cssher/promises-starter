//Promises starter boiler plate

const whereAmI = function (lat, long) {
  const locationPromise = fetch(
    `https://geocode.xyz/${lat},${long}?geoit=json`
  );

  locationPromise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (!data.city) throw new Error("County not found");
      console.log(`You are in ${data.city}, ${data.country}`);
      return data;
    })
    .then((data) => {
      if (!data.country) return;
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let body = document.querySelector("body");
      let img = document.createElement("img");
      img.src = data[0].flag;
      body.appendChild(img);
    })
    .catch((err) => {
      console.log(`Something went wrong - ${err.message}`);
    });
};

whereAmI(-33.933, 18.474);
