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
    <main>
        <h2 v-if="store.movieFound.length" class="text-center p-2">Movies found:</h2>

        <div class="container">
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-5 row-cols-lg-6">
                <div class="col g-2" v-for="(item, index) in store.movieFound" :key="index">
                    <AppSingleResult :result="item" type="movie" :flag="`${langToFlag(item)}`" />
                </div>
            </div>
        </div>

        <h2 v-if="store.seriesFound.length" class="text-center p-2">Tv-Show found:</h2>
        <div class="container">
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-5 row-cols-lg-6">
                <div class="col g-2" v-for="(item, index) in store.seriesFound" :key="index">
                    <AppSingleResult :result="item" type="series" :flag="`${langToFlag(item)}`" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

main {
    padding-top: $header-height;
    background-color: $col-bg;
    color: $col-white;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
}

.col {
    height: 300px;
}
</style>