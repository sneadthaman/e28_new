import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/app.js';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userHolidayCount: 0,
        holidays: [],
    },
    mutations: {
        addHoliday(state, payload) {
            state.holidays = payload;
            state.userHolidayCount = state.holidays.length;
        }
    },
    actions: {
        fetchHolidays(context) {
            axios.get('/holidays').then((response) => {
                context.commit('addHoliday', response.data.holidays);
            });
        }
    }
})