import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createStore } from 'vuex'
import axios from 'axios'
import VueClickAway from 'vue3-click-away'
import user from './modules/user'

const store = createStore({
    state(){  // state sama kaya data
        return {
            count: 0,
            nama: ['Vue Js', 'React Js' , 'Angular' , 'Node Js'],
            iscolor: true,
            password :'',
            datauser: [],
            like: 0,
            biruatauhijau: true,
            panjang: 0
        }
    },
    mutations: {  // mutations sama kaya method
        increment(state){
            state.count++
        },
        generaterandompassword(state){
            let randomstring = Math.random().toString(36).slice(-8)
            state.password = randomstring
        },
        setpanjang(state){
            if (state.panjang >= 100) {
                return state.panjang = 100
            }else{
                return state.panjang += 20
            }
        }
    },
    getters: {   // getters sama kaya computed
        bgwarna(state){
            return state.iscolor ? console.log('Is Color True') : console.log('Is Color False')
        },
        fakelike(state){
            return state.like + 100
        },
        ubahbg(state){
            return state.biruatauhijau ? 'bg-green-400' : 'bg-blue-400'
        }
    },
    actions: {
        async getuser({commit}){
            let {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
            this.state.datauser = data
        }
    },
    modules:{
        user
    }
})

createApp(App).use(VueClickAway).use(store).mount('#app')
