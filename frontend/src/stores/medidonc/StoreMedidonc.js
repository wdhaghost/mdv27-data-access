import { defineStore } from "pinia";
import { ref } from "vue";
export const useMedidoncStore = defineStore('medidonc', () => {
    const products = ref([]);

    async function update() {
        this.products = await getAllMedidonc();
    }
    return { products, update };
});