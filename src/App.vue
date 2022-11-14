<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppResults from "./components/AppResults.vue";
import AppLoading from "./components/AppLoading.vue";
import { store } from "./store";

export default {
  components: {
    AppHeader,
    AppLoading,
    AppResults
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppLoading v-if="store.isLoading" />
  <AppResults v-else />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>