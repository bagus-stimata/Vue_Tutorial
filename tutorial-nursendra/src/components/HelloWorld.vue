<template>
  <v-container>
    

    <v-container grid-list-xl>      
      <my-image-input v-model="avatar">
        <div slot="activator">
          <v-avatar size="150px" v-ripple v-if="!avatar" class="grey lighten-3 mb-3">
            <span>Click to add avatar</span>
          </v-avatar>
          
          <v-avatar size="150px" v-ripple v-else class="mb-3">
            <img :src="avatar.imageURL" alt="avatar">
          </v-avatar>

          <!-- <v-img size="150px" v-ripple v-else class="mb-3">
            <img :src="avatar.imageURL" alt="avatar">
          </v-img> -->

        </div>
      </my-image-input>

      <v-slide-x-transition>
        <div v-if="avatar && avatarSaved == false">
          <v-btn class="primary" @click="uploadImage" :loading="avatarSaving">Save Avatar</v-btn>
        </div>
      </v-slide-x-transition>
    </v-container>

  </v-container>
</template>

<script>
  import axios from 'axios'
  import ImageInput from '@/components/ImageInput.vue'

  export default {
    name: 'HelloWorld',

    data: () => ({
      avatar: 'dummyName',
      avatarSaving: false,
      avatarSaved: false

    }),
  
  components: {
    myImageInput: ImageInput
  },  
  watch:{
    avatar: {
      handler: function(newValue, oldValue) {
        this.avatarSaved = false
        if (oldValue==='dummyName'){
          this.avatarSaved = true          
        }
        console.log(`${newValue} and ${oldValue}`)
      },

      deep: true
    }
  },    

    methods: {
      onPickFile(){
        this.$refs.fileInput.click()
      },
      onFilePicked(event){
          const files = event.target.files
          // console.log(files)
          let filename = files[0].name
          console.log(filename)
          if (filename.lastIndexOf('.') <= 0){
            return alert('Please add a valid file!')
          }
          const fileReader = new FileReader()
          fileReader.addEventListener('load', () => {
            this.imageUrl = fileReader.result
          })
          fileReader.readAsDataURL(files[0])
          this.image = files[0]
      },
      async sendFile(){
        const formData = new FormData()
        formData.append('file', this.image)
        await axios
                .post('http://localhost:8080/rest/upload', formData)
                .then(response =>{
                    console.log(response.data)
                }).catch(error => {
                    console.log(error)
                })
      },

      uploadImage() {
        this.avatarSaving = true
        setTimeout(() => this.avatarSavedAvatar(), 1000) 
      },
      async avatarSavedAvatar() {
        this.avatarSaving = false
        this.avatarSaved = true          
        await axios
                .post('http://localhost:8080/rest/upload', this.avatar.formData)
                .then(response =>{
                    console.log(response.data)
                }).catch(error => {
                    console.log(error)
                })
        
      }
    },

    mounted() {
      this.avatarSaved = true
      this.avatar = {
        imageURL : "http://localhost:8080/rest/files/aa.png"
      }
      this.avatarSaved = true
      this.avatar =null


    }
  
  }
</script>
