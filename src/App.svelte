<script>
    import 'bulma/css/bulma.css'
    import Card from './lib/Card.svelte'
    import Navbar from "./lib/Navbar.svelte";
    import Search from "./lib/Search.svelte";
    import Select from "./lib/Select.svelte";
    import {countries, darkMode} from "./stores.js";

    let selected;

</script>

<div class={$darkMode ? 'has-background-black-ter' : 'has-background-light has-shadow is-white'}>
    <Navbar/>

    <main class="container">
        <div class="is-flex is-justify-content-space-between py-4">
            <Search/>
            <Select {selected}/>
        </div>
        <Card {countries}/>
    </main>
</div>