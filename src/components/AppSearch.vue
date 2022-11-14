<script>
import axios from 'axios';
import { store } from "../store";

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    },
    methods: {
        search() {
            console.log("BUTTON");
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

        }
    }
}
</script>

<template>
    <section>
        <label for="search">Insert search query:</label>
        <input @keyup.enter="search" type="text" id="search" placeholder="Search" v-model="store.query">
        <button @click="search">Start Search!</button>
    </section>
</template>

<style lang="scss">

</style>