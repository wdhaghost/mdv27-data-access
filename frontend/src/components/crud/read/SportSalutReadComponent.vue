<script setup lang="js">
import { useSportSalutStore } from '@/stores/sport-salut/StoreSportSalut';
import { onMounted } from 'vue';
const storeSportSalut = useSportSalutStore();

onMounted(async ()=>{
    await storeSportSalut.update();
    console.log(storeSportSalut.products)
})
</script>

<template>
    <button @click="async ()=>{
        await storeSportSalut.update();
    }">Rafraîchir</button>
    <ul v-for="product in storeSportSalut.products">
        <li><span>Nom du produit :</span>{{ product.nom_produit }}</li>
        <li><span>Description du produit :</span>{{ product.description_produit }}</li>
        <li><span>Nom du fournisseur :</span>{{ product.nom_fournisseur }}</li>
        <li><span>Stock :</span>{{ product.en_stock }}</li>
        <li><span>Prix :</span>{{ product.prix }}</li>
        <hr>
    </ul>
</template>