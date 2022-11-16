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
            <div class="header-content d-flex flex-column align-items-center flex-sm-row justify-content-sm-between">
                <span class="ms_logo text-center sm-text-start">BOOLFLIX</span>
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

.header-content {
    height: $header-height;
}

.ms_logo {
    font-size: 2rem;
    font-weight: 700;
}
</style>