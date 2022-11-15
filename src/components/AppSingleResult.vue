<script>
export default {
    name: "AppSingleResult",
    data() {
        return {
            hover: false,
        }
    },
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
    <section class="ms_card" @mouseover="hover = true" @mouseleave="hover = false">
        <div :class="{ collapse: hover }" class="ms_front">
            <img v-if="(result.poster_path)" :src="`https://image.tmdb.org/t/p/w342/${result.poster_path}`">
            <div v-else class="ms_no-pic">
                no picture
            </div>

            <!-- <div class="ms_no-pic">NOO</div> -->
        </div>
        <div :class="{ collapse: !hover }" class="ms_back">
            <div v-if="type === 'movie'">Title: {{ result.title }}</div>
            <div v-else-if="type === 'series'">Title: {{ result.name }} </div>
            <div v-if="type === 'movie'">Original title: {{ result.original_title }}</div>
            <div v-else-if="type === 'series'">Original title: {{ result.original_name }}</div>
            <div v-if="flag">
                <span>Language (img): </span>
                <img class="ms_flag" :src="getImagePath(`../assets/img/${this.flag}`)"
                    :alt="`${result.original_language}`">
            </div>
            <div v-else>Language: {{ result.original_language }}</div>
            <div>Vote: {{ result.vote_average }}</div>
            <font-awesome-icon class="ms_stars" v-for="n in (Math.ceil(result.vote_average / 2))" :key="n"
                icon="fa-solid fa-star" />
            <font-awesome-icon class="ms_stars" icon="fa-solid fa-star" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.ms_card {
    width: 100%;
    height: 100%;
    background-color: $col-black;

    .ms_front {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .ms_back {
        width: 100%;
        height: 100%;
        padding: 1rem;
        font-weight: 700;
        font-size: 0.8rem;
        overflow: auto;
    }

}


.ms_flag {
    max-width: 30px;
}

.ms_back {
    background-color: $col-black;
    color: $col-white;
}

.ms_stars {
    color: $col-gold;
}

.ms_no-pic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: $col-bg;
}
</style>