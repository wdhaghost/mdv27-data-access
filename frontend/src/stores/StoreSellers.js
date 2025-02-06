import { ref } from "vue"
import { defineStore } from "pinia";
import { getAllSeller } from "@/fetch/SellerRequest";

export const useSellerStore = defineStore('Seller', () => {
    const sellers = ref([]);
    async function update() {
        this.sellers = await getAllSeller();
    }
    return { sellers, update };
});