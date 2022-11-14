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
        <div>Title: {{ result.title }}</div>
        <div>Original title: {{ result.original_title }}</div>
        <div>Language {{ result.original_language }}</div>
        <div>Vote: {{ result.vote_average }}</div>
    </section>
</template>

<style lang="scss">

</style>