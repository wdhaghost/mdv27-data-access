import { defineStore } from "pinia";
import { ref } from "vue";
import { getAllGamez } from "@/fetch/ShopRequest";
export const useGamezStore = defineStore('gamez', () => {
    const results = ref([]);

    async function update() {
        this.results = await getAllGamez();
    }
    return { results, update };
});