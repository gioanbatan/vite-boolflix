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
            <img class="flag" :src="getImagePath(`../assets/img/${this.flag}`)" :alt="`${result.original_language}`">
        </div>
        <div v-else>Language: {{ result.original_language }}</div>
        <div>Vote: {{ result.vote_average }}</div>
        <img :src="`https://image.tmdb.org/t/p/w342/${result.poster_path}`">
    </section>
</template>

<style lang="scss">
.flag {
    max-width: 30px;
}
</style>