<script setup lang="js">
const results = [
    {
        product: { product_name: "produit1", product_description: "description", product_price: 10, product_status: "available", product_type: "jeux vidéo" },
        seller: { seller_name: "bernard", creation_date: Date.now() }
    },
    {
        product: { product_name: "produit1", product_description: "description", product_price: 10, product_status: "available", product_type: "jeux vidéo" },
        seller: { seller_name: "bernard", creation_date: Date.now() }
    },
    {
        product: { product_name: "produit1", product_description: "description", product_price: 10, product_status: "available", product_type: "jeux vidéo" },
        seller: { seller_name: "bernard", creation_date: Date.now() }
    },
    {
        product: { product_name: "produit1", product_description: "description", product_price: 10, product_status: "available", product_type: "jeux vidéo" },
        seller: { seller_name: "bernard", creation_date: Date.now() }
    },
    {
        product: { product_name: "produit1", product_description: "description", product_price: 10, product_status: "available", product_type: "jeux vidéo" },
        seller: { seller_name: "bernard", creation_date: Date.now() }
    },
    {
        product: { product_name: "produit1", product_description: "description", product_price: 10, product_status: "available", product_type: "jeux vidéo" },
        seller: { seller_name: "bernard", creation_date: Date.now() }
    }
];
</script>
<template>
    <ul v-for="result in results">
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