const Allcountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => countries(data))
}
Allcountries();
const countries = data => {
    const countrydiv = document.getElementById('countrydiv');

    data.forEach(country => {


        const div = document.createElement('div');

        div.innerHTML = `
    <h1> ${country.name}</h1>
    <p> ${country.capital} </p>
    <img src="${country.flag} " width="200px" > 
    <hr>
    <button onClick ="loadCountryByName('${country.name}')">details</button>

`
        countrydiv.appendChild(div);
        div.classList.add('country')

    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
    const countryDetails = document.getElementById("country-details");
    countryDetails.innerHTML = `
    <h2>${country.name}</h2>
    <p>${country.population}</p> 
    <img src="${country.flag} " width="200px" > 
    `
    console.log(country)
}