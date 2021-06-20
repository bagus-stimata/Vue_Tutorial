<template>
  <v-app>
    <div class="grey lighten-4"> 
      <Navbar />
      <v-content class="mx-4 mb-4">
        <router-view/>
      </v-content>
    </div>

  </v-app>

</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Navbar
  }
};
</script>
