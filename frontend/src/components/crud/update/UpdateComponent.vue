<script setup lang="js">
import { ref } from "vue";
import { updateProduct } from '@/fetch/ProductRequest';
import { updateSeller } from "@/fetch/SellerRequest";
import { useProductStore } from "@/stores/StoreProducts";
import { useSellerStore } from "@/stores/StoreSellers";

const productStore = useProductStore();
const sellerStore = useSellerStore();

const product = ref({
    id: 0,
    nom: "",
    description: "",
    prix: 0,
    statut: 1
});

const seller = ref({
    id: 0,
    name: "",
});

</script>

<template>
    <div class="main">
        <h2>Mettre à jour</h2>
        <form @submit.prevent="async () => {
             await updateProduct(product); 
             await productStore.update();
             }">
            <h3>Produit</h3>
            <div>
                <input id="product_id" type="number" v-model="product.id" @input="(input)=>{
                    const storeProducts = productStore.products;
                    const detectedProduct = storeProducts.find(p => p.produits_id == input.target.value);
                    if(detectedProduct){
                        product.nom = detectedProduct.nom;
                        product.description = detectedProduct.description;
                        product.prix = detectedProduct.prix_achat;
                        product.statut = detectedProduct.statut;
                    }
                }"/>
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
                    <option value="1">Disponible</option>
                    <option value="0">Non disponible</option>
                </select>
                <label for="statut">Statut</label>
            </div>
            <button>Modifier</button>
        </form>

        <form @submit.prevent="async () => {
            await updateSeller(seller);
            await sellerStore.update();
        }">
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