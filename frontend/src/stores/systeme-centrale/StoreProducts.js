import { getAllCategories } from "@/fetch/CategoriesRequest";
import { getAllProduct } from "@/fetch/ProductRequest";
import { defineStore } from "pinia";
import { ref } from "vue";
export const useProductStore = defineStore('products', () => {
    const products = ref([]);
    const categories = ref([]);

    async function update() {
        this.products = await getAllProduct();
        this.categories = await getAllCategories();
    }
    return { products, categories, update };
});