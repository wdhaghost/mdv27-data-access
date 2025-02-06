<script setup lang="js">
import { ref } from "vue";
import { updateProduct } from '@/fetch/ProductRequest';
import { updateSeller } from "@/fetch/SellerRequest";
const product = ref({
    id: 0,
    nom: "",
    description: "",
    prix: 0,
    statut: "available"
});

const seller = ref({
    id: 0,
    name: "",
});
</script>

<template>
    <div class="main">
        <h2>Mettre à jour</h2>
        <form @submit.prevent="async () => {await updateProduct(product.value); }">
            <h3>Produit</h3>
            <div>
                <input id="product_id" type ="number" v-model="product.id" />
                <label for="product_id">Id</label>
            </div>
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
                <select id="statut" v-model="product.statut">
                    <option value="available">Disponible</option>
                    <option value="unavailable">Non disponible</option>
                </select>
                <label for="statut">Statut</label>
            </div>
            <button>Modifier</button>
        </form>

        <form @submit.prevent="async () => {await updateSeller(seller.value); }">
            <h3>Revendeur</h3>
            <div>
                <input id="seller_id" type="number" v-model="seller.id" />
                <label for="seller_id">Id</label>
            </div>
            <div>
                <input id="seller_name" type="text" v-model="seller.name" />
                <label for="seller_name">Nom</label>
            </div>
            <button>Modifier</button>
        </form>
    </div>
</template>