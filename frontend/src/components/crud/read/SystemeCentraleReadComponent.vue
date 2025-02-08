<script setup lang="js">
import { updateProduct } from "@/fetch/ProductRequest";
import { deleteSeller, updateSeller } from "@/fetch/SellerRequest";
import { useProductStore } from "@/stores/systeme-centrale/StoreProducts";
import { useSellerStore } from "@/stores/systeme-centrale/StoreSellers";
import { onMounted } from "vue"
const productStore = useProductStore();
const sellerStore = useSellerStore();

onMounted(async () => {
    await productStore.update();
    await sellerStore.update();
});


async function callbackUpdateSeller(seller) {
    const sellerUpdate = { id: seller.revendeurs_id, name: seller.nom };
    await updateSeller(sellerUpdate);
    await sellerStore.update();
    await productStore.update();
}

async function callbackUpdateProduct(product) {
    const productUpdate = {
        id: product.produits_id,
        nom: product.nom,
        description: product.description,
        prix: product.prix_achat,
        statut: product.statut
    };
    await updateProduct(productUpdate);
    await productStore.update();
}

async function callbackDeleteSeller(seller) {
    const sellerToDelete = { id: seller.revendeurs_id }
    await deleteSeller(sellerToDelete);
    productStore.update();
    sellerStore.update();
}

</script>
<template>

    <div class="products">
        <h3>Produits :</h3>
        <ul v-for="product in productStore.products">
            <li><span>Id :</span> {{ product.produits_id }}</li>
            <li><span>nom :</span> <input type="text" v-model="product.nom" /></li>
            <li><span>description :</span> <textarea v-model="product.description" rows="1"></textarea></li>
            <li><span>prix :</span> <input type="number" v-model="product.prix_achat" /> </li>
            <li><span>statut :</span> <select v-model="product.statut">
                    <option value="1">disponible</option>
                    <option value="0">Indisponible</option>
                </select></li>
            <li><span>date de création :</span> {{ product.date_creation }}</li>
            <li><span>date de modification :</span> {{ product.date_modification }}</li>
            <li>
                <img @click="async () => { await callbackUpdateProduct(product); }" src="@/assets/bouton-modifier.png" alt="modifier" />
            </li>
        </ul>
    </div>

    <hr>

    <div class="sellers">
        <h3>Revendeurs :</h3>
        <ul v-for="seller in sellerStore.sellers">
            <li><span>Id de revendeur :</span>{{ seller.revendeurs_id }}</li>
            <li><span>nom :</span> <input type="text" v-model="seller.nom" /></li>
            <li><span>date de création :</span>{{ seller.date_creation }}</li>
            <li>
                <img @click="async () => { await callbackUpdateSeller(seller) }" src="@/assets/bouton-modifier.png" alt="modifier" />
            </li>
            <li>
                <img @click="async () => { await callbackDeleteSeller(seller) }" src="@/assets/supprimer.png" alt="supprimer" />
            </li>
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
input,
textarea {
    width: 100px;
}

h3 {
    min-width: 125px;
}

div {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
}

ul {
    min-width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

li {
    margin: 0.5em;
    display: flex;
    flex-direction: row;
    align-items: center;
}

li * {
    margin: 0.25em;
}

img {
    width: 20px;
    height: 20px;
}

img:hover {
    scale: 1.2;
    cursor: pointer;
}
</style>