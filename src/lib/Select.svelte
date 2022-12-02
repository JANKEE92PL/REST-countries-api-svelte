<script>
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
    <select bind:value={selected} on:change="{() => alert(selected)}">
        <option disabled>Filter by Region</option>
        {#each regions as region}
            <option value={region}>
                {region}
            </option>
        {/each}
    </select>
</div>
