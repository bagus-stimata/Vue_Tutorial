<template>
    <!-- {{ pesan }} -->
    <div>
        {{ user.userName }}
        <br>
        {{ fullName }}
    </div>

</template>

<script lang='js'>
  export default {
      name: 'ThisIsTheNameForWhat',
      props: {
		pesan: String
    },
    data(){
        return {
            isLoading: false,
            user: {
                userName: '_bagus',
                fistName: 'bagus',
                lastName: 'Winarno',
                isAdmin: true                
            }
        }
    },
    computed: {
        fullName() {
            return  `${this.user}  ${this.user.lastName}`;          
        }
    },
  }


</script>

