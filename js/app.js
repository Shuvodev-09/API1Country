// Step 1: Load countries data
const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data))
        .catch(error => console.error('Error loading countries:', error));
}

// Step 2: Call the function to load countries data
loadCountries();

// Step 3: Function to display countries
const countriesMainDiv = document.getElementById('country');

const displayCountries = (countries) => {
    countries.forEach(country => {
        // Create a div for each country
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <img src="${country.flags.png}" alt="${country.flags.alt}">
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
            <button onclick="loadCountryDetails('${country.name.common}')">Show Country Details</button>
        `;
        countriesMainDiv.appendChild(div);
    });
}

// Step 4: Function to load country details
const loadCountryDetails = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
        .catch(error => console.error('Error loading country details:', error));
}

// Step 5: Function to display country details
const displayCountryDetails = (country) => {
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <img src="${country.flags.png}" alt="${country.flags.alt}">
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
        <p>Area: ${country.area}</p>
        <p>Region: ${country.region}</p>
        <p>Population: ${country.population}</p>
    `;

    countryDetails.style.border = "2px solid yellowGreen";
    window.scrollTo({ top: 0, behavior: "smooth" });
}
