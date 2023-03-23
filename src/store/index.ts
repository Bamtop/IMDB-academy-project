import {createStore} from 'vuex'
export default createStore({
    state: {
        currentQuery: '' as string,
    },
    mutations: {
        setQuery(state,query: string) {
            state.currentQuery = query;
        }
    }
});
