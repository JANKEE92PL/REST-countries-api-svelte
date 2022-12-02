<script>
    import 'bulma/css/bulma.css'
    import Card from './lib/Card.svelte'
    import Navbar from "./lib/Navbar.svelte";
    import Search from "./lib/Search.svelte";
    import Select from "./lib/Select.svelte";
    import {darkMode} from "./stores.js";

</script>
<div class={$darkMode ? 'has-background-black-ter' : 'has-background-light has-shadow is-white'}>
    <Navbar/>

    <main class="container">
        <div class="is-flex is-justify-content-space-between py-4">
            <Search/>
            <Select/>
        </div>
<!--            <Card />-->
    </main>
</div>