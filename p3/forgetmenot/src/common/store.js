import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/app.js';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userHolidayCount: 0,
        holidays: [],
        user: null,
        users: []
    },
    mutations: {
        addHoliday(state, payload) {
            state.holidays.push(payload);
            state.userHolidayCount = state.holidays.length;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        removeHoliday(state, payload) {
            state.holidays.splice((payload - 1), 1);
            state.userHolidayCount = state.holidays.length;
        },
        addUser(state, payload) {
            state.users.push(payload);
        }
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