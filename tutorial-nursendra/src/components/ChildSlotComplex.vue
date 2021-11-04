<template>
    <div>
        <div>Data : {{ message==='L'? 'Laki-Laki': 'Perempuan' }} </div>
        <div>Deskripsi : <slot default :data="content" /> ==> {{ getContent }} </div>
        <div><v-text-field label="cek perubahan di hasil" v-model="content" > </v-text-field></div>
        {{ contentHasil }}
        
        <!-- <div :class="status ? 'success': 'failed' ">STATUS</div> -->
        <div :class="status ? 'berhasil': [boldClass, redClass] ">STATUS</div>
        <v-btn @click="status = !status">Rubah</v-btn>
    </div>
</template>

<script>
export default {
    props: {
        message: String,
    },
    data() {
        return {
            content: '', 
            contentHasil: 'content hasil',
            
            status: false,
            boldClass: 'bold',
            redClass: 'failed'
        }
    },
    computed: {
        getContent : function() {
            if (this.message ==="L"){
                return "Laki-laki";
            }else {
                return "Perempuan"
            }
        }        
    },

    //It's hanya mengawasi 
    watch: {
        content : function(val) {
            this.contentHasil = `Hasilnya: ${val}`
            console.log(val)
        }
    }
    
}
</script>

<style scoped>
    .berhasil {
        color: green
    }
    .failed {
        color: red
    }
    .bold {
        font-weight: 900;
    }
</style>