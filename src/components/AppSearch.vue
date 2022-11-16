<script>
import axios from 'axios';
import { store } from "../store";

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="d-flex align-items-center">
        <label class="d-none" for="search">Insert search query:</label>
        <input class="mx-2" @keyup.enter="$emit('search')" type="text" id="search" placeholder="Search"
            v-model="store.query">
        <button class="btn ms_btn-primary" @click="$emit('search')">Start Search!</button>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.ms_btn-primary {
    white-space: nowrap;
}
</style>