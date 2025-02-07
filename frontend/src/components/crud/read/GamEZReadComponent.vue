<script setup lang="js">
import { useGamezStore } from '@/stores/gamez/StoreGamez';
const gamezStore = useGamezStore();

</script>
<template>
    <ul v-for="result in gamezStore.results">
        <li><span>Nom du produit :</span> {{ result.product.product_name }}</li>
        <li><span>Description :</span>{{ result.product.product_description }}</li>
        <li><span>Prix : </span>{{ result.product.product_price }}</li>
        <li><span>Status : </span>{{ result.product.product_status }}</li>
        <li><span>Catégorie : </span>{{ result.product.product_type }}</li>

        <li><span>Nom du revendeur : </span>{{ result.seller.seller_name }}</li>
        <li><span>Date de création du revendeur : </span>{{ result.seller.creation_date }}</li>
        <hr>
    </ul>
</template>