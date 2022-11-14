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
        langToFlag(typeOf) {
            switch (typeOf.original_language) {
                case 'en':
                    return "640px-Flag_of_the_United_Kingdom.svg.webp";
                    break;
                case 'fr':
                    return "640px-Flag_of_France_(1794–1815,_1830–1974,_2020–present).svg.webp";
                    break;
                case 'it':
                    return "640px-Flag_of_Italy.svg.png";
                    break;
                case 'es':
                    return "640px-Bandera_de_España.svg.png";
                    break;
                case 'de':
                    return "640px-Flag_of_Germany.svg.png";
                    break;
                default:
                    return "";
            }
        },
        gus() {
            return "640px-Flag_of_Germany.svg.png";
        }
    }
}
</script>

<template>
    <div>Movies:</div>
    <div v-for="(item, index) in store.movieFound" :key="index">
        <div>Result: {{ (index + 1) }}</div>
        <br>
        <AppSingleResult :result="item" type="movie" :flag="`${langToFlag(item)}`" />
        <img :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`">
        <hr>
    </div>

    <div>Tv Shows:</div>
    <div v-for="(item, index) in store.seriesFound" :key="index">
        <div>Result: {{ (index + 1) }}</div>
        <br>
        <AppSingleResult :result="item" type="series" :flag="`${langToFlag(item)}`" />
        <img :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`">
        <hr>
    </div>
</template>

<style lang="scss">

</style>