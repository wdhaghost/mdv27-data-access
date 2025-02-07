<script setup lang="js">
import { defineProps } from "vue";
import GamEZReadComponent from './GamEZReadComponent.vue';
import MedidoncReadComponent from './MedidoncReadComponent.vue';
import SportSalutReadComponent from './SportSalutReadComponent.vue';
import SystemeCentraleReadComponent from './SystemeCentraleReadComponent.vue';
const props = defineProps(["dbType"])
</script>

<template>
    <div class="main">
        <SystemeCentraleReadComponent v-if="dbType === 'systeme-central'" />
        <MedidoncReadComponent v-if="dbType === 'medidonc'" />
        <SportSalutReadComponent v-if="dbType === 'sport-salut'" />
        <GamEZReadComponent v-if="dbType === 'gamEZ'" />
    </div>
</template>

<style>
li {
    list-style: none;
}

span {
    text-decoration: underline;
}
</style>
