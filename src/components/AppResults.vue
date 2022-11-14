<script>
import AppSingleResult from "./AppSingleResult.vue";
import { store } from "../store";

export default {
    name: "AppResults",
    components: {
        AppSingleResult,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        langToFlag() {
            switch (store.original_language) {
                case 'en':
                    this.store.flagImage = "640px-Flag_of_the_United_Kingdom.svg.webp";
                    break;
                case 'fr':
                    this.store.flagImage = "640px-Flag_of_France_(1794–1815,_1830–1974,_2020–present).svg.webp";
                    break;
                case 'it':
                    this.store.flagImage = "640px-Flag_of_Italy.svg.png";
                    break;
                case 'es':
                    this.store.flagImage = "640px-Bandera_de_España.svg.png";
                    break;
                case 'de':
                    this.store.flagImage = "640px-Flag_of_Germany.svg.png";
                    break;
                default:
                    this.store.flagImage = ""
            }
        }
    }
}
</script>

<template>
    <div>Movies:</div>
    <div v-for="(item, index) in store.movieFound" :key="index">
        <div>Result: {{ (index + 1) }}</div>
        <br>
        <AppSingleResult :result="item" type="movie" />
        <hr>
    </div>

    <div>Tv Shows:</div>
    <div v-for="(item, index) in store.seriesFound" :key="index">
        <div>Result: {{ (index + 1) }}</div>
        <br>
        <AppSingleResult :result="item" type="series" />
        <hr>
    </div>
</template>

<style lang="scss">

</style>