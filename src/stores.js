import {writable} from "svelte/store";

export const countries = writable([])

let url = "https://restcountries.com/v3.1/"
const getCountries = async () => {
    let countries = await fetch(url + "all").then(res => res.json())
    return countries
}


