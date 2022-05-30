import { createCountryCard, arrayCountries } from "../main.js";

export const getCountriesOfRegions=({region})=>{
    let select = document.getElementById('select');
    let html = document.getElementById('country__container')
    select.addEventListener('change', function(e){
        let selectRegion = e.target.value
        html.innerHTML = '';
        for (let i = 0; i < arrayCountries.length; i++) {
            if (selectRegion == arrayCountries[i].region) {
                // console.log(arrayCountries[i])
                html.innerHTML += createCountryCard(arrayCountries[i])
            }
        }
    })
}