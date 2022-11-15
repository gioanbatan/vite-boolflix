<script>
import AppSearch from "./AppSearch.vue";

export default {
    name: "AppHeader",
    components: {
        AppSearch
    }
}

</script>

<template>
    <header>
        <div class="container">
            <div class="header-content p-3 d-flex flex-column flex-md-row justify-content-between">
                <span class="ms_logo">BOOLFLIX</span>
                <AppSearch />

            </div>
        </div>
    </header>
</template>

<style lang="scss" scope>
@use "../styles/partials/variables" as *;

header {
    position: fixed;
    background-color: $col-black;
    color: $col-red-netflix;
    width: 100%;
    height: $header-height;
}

.ms_logo {
    font-size: 2rem;
    font-weight: 700;
}
</style>