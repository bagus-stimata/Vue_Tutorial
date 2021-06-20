<template>
    <div>
        <h1  id="my-style">Hello World</h1>
        <HelloWorldJs pesan="asasdfd" />
    </div>
</template>

<script lang='js'>
import HelloWorldJs from '@/components/HelloWorldJs.vue';

export default {
    name: 'MyNewPage',
    components: {
        HelloWorldJs
    }
}
</script>
