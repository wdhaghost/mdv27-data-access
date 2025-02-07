<script setup lang="js">
import { useProductStore } from "@/stores/StoreProducts";
import { useSellerStore } from "@/stores/StoreSellers";
import { onMounted } from "vue"
const productStore = useProductStore();
const sellerStore = useSellerStore();
onMounted(async ()=>{
    await productStore.update();
    await sellerStore.update();
})
</script>
<template>
    <div class="products">
        <h3>Produits :</h3>
        <ul v-for="product in productStore.products">
            <li><span>Id :</span> {{ product.produits_id }}</li>
            <li><span>nom : </span>{{ product.nom }}</li>
            <li><span>description :</span> {{ product.description }}</li>
            <li><span>prix :</span> {{ product.prix_achat }}</li>
            <li><span>statut :</span> {{ (product.statut) ? "disponible" : "non disponible" }}</li>
            <li><span>date de création :</span> {{ product.date_creation }}</li>
            <li><span>date de modification : </span> {{ product.date_modification }}</li>
        </ul>
    </div>
    <hr>
    <div class="sellers">
        <h3>Revendeurs :</h3>
        <ul v-for="seller in sellerStore.sellers">
            <li><span>Id de revendeur :</span>{{ seller.revendeurs_id }}</li>
            <li><span>nom :</span>{{ seller.nom }}</li>
            <li><span>date de création :</span>{{ seller.date_creation }}</li>
        </ul>
    </div>
    <hr>
    <div class="categories">
        <h3>Catégories :</h3>
        <ul v-for="categorie in productStore.categories">
            <li><span>Id :</span>{{ categorie.categories_id }}</li>
            <li><span>Nom :</span>{{ categorie.nom }}</li>
            <li><span>Date de création :</span>{{ categorie.date_creation }}</li>
        </ul>
    </div>
</template>

<style scoped>
h3 {
    min-width: 125px;
}

div {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
}

ul {
    min-width: 200px;
}

</style>