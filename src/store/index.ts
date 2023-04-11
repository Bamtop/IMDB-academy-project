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
        genre:  [] as any,
        genres: [] as any,
        films2: [] as any,
        films3: [] as any,
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
        setFilms3(state, films:any) {
            state.films3 = films;
        },
        setGenres(state, genres:any) {
            state.genres = genres;
        }
    },
    getters: {
        getFilms(state) {
            return state.films2;
        },
        getGenres(state) {
            return state.genres;
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
                    const genres = data.facets[0];
                    let genresList:any = []
                    for (let i = 0; i < 27; i++) {
                        genresList.push(genres.values[i].value)
                        commit('setGenres', genresList);
                    }
                })
        },
        fetchFilms2({commit,state}) {
            let url= "http://localhost:8080/search/term";
            let query = '?value='+state.currentQuery;
            let field = '&field=primaryTitle';
            fetch(url+query+field)
                .then((data) => data.json())
                .then((data) => {
                    let promises = [];
                    for(let film in data){
                        let imageUrl = 'https://www.omdbapi.com/?apikey=48eb5195&t='+ data[film].primaryTitle;
                        let promise = fetch(imageUrl)
                            .then((result) => result.json())
                            .then((result) => {
                                data[film].imageUrl=result.Poster;
                            });
                        promises.push(promise);
                    }
                    Promise.all(promises).then(() => {
                        commit('setFilms3', data);
                        console.log(data);
                    });
                });
        },
    },
});
