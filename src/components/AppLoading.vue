<script>
export default {
    name: "AppLoader",
}
</script>

<template>
    <section class="ms_loading d-flex justify-content-center align-items-center">
        <span>Loading...</span>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.ms_loading {
    width: 100%;
    height: 100vh;

    font-size: 3rem;
    background-color: $col-bg;
    color: $col-red-netflix;
}

@media screen and (min-width: 992px) {
    .ms_loading {
        font-size: 5rem;
    }
}
</style>