import {createStore} from 'vuex'
export default createStore({
    state: {
        currentQuery: '' as string,
        isOpenFilter: false as boolean,
        selectQuestion: 0 as number,
        selectOption1: '' as string,
        selectOption2: '' as string,
        selectOption3: '' as string,
        rangeValue: 0 as number,
        genre: '' as string
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
        setRangeValue(state, rangeValue: number) {
            state.rangeValue = rangeValue;
        },
        setGenre(state, genre: string) {
            state.genre = genre;
        }
    }
});
