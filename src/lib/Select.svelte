<script>
    import {countries, darkMode} from "../stores.js";

    export let selected;

    let answer = '';

    let regions = [
        "Africa",
        "America",
        "Asia",
        "Europe",
        "Oceania"
    ];

    const filterBySelectbox = (choice) => {
        $countries.then((data) => data.filter((item) => {
            let continent = item.continents[0] == choice;
            console.log(continent)
            return continent
        }))
        console.log(choice)
        selected = choice
    }

</script>


<div class="select has-shadow">
    <select class={$darkMode ? 'is-black has-background-grey-darker has-text-white' : 'has-shadow is-white'}
            bind:value={selected} on:change="{() => filterBySelectbox(selected)}">
        <option disabled>Filter by Region</option>
        {#each regions as region}
            <option value={region}>
                {region}
            </option>
        {/each}
    </select>
</div>
