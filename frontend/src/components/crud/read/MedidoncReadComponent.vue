<script setup lang="js">
import { useMedidoncStore } from '@/stores/medidonc/StoreMedidonc';
import { onMounted } from 'vue';
const storeMedidonc = useMedidoncStore();

onMounted(async ()=>{
    await storeMedidonc.update();
})
</script>

<template>
    <button @click="async ()=>{
        await storeMedidonc.update();
    }">Rafraîchir</button>
    <ul v-for="product in storeMedidonc.products">
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