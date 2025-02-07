import { defineStore } from "pinia";
import { ref } from "vue";
import { getAllSportSalut } from "@/fetch/ShopRequest";
export const useSportSalutStore = defineStore('sport-salut', () => {
    const products = ref([]);

    async function update() {
        this.products = getAllSportSalut();
    }
    return { products, update };
});