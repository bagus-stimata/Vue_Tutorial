<template>
  <div id="app">
    <TheNavigation/>

    <router-view/>

  </div>
</template>

<script>


import TheNavigation from "./components/TheNavigation";
export default {
  name: 'App',
  components: {TheNavigation},
  data: () => ({
    //
  }),
};
</script>
