import { defineStore } from "pinia";
import { ref } from "vue";
export const useGamezStore = defineStore('gamez', () => {
    const results = ref([]);

    async function update() {

    }
    return { results, update };
});