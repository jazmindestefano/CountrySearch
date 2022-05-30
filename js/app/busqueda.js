import { createCountryCard } from "../main.js";

const input = document.getElementById('searchInput');
const option = document.getElementById('select')
let region ;

const obtainRegion = (event) =>{
    region = event.target.value;
}

export const getAllCharacters = async (event) => {
    try {
        const value = event.target.value;
        let html = document.getElementById('country__container')
        const result = await fetch(`https://restcountries.com/v3.1/name/${value}`);
        const array = await result.json();

        html.innerHTML = '';
        array.forEach(item => {
            let upper = item.name.common.toLowerCase()
            console.log(upper)
            let min = upper.charAt(0)
            if (item.region !=region){
                item = ''
                html.innerHTML= '';
            }
            if (upper.includes(value.charAt(0)) && upper.includes(value.charAt(1)) && upper.includes(value.charAt(2)) && upper.includes(value.charAt(3)) || upper.charAt(0) === min) {
                html.innerHTML += createCountryCard(item)
                console.log(item)
            }else {
                console.log("No esta")
            }
        })
    } catch (error) {
        console.log("error", error)
    }
}

let timer = 0;
export const  debouncedFetch = (input) =>{
    clearTimeout(timer);
    timer = setTimeout(() => getAllCharacters(input), 1000);
}

debouncedFetch(input);

input.addEventListener('input', debouncedFetch);
option.addEventListener('change', obtainRegion)