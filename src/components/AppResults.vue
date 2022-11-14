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
    }
}
</script>

<template>
    <div v-for="(item, index) in store.movieFound" :key="index">
        <div>Result: {{ (index + 1) }}</div>
        <br>
        <AppSingleResult :result="item" />
        <hr>
    </div>
</template>

<style lang="scss">

</style>