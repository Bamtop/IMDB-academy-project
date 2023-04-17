import {createStore} from 'vuex'
import type {Film} from "@/types/types";
import {randomNumber} from "@/store/utils";
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
        quizResult: [] as any,
        trendingResult: [] as any,
        recentResult: [] as any,
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
        },

        setQuizResult(state, quizResult:any) {
            state.quizResult = quizResult;
        },
        setTrendingResult(state, trendingResult:any) {
            state.trendingResult = trendingResult;
        },
        setRecentResult(state, recentResult:any) {
            state.recentResult = recentResult;
        },
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
        //fetch with NetworkApi
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
                        let genre = genres.values[i].value;
                        genre = genre.charAt(0).toUpperCase() + genre.slice(1);
                        genresList.push(genre);
                    }
                    commit('setGenres', genresList);
                })
        },

        fetchFilms2({commit,state}) {
            let url= "http://localhost:8080/search/term";
            let query = '?value='+state.currentQuery;
            let field = '&field=primaryTitle';
            fetch(url+query+field)
                .then((data) => data.json())
                .then((data) => {
                    data = data.slice(0,15);
                    let promises = [];
                    for(let film in data){
                        let imageUrl = 'https://www.omdbapi.com/?apikey=48eb5195&t='+ data[film].primaryTitle;
                        let promise = fetch(imageUrl)
                            .then((result) => result.json())
                            .then((result) => {
                                if (result.Poster!=="N/A" && result.Poster!==undefined){
                                data[film].imageUrl=result.Poster;
                            }else{
                                data[film].imageUrl='https://via.placeholder.com/300x300.png?text=Imagen+no+disponible';
                            }
                            });
                        promises.push(promise);
                    }
                    Promise.all(promises).then(() => {
                        commit('setFilms3', data);
                    });
                });
        },

        fetchFilterDiscover({commit,state}) {
            let minYear;let genres;let maxMinutes;let minMinutes;let minScore;
            let url= "http://localhost:8080/search?type=movie";
            minYear = state.startYearFilter ? '&minYear='+state.startYearFilter : '';
            genres = state.genre ? '&genres='+state.genre : '';
            minScore = state.ratingFilm ? '&minScore='+state.ratingFilm : '';
            maxMinutes = state.duration ? '&maxMinutes='+state.duration + 15 : '';
            minMinutes = state.duration ? '&minMinutes='+state.duration  : '';
            fetch(url + genres + minYear + minScore + maxMinutes + minMinutes)
                .then((data) => data.json())
                .then((data) => {
                    data.hits = data.hits.slice(0,25);
                    let promises = [];
                    for(let film in data.hits){
                        let imageUrl = 'https://www.omdbapi.com/?apikey=48eb5195&t='+ data.hits[film].primaryTitle;
                        let promise = fetch(imageUrl)
                            .then((result) => result.json())
                            .then((result) => {
                                if (result.Poster!=='N/A' && result.Poster!==undefined){
                                    data.hits[film].imageUrl=result.Poster;
                                }else{
                                    data.hits[film].imageUrl='https://via.placeholder.com/300x300.png?text=Imagen+no+disponible';
                                }
                            });
                        promises.push(promise);
                    }
                    Promise.all(promises).then(() => {
                        commit('setFilms3', data.hits);
                    });
                });
        },
        fetchPopularFilms({commit,state}){
            let url= "http://localhost:8080/search?minYear=2010&minScore=8&type=movie&sortRating=Ascendant";

            fetch(url)
                .then((data) => data.json())
                .then((data) => {
                    data.hits = data.hits.slice(0,25);
                    let promises = [];
                    for(let film in data.hits){
                        let imageUrl = 'https://www.omdbapi.com/?apikey=48eb5195&t='+ data.hits[film].primaryTitle;
                        let promise = fetch(imageUrl)
                            .then((result) => result.json())
                            .then((result) => {
                                if (result.Poster!=='N/A' && result.Poster!==undefined){
                                    data.hits[film].imageUrl=result.Poster;
                                }else{
                                    data.hits[film].imageUrl='https://via.placeholder.com/300x300.png?text=Imagen+no+disponible';
                                }
                            });
                        promises.push(promise);
                    }
                    Promise.all(promises).then(() => {
                        commit('setTrendingResult', data);
                    });
                });
        },

        fetchRecentFilm({commit,state}){
            let url= "http://localhost:8080/search?minYear=2022&type=movie&sortRating=Ascendant";

            fetch(url)
                .then((data) => data.json())
                .then((data) => {
                    let promises = [];
                    data.hits = data.hits.slice(0,25);
                    for(let film in data.hits){
                        let imageUrl = 'https://www.omdbapi.com/?apikey=48eb5195&t='+ data.hits[film].primaryTitle;
                        let promise = fetch(imageUrl)
                            .then((result) => result.json())
                            .then((result) => {
                                if (result.Poster!=='N/A' && result.Poster!==undefined){
                                    data.hits[film].imageUrl=result.Poster;
                                }else{
                                    data.hits[film].imageUrl='https://via.placeholder.com/300x300.png?text=Imagen+no+disponible';
                                }
                            });
                        promises.push(promise);
                    }
                    Promise.all(promises).then(() => {
                        commit('setRecentResult', data);
                    });
                });
        },
        fetchQuizResult({commit,state}){
            let genre;let minMinutes;let rating;
            let type = '&type=movie';
            let url= "http://localhost:8080/search?";
            genre =state.selectOption1 ?'genres='+state.selectOption1 : '';
            minMinutes = state.selectOption2 ? '&maxMinutes='+state.selectOption2 : '';
            rating = state.selectOption3 ? '&minRating='+state.selectOption3 : '';

            fetch(url+genre+minMinutes+rating+type)
                .then((data) => data.json())
                .then((data) => {
                    let randomNumbers = randomNumber(0,data.hits.length-1);
                    let res:Film[] = [];
                    res.push(data.hits[randomNumbers[0]],data.hits[randomNumbers[1]],data.hits[randomNumbers[2]]);
                    let promises = [];
                    for(let film in res){
                        let imageUrl = 'https://www.omdbapi.com/?apikey=48eb5195&t='+ res[film].primaryTitle;
                        let promise = fetch(imageUrl)
                            .then((result) => result.json())
                            .then((result) => {
                                if (result.Poster!=='N/A'&& result.Poster!==undefined){
                                res[film].imageUrl=result.Poster;
                                }else{
                                    res[film].imageUrl='https://via.placeholder.com/300x300.png?text=Imagen+no+disponible';
                                }
                            });
                        promises.push(promise);
                    }
                    Promise.all(promises).then(() => {
                        commit('setQuizResult', res);
                    });
                });
        },

    },
});
