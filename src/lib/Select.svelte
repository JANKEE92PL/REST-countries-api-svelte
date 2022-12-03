<script>
    import {darkMode} from "../stores.js";

    let selected;

    let answer = '';

    let regions = [
        "Africa",
        "America",
        "Asia",
        "Europe",
        "Oceania"
    ];

    const filterBySelectbox = (choice) => {

    }

</script>


<div class="select has-shadow">
    <select class={$darkMode ? 'is-black has-background-grey-darker has-text-white' : 'has-shadow is-white'} bind:value={selected} on:change="{() => alert(selected)}">
        <option disabled>Filter by Region</option>
        {#each regions as region}
            <option value={region}>
                {region}
            </option>
        {/each}
    </select>
</div>
