<template>
    <div>
        <h5>DEMO MENGGUNAKAN COMPONENT GLOBAL, BIASA DIPAKAI ALERT</h5>
        <slot default :data="globalTitle"/>
    </div>
</template>


<script>
export default {
    props:{
        angka: Number,
        huruf: String,
    },
    data() {
        return {
            globalTitle: '** GLOBAL TITLE **',
        }
    }

}
</script>