<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            currentDateTime: '',
            id: 'current-date-time-updated',
        };
    },
    methods: {
        updateDateTime() {
            const now = new Date();
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
            const year = now.getFullYear();
            const hours = String(now.getHours()).padStart(2, '0'); // 24-hour format
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            this.currentDateTime = `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
        },
    },
    created() {
        this.updateDateTime();
        setInterval(this.updateDateTime, 1000); // Update every second
    },
});
</script>

<template>
    <div :id="id">{{ currentDateTime }}</div>
</template>
