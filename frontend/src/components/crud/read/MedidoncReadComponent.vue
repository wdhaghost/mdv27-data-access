<script setup lang="js">
const products = [];
</script>

<template>
    <ul v-for="product in products">
        <li><span>Nom du produit :</span> {{ product.p_name }}</li>
        <li><span>Description :</span>{{ product.p_description }}</li>
        <li><span>Date de dernière MAJ :</span>{{ product.p_last_update }}</li>
        <li><span>Statut :</span>{{ product.p_status }}</li>
        <li><span>Id du revendeur :</span>{{ product.p_seller.id }}</li>
        <li><span>Nom du revendeur :</span>{{ product.p_seller.name }}</li>
        <li><span>Date de création du revendeur :</span>{{ product.p_seller.creation_date }}</li>
        <hr>
    </ul>
</template>