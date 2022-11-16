<script>
import { store } from "../store";
import axios from "axios";
import AppSearch from "./AppSearch.vue";

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    components: {
        AppSearch
    },
    methods: {
        startSearch() {
            console.log("BUTTON");
            if (this.store.query) {
                // URL creation
                let apiCallUrl = `${this.store.apiURL}${this.store.movieURL}?api_key=${this.store.apiKey}&query=${this.store.query}`;
                console.log(apiCallUrl);
                // Loading on
                store.isLoading = true;
                // Api call for Movies and update store.movieFound
                axios.get(apiCallUrl).then((resp) => {
                    this.store.movieFound = resp.data.results;
                    console.log(this.store.movieFound);
                });

                // URL creation
                apiCallUrl = `${this.store.apiURL}${this.store.seriesURL}?api_key=${this.store.apiKey}&query=${this.store.query}`;
                console.log(apiCallUrl);
                // Api call for Tv Shows and update store.seriesFound
                axios.get(apiCallUrl).then((resp) => {
                    this.store.seriesFound = resp.data.results;
                    console.log(this.store.seriesFound);
                    // Loading off
                    store.isLoading = false;
                });
            } else {
                console.log("Query is empty!");
            }
        }
    }
}

</script>

<template>
    <header>
        <div class="container">
            <div class="header-content d-flex flex-column align-items-center flex-sm-row justify-content-sm-between">
                <span class="ms_logo text-center sm-text-start">BOOLFLIX</span>
                <AppSearch @search="startSearch" />
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