<script setup lang="js">
import { ref } from "vue";
import { createProduct } from '@/fetch/ProductRequest';
import { createSeller } from "@/fetch/SellerRequest";
import { useSellerStore } from "@/stores/StoreSellers";
import { useProductStore } from "@/stores/StoreProducts";
const productStore = useProductStore();
const sellerStore = useSellerStore();
const product = ref({
    nom: "",
    description: "",
    prix: 0,
    categorie: "",
    revendeur: ""
});

const seller = ref({
    name: "",
});
</script>

<template>
    <div class="main">
        <h2>Créer un produit</h2>
        <form @submit.prevent="async () => {
            await createProduct(product);
            await productStore.update();
        }">
            <h3>Produit</h3>
            <div>
                <input id="product_name" type="text" v-model="product.nom" />
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
                <input id="product_categorie" type="text" v-model="product.categorie" list="categories-list"/>
                <label for="product_categorie">Nom de la catégorie</label>

                <datalist id="categories-list">
                    <option v-for="categorie in productStore.categories" :value="categorie.nom"></option>
                </datalist>
            </div>
            <div>
                <input id="product_seller" type="text" v-model="product.revendeur" />
                <label for="product_seller">Nom du revendeur</label>
            </div>
            <button>Créer</button>
        </form>

        <form @submit.prevent="async () => {
            await createSeller(seller);
            await sellerStore.update();
        }">
            <h3>Revendeur</h3>
            <div>
                <input id="seller_name" type="text" v-model="seller.name" />
                <label for="seller_name">Nom</label>
            </div>
            <button>Créer</button>
        </form>
    </div>
</template>
