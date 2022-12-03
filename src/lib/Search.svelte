<script>
    import {darkMode} from "../stores.js";

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

<div class="field is-4 has-shadow">
    <p class="control has-icons-left">
        <input bind:value={searchKeyword} on:keypress={onKeyPress} type="text" class={$darkMode ? 'input is-black has-background-grey-darker has-text-white' : 'input has-shadow is-white'}
               placeholder="Search for a country...">
        <span>{searchKeyword}</span>
        <span class="icon is-small is-left"><i class="fa-solid fa-magnifying-glass"></i></span>
    </p>
</div>

<style>
    input.is-black::placeholder {
        color: var(--white);
    }
</style>