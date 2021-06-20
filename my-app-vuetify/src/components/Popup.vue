<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add New Project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Tambah Project
        </v-card-title>

        <v-card-text class="px-6">
            <v-form
             ref="form" lazy-validation>
                <v-text-field label="Title" v-model="title" :rules="titleRules" prepend-icon="mdi-folder"></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>

               <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                max-width="290"
                >               
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                    :value="due"
                    clearable
                    label="Tanggal Project"
                    readonly
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    @click:clear="date = null"
                    ></v-text-field>
                </template>
                <v-date-picker
                    v-model="due"
                    :rules="dateRules"
                    @change="menu2 = false"
                ></v-date-picker>
                </v-menu>

            </v-form>
        </v-card-text>


        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="validateAndSubmit"
          >
            <v-icon>mdi-plus</v-icon>
            <span>Add Project</span>            
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import moment from 'moment'
  import { format, parseISO } from 'date-fns'

  export default {
    data: () => ({
      // https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments
      date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
      menu1: false,
      menu2: false,
      dialog: false,
      title: '',
      content: '',
      due: null,
      titleRules: [
        v => !!v || 'Tidak boleh kosong',
        v => v.length <= 10 || 'panjang maximal 10 characters',
      ]
    }),
    methods: {
        validateAndSubmit() {
            if (this.$refs.form.validate() ) {
                this.dialog = false
            }
            console.log(this.title, this.content, this.due)
        }
    },
    computed: {
      computedDateFormattedMomentjs () {
        return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
      },
      computedDateFormattedDatefns () {
        return this.date ? format(parseISO(this.date), 'EEEE, MMMM do yyyy') : ''
      },
    },

  }
</script>