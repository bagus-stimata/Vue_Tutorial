<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <h1>{{ $store.state.counter}} </h1>
    <h1> Hello {{ joke }}</h1>

    <v-row>
      <v-col>
        <v-btn
        color="primary"
        @click="test"
        >
          Tambah Dua
        </v-btn>

      </v-col>
    </v-row>

    <div class="buttons">
      <v-btn @click="$store.commit('increaseCounter')">Plus</v-btn>
      <v-btn @click="$store.commit('decreaseCounter')">Minus</v-btn>
    </div>
    <div class="buttons">
      <v-btn @click="$store.dispatch('increaseCounterDispatch')">Plus</v-btn>
      <v-btn @click="$store.dispatch('decreaseCounterDispatch')">Minus</v-btn>
    </div>
    <div class="buttons">
      <v-btn @click="increaseCounterMethod">Plus</v-btn>
      <v-btn @click="decreaseCounterMethod">Minus</v-btn>
    </div>

  </div>
</template>

<script>
export default {
  data() {
      return {
        joke: 'Ada saja'
      }
  },
  mounted(){
    this.$store.mutations.setCurrentJoke('aku')
    this.joke = this.$store.getters.currentJoke
  },
  methods: {
    increaseCounterMethod() {
      this.$store.commit('increaseCounter')
    },
    decreaseCounterMethod() {
      this.$store.dispatch('decreaseCounterDispatch')
    }

  }
  
}
</script>
