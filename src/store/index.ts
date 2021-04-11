import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps  } from "../data/testData"
interface UserProps {
    isLogin: boolean,
    name?: string,
    id?: number
}
export interface GlobalDataProps {
    columns: ColumnProps[];
    posts: PostProps[];
    user: UserProps;
}

const store = createStore<GlobalDataProps>({
    state: {
        columns: testData,
        posts: testPosts,
        user: { isLogin: true}
    },
    mutations: {
        login(state,params) {
            console.log(state,params)
            state.user = { ...state.user, isLogin: true, name:  params}
            // state.count++
        }
    }
})



export default store