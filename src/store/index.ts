import {createStore} from 'vuex'
import type {Film} from "@/types/types";
export default createStore({
    state: {
        currentQuery: '' as string,
        isOpenFilter: false as boolean,
        selectQuestion: 0 as number,
        selectOption1: '' as string,
        selectOption2: '' as string,
        selectOption3: '' as string,
        startYearFilter: 0 as number,
        ratingFilm: 0 as number,
        duration:0 as number,
        genre: '' as string,
        genres: [] as any,
        films2: [] as any,
        films:[
            {
                "id": "tt0145487", // Unique result id
                "tconst": "tt0145487",
                "titleType": "movie",
                "primaryTitle": "Spider-Man",
                "originalTitle": "Spider-Man",
                "isAdult": false,
                "startYear": 2002,
                "endYear": 0,
                "runtimeMinutes": 121,
                "genres": [
                    "Action",
                    "Adventure",
                    "Sci-Fi"
                ],
                "averageRating": 7.4,
                "numVotes": 789954,
                "image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            },
            {
                "id": "tt0145488", // Unique result id
                "tconst": "tt0145488",
                "titleType": "movie",
                "primaryTitle": "Batman",
                "originalTitle": "Batman",
                "isAdult": false,
                "startYear": 2005,
                "endYear": 0,
                "runtimeMinutes": 158,
                "genres": [
                    "Action",
                ],
                "averageRating": 5.4,
                "numVotes": 9954,
                "image":"https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            },
            {
                "id": "tt0145489", // Unique result id
                "tconst": "tt0145489",
                "titleType": "movie",
                "primaryTitle": "Iron-Man",
                "originalTitle": "Iron-Man",
                "isAdult": false,
                "startYear": 2010,
                "endYear": 0,
                "runtimeMinutes": 200,
                "genres": [
                    "Sci-Fi"
                ],
                "averageRating": 1.4,
                "numVotes": 119954,
                "image":"https://rickandmortyapi.com/api/character/avatar/3.jpeg"
            }

        ]
    },
    mutations: {
        setQuery(state,query: string) {
            state.currentQuery = query;
        },
        setFilter(state, isOpenFilter: boolean) {
            state.isOpenFilter = isOpenFilter;
        },
        setSelectQuestion(state, selectQuestion: number) {
            state.selectQuestion = selectQuestion;
        },
        setSelectOption1(state, selectOption1: string) {
            state.selectOption1 = selectOption1;
        },
        setSelectOption2(state, selectOption2: string) {
            state.selectOption2 = selectOption2;
        },
        setSelectOption3(state, selectOption3: string) {
            state.selectOption3 = selectOption3;
        },
        setStartYear(state, rangeValue: number) {
            state.startYearFilter = rangeValue;
        },
        setRating(state, rangeValue: number){
          state.ratingFilm = rangeValue;
        },
        setDuration(state, rangeValue: number){
            state.duration = rangeValue;
        },
        setGenre(state, genre: string) {
            state.genre = genre;
        },
        setFilms(state, films:any) {
            state.films2 = films;
        },
        setGenres(state, genres:any) {
            state.genres = genres;
        }
    },
    getters: {
        getFilms(state) {
            return state.films;
        }
    },
    actions: {
        fetchFilms({commit,state}) {
            let apiKey = 'api_key='+'e89c2bc9cc444dc2e3e02d3c09849590';
            let apiUrl = 'https://api.themoviedb.org/3/search/movie?';
            let query = state.currentQuery
            let url = apiUrl + apiKey + '&query=' + query;
            fetch(url)
                .then((data) => data.json())
                .then((data) => {
                    commit('setFilms', data.results);
                })
        },
        fetchGenres({commit,state}) {
            let url = "http://localhost:8080/search/genres";
            fetch(url)
                .then((data) => data.json())
                .then((data) => {
                    commit('setGenres', data.values);
                })
        },
    },
});
