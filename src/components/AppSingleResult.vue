<script>
export default {
    name: "AppSingleResult",
    props: {
        result: Object,
        flag: String,
        type: String
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <section>
        <div v-if="type === 'movie'">Title: {{ result.title }}</div>
        <div v-else-if="type === 'series'">Title: {{ result.name }} </div>
        <div v-if="type === 'movie'">Original title: {{ result.original_title }}</div>
        <div v-else-if="type === 'series'">Original title: {{ result.original_name }}</div>
        <div v-if="flag">
            <span>Language (img): </span>
            <img :src="getImagePath(`../assets/img/${this.flag}`)" :alt="`${result.original_language}`">
        </div>
        <div v-else>Language: {{ result.original_language }}</div>
        <div>Vote: {{ result.vote_average }}</div>
    </section>
</template>

<style lang="scss">
img {
    max-width: 30px;
}
</style>