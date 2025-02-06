<script setup lang="js">
import { ref } from "vue";
import { createProduct } from '@/fetch/ProductRequest';
import { createSeller } from "@/fetch/SellerRequest";
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
        <form @submit.prevent="async () => { await createProduct(product.value); }">
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
                <input id="product_categorie" type="text" v-model="product.categorie" />
                <label for="product_categorie">Nom de la catégorie</label>
            </div>
            <div>
                <input id="product_seller" type="text" v-model="product.revendeur" />
                <label for="product_seller">Nom du revendeur</label>
            </div>
            <button>Créer</button>
        </form>

        <form @submit.prevent="async () => { await createSeller(seller.value); }">
            <h3>Revendeur</h3>
            <div>
                <input id="seller_name" type="text" v-model="seller.name"/>
                <label for="seller_name">Nom</label>
            </div>
            <button>Créer</button>
        </form>
    </div>
</template>
