<!-- src/components/GlobalDates.vue -->
<template>
    <div id="global-dates">
        <h2>2021 Holidays</h2>
        <table>
          <tr v-for="day in globalDates" :key="day.id">
            <td>{{ day.name }}</td>
            <td>{{ day.date }}</td>
          </tr>
        </table>
    </div>
</template>

<script>
import { globalDates } from '@/globalDates.js';

export default {
    name: 'show-holidays',
    props: [''],
    data: function () {
        return {
            globalDates: globalDates,
        };
    },
};
</script>
