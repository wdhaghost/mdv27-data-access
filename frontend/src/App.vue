<script setup lang="js">
import { ref } from "vue";
import DBSelectionComponent from "@/components/nav/DBSelectionComponent.vue";
import CreateComponent from "./components/crud/create/CreateComponent.vue";
import UpdateComponent from "./components/crud/update/UpdateComponent.vue";
import ReadComponent from "./components/crud/read/ReadComponent.vue";
import DeleteComponent from "./components/crud/delete/DeleteComponent.vue";

const dbType = ref("systeme-central");

</script>

<template>
  <header>
    <DBSelectionComponent v-model:dbType="dbType"/>
  </header>

  <main>
    <section class="CRUD" v-if="dbType === 'systeme-central'">
      <CreateComponent/>
      <UpdateComponent/>
      <DeleteComponent/>  
    </section>

    <section>
      <h2>Données :</h2>
      <ReadComponent :dbType="dbType"/>
    </section>


  </main>
</template>

<style>
.main {
    border: 1px solid black;
    margin: 1em;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.main *{
  margin: 0.5em;
}
.CRUD{
  display:flex;
  flex-direction: row;
  justify-content: center;  
}

</style>
