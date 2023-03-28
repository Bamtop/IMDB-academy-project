import {createStore} from 'vuex'
export default createStore({
    state: {
        currentQuery: '' as string,
        isOpenFilter: false as boolean,
    },
    mutations: {
        setQuery(state,query: string) {
            state.currentQuery = query;
        },
        setFilter(state, isOpenFilter: boolean) {
            state.isOpenFilter = isOpenFilter;
        }
    }
});
