import {writable} from "svelte/store";

export const darkMode = writable(false)


let url = "https://restcountries.com/v3.1/"
const getCountries = async () => {
    // let countries = await fetch(url + "all").then(res => res.json())
    const response = await fetch(url + "all")
    const data = await response.json()
    return data
}
export let countries = writable([]);
countries = getCountries();