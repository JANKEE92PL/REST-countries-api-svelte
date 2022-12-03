<script>
    import {darkMode} from "../stores.js";
</script>

<nav class={$darkMode ? 'navbar  is-black has-background-grey-darker' : 'navbar has-shadow is-white'}>
    <div class="navbar-brand container py-3">
        <a class="navbar-item" href="/">
            <h1 class="content is-large">Where in the world?</h1>
        </a>
    </div>
    <div class="navbar-end">
        <div class="navbar-item">
            <div on:click={()=>$darkMode=!$darkMode} class={$darkMode ? "field is-grouped button  is-dark ":"field is-grouped button is-light"}>
                <div class="icon"><i class={$darkMode ? 'fa-solid fa-moon' : 'fa-regular fa-moon'}></i></div>
                <span>Darkmode</span>
            </div>
        </div>
    </div>
</nav>
