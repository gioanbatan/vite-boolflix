<script>
export default {
    name: "AppSingleResult",
    props: {
        result: Object,
    }
}
</script>

<template>
    <section>
        <div>{{ result.title }}</div>
        <div>{{ result.originalTitle }}</div>
        <div>{{ result.language }}</div>
        <div>{{ result.vote }}</div>
    </section>
</template>

<style lang="scss">

</style>