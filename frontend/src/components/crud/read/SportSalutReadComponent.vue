<script setup lang="js">
const products = [];
</script>

<template>
    <ul v-for="product in products">
        <li><span>Nom du produit :</span>{{ product.nom_produit }}</li>
        <li><span>Description du produit :</span>{{ product.description_produit }}</li>
        <li><span>Nom du fournisseur :</span>{{ product.nom_fournisseur }}</li>
        <li><span>Stock :</span>{{ product.en_stock }}</li>
        <li><span>Prix :</span>{{ product.prix }}</li>
        <hr>
    </ul>
</template>