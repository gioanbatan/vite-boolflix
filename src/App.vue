<script>
import axios from "axios";
import { store } from "./store";

export default {
  components: {

  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div>{{ store.test }}</div>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>