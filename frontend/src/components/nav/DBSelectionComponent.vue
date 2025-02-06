<script setup lang="js">
import { defineModel } from "vue";
const dbType = defineModel("dbType");
</script>

<template>
    <nav>
        <ul>
            <li>
                <input id="systeme-central" v-model="dbType" type="radio" value="systeme-central" />
                <label for="systeme-central">Système central</label>
            </li>
            <li>
                <input id="sport-salut" type="radio" v-model="dbType" value="sport-salut" />
                <label for="sport-salut">Sport salut</label>
            </li>
            <li>
                <input id="gamEZ" type="radio" v-model="dbType" value="gamEZ" />
                <label for="gamEZ">GameEz</label>
            </li>
            <li>
                <input id="medidonc" type="radio" v-model="dbType" value="medidonc" />
                <label for="medidonc">Medidonc</label>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

nav li {
    margin-left: 2em;
}
nav li:hover{
    cursor: pointer;
    scale: 1.1;
    transition: 250ms;
    text-decoration: underline;
}

input[type="radio"] {
    display: none;
}

input[type="radio"]:checked+label {
    text-decoration: underline;
}
</style>