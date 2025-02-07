<script setup lang="js">
import { ref } from "vue";
import { deleteSeller } from '@/fetch/SellerRequest';
import { deleteProduct } from "@/fetch/ProductRequest";
import { useProductStore } from "@/stores/StoreProducts";
import { useSellerStore } from "@/stores/StoreSellers";

const productStore = useProductStore();
const sellerStore = useSellerStore();

const seller = ref({
    name: "",
});
</script>

<template>
    <div class="main">
        <h2>Supprimer</h2>
        <form @submit.prevent="async () => {
            await deleteProduct(product);
            await productStore.update();
        }">
            <h3>Produit</h3>
            <div>
                <input id="product_id" type="number" />
                <label for="product_id">Produits_id</label>
            </div>
            <button>Supprimer</button>
        </form>

        <form @submit.prevent="async () => {
            await deleteSeller(seller);
            await sellerStore.update();
        }">
            <h3>Revendeur</h3>
            <div>
                <input id="seller_name" type="text" v-model="seller.name" />
                <label for="seller_name">Nom du revendeur</label>
            </div>
            <button>Supprimer</button>
        </form>
    </div>

</template>