import { createStore } from 'vuex'
// import { testData, testPosts,/*  ColumnProps, PostProps */ } from "../data/testData"
import axios from '../utils/http'

interface UserProps {
    isLogin: boolean,
    name?: string,
    id?: number,
    columnId?: number
}

interface ImageProps {
    _id?: string;
    url?: string;
    createdAt?: string;
}

export interface PostProps {
    _id?: string;
    title: string;
    excerpt?: string;
    content?: string;
    image?: ImageProps | string;
    createdAt?: string;
    column: string;
    author?: string | UserProps;
    isHTML?: boolean;
}

export interface ColumnProps {
    _id: string;
    title: string;
    avatar?: ImageProps;
    description?: string;
}

export interface GlobalDataProps {
    columns: ColumnProps[];
    posts: PostProps[];
    user: UserProps;
}

const store = createStore<GlobalDataProps>({
    state: {
        columns: [],
        posts: [],
        user: { isLogin: true, columnId: 1, name: 'Bruce' }
    },
    mutations: {
        login(state, params) {
            console.log(state, params)
            state.user = { ...state.user, isLogin: true, name: params }
            // state.count++
        },
        outlogin(state, params) {
            state.user = { ...state.user, isLogin: false, name: params }
            // state.count++
        },
        createPost(state, newPost) {
            state.posts.push(newPost)
        },
        fetchColumns(state, rawData) {
            state.columns = rawData.data.list
        },
        fetchColumn(state, rawData) {
            state.columns = [rawData.data]
        },
        fetchPosts(state, rawData) {
            state.columns = rawData.data.list
        }
    },
    actions: {
        fetchColumns(context) {
            axios.get('/columns').then(res => {
                context.commit('fetchColumns', res.data)
            })
        },
        fetchColumn({ commit },cid) {
            axios.get(`/columns/${cid}`).then(res => {
                commit('fetchColumn', res.data)
            })
        },
        fetchPosts({ commit },cid) {
            axios.get(`/columns/${cid}/posts`).then(res => {
                commit('fetchPosts', res.data)
            })
        }
    },
    getters: {
        getColumnById: (state) => (id: string) => {
            return state.columns.find(c => c._id === id)
        },
        getPostsByCId: (state) => (id: string) => {
            return state.posts.filter(c => c.column === id)
        },
    }
})



export default store