<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <HelloWorld pesan="Pesan dari saja aja"/>

    <HelloWorldLain pesanbos = "Ini pesan dari bos tapi kecil"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import HelloWorldLain from '@/components/HelloWorldLain.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld, HelloWorldLain
  },
})
export default class Home extends Vue {}
</script>
