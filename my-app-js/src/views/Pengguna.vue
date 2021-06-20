<template>
 
    <!-- <div class="counter"
    :style="{color: $store.state.colorCode}">
        {{ $store.state.counter }}
    </div> -->
    <!-- <div class="counter"
        :style="{color: colorCode}">
        {{ $store.state.counter }}
    </div> -->
    <counter propPesan = "Pesan Untuk Component Counter (sebelum menggunakan Vuex)" />

    <!-- <div class="counter-squered">
        {{ $store.state.counter }}
        <sup>2</sup>
        = {{ $store.getters.counterSquared }}
    </div> -->
    <CounterSquare/>

    <div class="buttons">
        <button @click="$store.dispatch('decreaseCounter')">-</button>
        <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
    <div>
        <!-- <input v-model="$store.state.colorCode" type="text" placeholder="kode warna"/> -->
        <input v-model="colorCode" type="text" placeholder="kode warna"/>
    </div>

</template>

<script>
    import CounterSquare from '@/components/CounterSquare.vue';

    export default {
        name: 'Pengguna',
        data() {

        },
        computed: {
            colorCode: {
                get(){
                    return this.$store.state.colorCode
                },
                set(newValue){
                    this.$store.commit('setColorCode', newValue)
                }
            }
        },
        methods: {

        },
        components:{
            'counter': require('@/components/Counter.vue').default,   
            // 'counterSquare': require('@/components/CounterSquare.vue').default         
            CounterSquare
        }
    }
</script>

<style scoped>
    div {
        margin-bottom: 10px;
    }
    .counter{
        font-size: 80px;
    }
    .buttons button {
        font-size: 40px;
        width: 100px;
        margin: 0 10px;
    }
</style>