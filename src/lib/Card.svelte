<script>
    import {onMount} from "svelte";


    let countries = [];

    onMount(async () => {
        countries = await getCountries();
    });
     let url = "https://restcountries.com/v3.1/"
     const getCountries = async () => {
        let countries = await fetch(url + "all").then(res => res.json())
        return countries

    }
</script>


<div class="columns is-multiline">
    {#each countries as country, index }
        <div class="column is-3">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-fullwidth">
                        <img src="{country.flags.svg}" alt="{country.name.common}">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{country.name.common}</p>
                            <p class="subtitle is-6">Population: <span>{country.population}</span></p>
                            <p class="subtitle is-6">Region: <span>{country.region}</span></p>
                            <p class="subtitle is-6">Capital: <span>{country.capital}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/each}
</div>

