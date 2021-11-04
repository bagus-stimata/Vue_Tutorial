<template>
    <div>
        {{huruf}}
        <slot default :data="title"/>
        <div>-----------------------</div>
        
        <div>Content</div>
        <slot name="slotDua" :data="content"/>

        
        <div>Footer</div>
        <slot name="slotTiga" :data="footer" />

        <div>-----------------------</div>
        <slot name="default" />
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
            title: '**Ini adalah title**',
            content: '##Ini adalah content##',
            footer: '##Ini adalah footer##',
        }
    }

}
</script>
