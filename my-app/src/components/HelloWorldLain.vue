<template>
  <div class="sembarang">
    <span>{{ pesanbos }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorldLain extends Vue{
  @Prop() private pesanbos!: string;
}

</script>
