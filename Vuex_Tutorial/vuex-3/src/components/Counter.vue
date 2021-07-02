<template>
    <div>
        {{ propPesan }}
    </div>
     <div class="counter"
        :style="{color: $store.state.colorCode}">
        {{ $store.state.counter }}
    </div>
</template>

<script>
    export default {   
        name: 'PenggunaCounter',
        props: {
            propPesan: String
        },
        data() {

        },
        computed: {

        },
        mothods: {

        },
        components:{

        }

    }
</script>