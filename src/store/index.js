import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        portinForm: {
            names: [],
            card1: null,
            card2: null,
            orderDescription: null,
        },
    },
    mutations: {
        setPortinForm(state, payload) {
            state.portinForm = payload
        },
    },
    actions: {},
    modules: {},
})
