<template>

  <div class="home">
    <HelloWorld />
    <!-- <EmployeeTable /> -->
  </div>


</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
// import EmployeeTable from '@/components/EmployeeTable.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
    // ,
    // EmployeeTable
  }
}
</script>
