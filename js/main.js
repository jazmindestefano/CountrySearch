import "../js/app/busqueda.js"
import "../js/app/filtro.js"
import { result } from './fetch.js'
import { getCountriesOfRegions } from "../js/app/filtro.js";

export const arrayCountries = await result.json();

export const createCountryCard = ({ flags, name, population, region, capital }) => {
    const countries = `
                    <div class="country__content" id="country__content">
                        <img class="country__image" src="${flags.png}" alt="${name.common}" width="250">
                        <div class="country__information">
                            <h5 class="country__name text"> ${name.common}</h5>
                            <p class="country__population text">Population: <span class="text text-info"> ${population}</span></p>
                            <p class="country__region text">Region: <span class="text text-info"> ${region}</span></p>
                            <p class="country__capital text">Capital: <span class="text text-info"> ${capital}</span></p>
                        </div>
                    </div>    
                    `
    return countries;
}

const createSelect = (continent) =>{
    let regions = document.getElementById('select');
    regions.innerHTML += `
        <option value=${continent} id="${continent}">${continent}</option>
        `
}

const getSelect = async (api)=>{
    const continent = [];
    api.forEach(element => {
        const {region} = element
        if(!continent.includes(region)){
            continent.push(region)
        }
    });

    continent.forEach(element => {
        createSelect(element)
    });
}

export const getCountries = async (api) =>{
    let html = document.getElementById('country__container')
    api.forEach(element => {
        html.innerHTML +=createCountryCard(element);
    });
}

getCountries(arrayCountries);
getSelect(arrayCountries)

getCountriesOfRegions(arrayCountries)



