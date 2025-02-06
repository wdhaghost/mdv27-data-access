<script setup lang="js">
const products = [
    { name: "test", description: "test", price: 10, status: "available", categorie: "jeux video", },
    { name: "test2", description: "test2", price: 12, status: "available", categorie: "jeux video", },
    { name: "test", description: "test", price: 10, status: "available", categorie: "jeux video", },
    { name: "test2", description: "test2", price: 12, status: "available", categorie: "jeux video", },
    { name: "test", description: "test", price: 10, status: "available", categorie: "jeux video", },
    { name: "test2", description: "test2", price: 12, status: "available", categorie: "jeux video", },
    { name: "test", description: "test", price: 10, status: "available", categorie: "jeux video", },
    { name: "test2", description: "test2", price: 12, status: "available", categorie: "jeux video", },
    { name: "test", description: "test", price: 10, status: "available", categorie: "jeux video", },
    { name: "test2", description: "test2", price: 12, status: "available", categorie: "jeux video", },
    { name: "test", description: "test", price: 10, status: "available", categorie: "jeux video", },
    { name: "test", description: "test", price: 10, status: "available", categorie: "jeux video", },
    { name: "test", description: "test", price: 10, status: "available", categorie: "jeux video", },
    { name: "test2", description: "test2", price: 12, status: "available", categorie: "jeux video", },
    { name: "test2", description: "test2", price: 12, status: "available", categorie: "jeux video", },
    { name: "test2", description: "test2", price: 12, status: "available", categorie: "jeux video", },
];

const sellers = [{ name: "roger", creation_date: Date.now() }, { name: "rémi", creation_date: Date.now() }];
</script>
<template>
    <div class="products">
        <h3>Produits :</h3>
        <ul v-for="product in products">
            <li><span>nom : </span>{{ product.name }}</li>
            <li><span>description :</span> {{ product.description }}</li>
            <li><span>prix :</span> {{ product.price }}</li>
            <li><span>statut :</span> {{ product.status }}</li>
            <li><span>catégorie :</span> {{ product.categorie }}</li>
        </ul>
    </div>
    <hr>
    <div class="sellers">
        <h3>Revendeurs :</h3>
        <ul v-for="seller in sellers">
            <li><span>nom :</span>{{ seller.name }}</li>
            <li><span>date de création :</span>{{ seller.creation_date }}</li>
        </ul>
    </div>
</template>

<style scoped>
h3 {
    min-width: 100px;
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