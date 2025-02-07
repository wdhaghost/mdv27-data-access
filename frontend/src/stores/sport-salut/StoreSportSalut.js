import { defineStore } from "pinia";
import { ref } from "vue";
export const useSportSalutStore = defineStore('sport-salut', () => {
    const products = ref([]);

    async function update() {
        this.products = getAllSportSalut();
    }
    return { products, update };
});