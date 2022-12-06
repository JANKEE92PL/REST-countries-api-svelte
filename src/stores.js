import {writable} from "svelte/store";



let url = "https://restcountries.com/v3.1/"
export const getCountries = async () => {
    // let countries = await fetch(url + "all").then(res => res.json())
    const response = await fetch(url + "all")
    const data = await response.json()
    return data
}


export const getCountry = async (keyword) => {
    const response = await fetch(url + "name/" + keyword)
    const data = await response.json()
    console.table(data)
    return data
}


export const darkMode = writable(false)

export let country = writable([]);

export let countries = writable([]);
countries = getCountries();