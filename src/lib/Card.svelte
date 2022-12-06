<script>

    import {countries, darkMode} from "../stores.js";


</script>


{#await countries}
    <p>...waiting</p>
    <progress class="progress is-large is-info" max="100"></progress>
{:then countries}
    <div class="columns is-multiline">
        {#each countries  as country, index }
            <div class="column is-3">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-fullwidth">
                            <img src="{country.flags.svg}" alt="{country.name.common}">
                        </figure>
                    </div>
                    <div class={$darkMode ? 'card-content is-black has-background-grey-darker' : 'card-content has-background-light has-shadow is-white '}>
                        <div class="media">
                            <div class="media-content">
                                <h2 class={$darkMode ? "title is-4 has-text-white":"title is-4"}>{country.name.common}</h2>
                                <p class={$darkMode ? "subtitle is-6 has-text-white":"subtitle is-6"}>Population:
                                    <span>{country.population}</span></p>
                                <p class={$darkMode ? "subtitle is-6 has-text-white":"subtitle is-6"}>Region:
                                    <span>{country.region}</span></p>
                                <p class={$darkMode ? "subtitle is-6 has-text-white":"subtitle is-6"}>Capital:
                                    <span>{country.capital}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>


{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
