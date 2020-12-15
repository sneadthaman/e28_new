import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/app.js';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userHolidayCount: 0,
        holidays: [],
        user: null,
    },
    mutations: {
        addHoliday(state, payload) {
            state.holidays = payload;
            state.userHolidayCount = state.holidays.length;
        },
        setUser(state, payload) {
            state.user = payload;
        },
    },
    actions: {
        fetchHolidays(context) {
            axios.get('/holidays').then((response) => {
                context.commit('addHoliday', response.data.holidays);
            });
        },
        authUser(context) {
            axios.post('auth').then((response) => {
                if (response.data.authenticated) {
                    context.commit('setUser', response.data.user);
                }
            });
        },
    },
    getters: {
        getHolidayById(state) {
            return function (id) {
                return state.holidays.filter((holiday) => {
                    return holiday.id == id;
                }, this.id)[0];
            }
        }
    }
})