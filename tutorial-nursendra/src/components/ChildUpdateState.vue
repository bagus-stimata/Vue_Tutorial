<template>
    <div>
        <!-- <input label="This is on Child"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"/> -->

        <!-- <v-text-field label="This is on Child"
            :value="myModelValue_FromParent"
            @input="$emit('update:myModelValue_fromChild', $event)"/> -->

        <v-text-field label="Cara yang kedua"
            :value="myModelValue_FromParent"
            v-model="something" />

    </div>    
</template>


<script>
export default {
    props: [
        "myModelValue_fromChild"
    ],
    computed: {
        something: {
            get() {
                return this.myModelValue_fromChild
            },
            set(value) {
                this.$emit('update:myModelValue_fromChild', value)
            }
        }
    }
   
    
}
</script>