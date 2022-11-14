<script>
export default {
    name: "AppSearch",
    methods: {
        testing() {
            console.log("BUTTON");
        }
    }
}
</script>

<template>
    <section>
        <label for="search">Insert search query:</label>
        <input type="text" id="search" placeholder="Search">
        <button @click="testing">Start Search!</button>
    </section>
</template>

<style lang="scss">

</style>