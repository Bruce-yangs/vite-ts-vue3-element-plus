import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps  } from "../data/testData"
interface UserProps {
    isLogin: boolean,
    name?: string,
    id?: number,
    columnId?: number
}
export interface GlobalDataProps {
    columns: ColumnProps[];
    posts: PostProps[];
    user: UserProps;
}

// export interface PostProps {
//     _id?: string;
//     title: string;
//     excerpt?: string;
//     content?: string;
//     // image?: ImageProps | string;
//     createdAt?: string;
//     column: string;
//     author?: string | UserProps;
//     isHTML?: boolean;
//   }

const store = createStore<GlobalDataProps>({
    state: {
        columns: testData,
        posts: testPosts,
        user: { isLogin: true,columnId: 1,name: 'Bruce'}
    },
    mutations: {
        login(state,params) {
            console.log(state,params)
            state.user = { ...state.user, isLogin: true, name:  params}
            // state.count++
        },
        outlogin(state,params) {
            state.user = { ...state.user, isLogin: false, name:  params}
            // state.count++
        },
        createPost(state, newPost) {
            state.posts.push(newPost)
        }
    },
    getters: {
        biggerColumnsLen(state) {
            return state.columns.filter(c => c.id > 2).length 
        },
        getColumnById: (state) => (id: number) => {
            return  state.columns.find(c => c.id === id)
        },
        getPostsByCId: (state) => (id: number) => {
            return  state.posts.filter(c => c.columnId === id)
        },
    }
})



export default store