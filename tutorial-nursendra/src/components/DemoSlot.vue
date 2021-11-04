<template>
  <v-container>


    <h1>Demo Parsing message Parent-Child menggunakan Ref</h1> 
    <child-passing-param ref="refChildComponent" @penekanan-child="dariChild"></child-passing-param>
    <div> Hasil yang berada pada Parent: {{ hasil_di_parent }} </div>

    <v-btn @click="eksekusiChildMethod">Eksekusi pada Child Method</v-btn>
    <!-- <child-passing-param ref="refChildComponent"></child-passing-param> -->

    <hr>
    <h1>Demo Update State Parent-Child</h1>
      {{message}}

      <child-update-state
        :myModelValue_FromParent="message"
        @update:myModelValue_fromChild="message=$event"
      >
      </child-update-state>     

    <!-- Dibawah hanya berlaku untuk vue3 -->
      <!-- <child-update-state v-model="message" />  -->

    <hr>
    <h1>DEMO MENGGUNAKAN SLOT</h1>
    <child-slot huruf="adalah sesuatu">
      JUDUL: Ini akan disisipkan kedalam slot default oke

      <template v-slot:default="{ data }">
        <span>{{ data }}</span> ----> Lihat perbedaanya dengan dibawah
      </template>

      <template v-slot:slotDua="{ dataOke }">
        <b><span>Ini slot dua ==> {{ dataOke }}</span></b>
      </template>

      <template v-slot:slotTiga="{ data }">
        <span>Ini malah slot TIGA ==> {{ data }}</span>
      </template>
    </child-slot>    

    
    <ChildSlotGlobal>
      <template v-slot:default="{ data }">
          <span><b>{{ data }} </b></span>
      </template>
    </ChildSlotGlobal>    
    <child-slot-global/>

    <child-slot-complex message="L">
      <template v-slot:default="{ data }">
        {{data}}
      </template>      
    </child-slot-complex>

  </v-container>
</template>

<script>
import ChildPassingParam from './ChildPassingParam.vue'
import ChildSlot from './ChildSlot.vue'
import ChildSlotComplex from './ChildSlotComplex.vue'
import ChildSlotGlobal from './ChildSlotGlobal.vue'
import ChildUpdateState from './ChildUpdateState.vue'
export default {
  components: { ChildSlot, ChildSlotGlobal, ChildSlotComplex, ChildPassingParam, ChildUpdateState },
  data() {
    return {
      hasil_di_parent: 0,
      message: 'message from parent',
    }    
  },
  methods: {
    dariChild(val) {
      this.hasil_di_parent++
      console.log(`hello ${val}`)
    },
    eksekusiChildMethod() {
      this.$refs.refChildComponent.ditekanDariParent() 
    }
  }
  
}
</script>,
    ChildPassingParam