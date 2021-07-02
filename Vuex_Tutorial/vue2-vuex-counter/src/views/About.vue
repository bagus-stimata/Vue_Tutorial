<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ $store.state.counter}} </h2>
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
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      $store.mutations.
      console.log("Hello World");
    }
  }
  
}
</script>
