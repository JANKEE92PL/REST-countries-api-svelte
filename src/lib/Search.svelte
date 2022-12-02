<script>
    let searchKeyword = '';

    let url = "https://restcountries.com/v3.1/"

    const getCountry = async (keyword) => {
        let country = await fetch(url + "name/" + keyword).then(res => res.json())
        return country
    }
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            getCountry(e.target.value);
        }
    }
</script>

<div class="field is-4">
    <p class="control has-icons-left">
        <input bind:value={searchKeyword} on:keypress={onKeyPress} class="input" type="text"
               placeholder="Search for a country...">
        <span>{searchKeyword}</span>
        <span class="icon is-small is-left"><i class="fa-solid fa-magnifying-glass"></i></span>
    </p>
</div>

