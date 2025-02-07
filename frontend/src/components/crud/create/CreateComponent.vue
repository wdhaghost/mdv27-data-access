<script setup lang="js">
import { ref } from "vue";
import { createProduct } from '@/fetch/ProductRequest';
import { useProductStore } from "@/stores/systeme-centrale/StoreProducts";
import { useSellerStore } from "@/stores/systeme-centrale/StoreSellers";
const productStore = useProductStore();
const sellerStore = useSellerStore();
const product = ref({
    nom: "",
    description: "",
    prix: 0,
    categorie: "",
    revendeur: ""
});
</script>

<template>
    <div class="main">
        <h2>Créer un produit</h2>
        <form @submit.prevent="async () => {
            await createProduct(product);
            await productStore.update();
            await sellerStore.update();
        }">
            <h3>Produit</h3>
            <div>
                <input id="product_name" type="text" v-model="product.nom" autocomplete="off"/>
                <label for="product_name">Nom</label>
            </div>
            <div>
                <textarea id="description" rows="2" v-model="product.description"></textarea>
                <label for="description">Description</label>
            </div>
            <div>
                <input id="price" type="number" v-model="product.prix" />
                <label for="price">Prix d'achat</label>
            </div>
            <div>
                <input id="product_categorie" type="text" v-model="product.categorie" list="categories-list" autocomplete="off"/>
                <label for="product_categorie">Nom de la catégorie</label>

                <datalist id="categories-list">
                    <option v-for="categorie in productStore.categories" :value="categorie.nom"></option>
                </datalist>
            </div>
            <div>
                <input id="product_seller" list="seller-list" type="text" v-model="product.revendeur" autocomplete="off"/>
                <label for="product_seller">Nom du revendeur</label>
                <datalist id="seller-list">
                    <option v-for="seller in sellerStore.sellers" :value="seller.nom"></option>
                </datalist>
            </div>
            <button>Créer</button>
        </form>
    </div>
</template>
