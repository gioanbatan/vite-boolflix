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
            console.log("searching...");
            if (this.store.query) {
                const searchObj = {
                    api_key: this.store.apiKey,
                    query: this.store.query
                }
                this.store.isLoading = 0;
                this.callMovie(searchObj);
                this.callSeries(searchObj);
            }
        },
        callMovie(queryObj) {
            axios
                .get(`${this.store.apiURL}/${this.store.movieURL}`, { params: queryObj })
                .then((resp) => {
                    this.store.movieFound = resp.data.results;
                    console.log(this.store.movieFound);
                    this.store.isLoading++;
                    console.log(this.store.isLoading);
                });
        },
        callSeries(queryObj) {
            axios
                .get(`${this.store.apiURL}/${this.store.seriesURL}`, { params: queryObj })
                .then((resp) => {
                    this.store.seriesFound = resp.data.results;
                    console.log(this.store.seriesFound);
                    this.store.isLoading++;
                    console.log(this.store.isLoading);
                });
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