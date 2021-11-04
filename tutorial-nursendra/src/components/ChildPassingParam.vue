<template>
    <div>
        <v-btn @click="tekanTombol">Tombol Child ke Parent</v-btn>
        <div> Hasil yang ada pada Child: {{ hasil }} </div>
    </div>
</template>

<script>
export default {
    // emits: ["penekanan-child"],
    data() {
        return {
            hasil: 0,
        }
    },
    methods: {
        tekanTombol: function(){
            this.$emit('penekanan-child', 'nilai bos dianter')
        },
        ditekanDariParent() {
            this.hasil++
        }
        
    }
    
}
</script>