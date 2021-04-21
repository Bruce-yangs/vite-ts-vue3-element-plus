import { Commit, createStore } from 'vuex'
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

export interface GlobalErrorProps {
    status: boolean;
    message?: string;
}
export interface GlobalDataProps {
    error: GlobalErrorProps;
    columns: ColumnProps[];
    posts: PostProps[];
    user: UserProps;
    loading: boolean;
    token: string;
}
const getAndCommit = async(url: string, mutationName: string, commit: Commit) => {
    const { data } = await axios.get(url)
    commit(mutationName, data)
}

const postAndCommit = async(url: string, mutationName: string, commit: Commit, payload: any) => {
    const { data } = await axios.post(url, payload)
    commit(mutationName, data)
    return data
}

const store = createStore<GlobalDataProps>({
    state: {
        error: { status: false },
        columns: [],
        posts: [],
        user: { isLogin: true, columnId: 1, name: 'Bruce' },
        loading: false,
        token: localStorage.getItem('token') || ''
    },
    mutations: {
        // login(state, params) {
        //     console.log(state, params)
        //     state.user = { ...state.user, isLogin: true, name: params }
        //     // state.count++
        // },
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
        },
        setLoading(state, params) {
            state.loading = params
        },
        fetchCurrentUser(state, rawData) {
            state.user = { isLogin: true, ...rawData.data }
        },
        login(state, rawData) {
            const { token } = rawData.data
            state.token = token
            axios.defaults.headers.common.Authorization = `Bearer ${token}`
            state.token = rawData.data.token
            localStorage.setItem('token', token)
        },
        setError(state, e: GlobalErrorProps) {
            state.error = e
        }
    },
    actions: {
        fetchColumns({ commit }) {
            getAndCommit('/columns', 'fetchColumns', commit)
        },
        fetchColumn({ commit },cid) {
            getAndCommit(`/columns/${cid}`, 'fetchColumn', commit)
        },
        fetchPosts({ commit },cid) {
            getAndCommit(`/columns/${cid}/posts`, 'fetchPosts', commit)
        },
        login({commit}, payload) {
            return postAndCommit('/user/login', 'login', commit, payload)
        },
        fetchCurrentUser({commit}) {
             getAndCommit('/user/current', 'fetchCurrentUser', commit)
        },

        /* 组合actions */
        loginAndFetch({ dispatch }, loginData) {
            return dispatch('login', loginData).then(() => {
                return dispatch('fetchCurrentUser')
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