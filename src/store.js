import { reactive } from "vue";

export const store = reactive({
    test: "Hello store!",
    apiURL: "https://api.themoviedb.org/3/search/",
    movieURL: "movie",
    seriesURL: "tv",
    apiKey: "2c49be34bbee907783d1de30dbc7df96",
    query: "",
    isLoading: false,
    movieFound: [],
    seriesFound: [],
    testSingleResult: {
        title: "Test Title",
        originalTitle: "Test Original Title",
        language: "Test Language It",
        vote: 5,
    }
});