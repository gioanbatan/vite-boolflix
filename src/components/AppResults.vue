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
    TEST APPRESULTS
    <AppSingleResult :result="store.testSingleResult" />
</template>

<style lang="scss">

</style>