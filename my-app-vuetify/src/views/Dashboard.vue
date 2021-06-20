<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <!-- <v-container fluid class="my-5">      
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn outline block class="primary">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="primary">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="primary">3</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="primary">4</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-space-around>
        <v-flex xs4 md3>
          <v-btn outline block class="success">1</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outline block class="success">2</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layaout>
        <v-flex>
          <v-btn block class="primary">1</v-btn>
        </v-flex>
      </v-layaout>
    </v-container> -->

  <v-container class="my-5">
   


    <v-layout row class="ma-3">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn small plain color="grey" @click="sortBy('title')"
            v-bind="attrs" v-on="on">
            <v-icon left>mdi-folder</v-icon>
            By Project name
          </v-btn>
        </template>
        <span>Sort By Project Name</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn small plain color="grey" @click="sortBy('person')"
          v-bind="attrs" v-on="on">
            <v-icon left>mdi-account</v-icon>
            By Project person
          </v-btn>
        </template>
        <span>Sort By Person</span>
      </v-tooltip>

    </v-layout>

     <v-card flat v-for="project in projects" :key="project.id">
        <!-- <v-layout row wrap :class="`pa-3 project complete`"> untuk style bos-->
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <!-- <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div>{{project.status}}</div>
          </v-flex> -->
          <v-flex xs2 sm4 md2>
            <div class="text-center">
              <v-chip v-if="project.status===`complete`" color="#3CD1C2" small> {{ project.status }} </v-chip>
              <v-chip v-else-if="project.status===`ongoing`" color="orange" small> {{ project.status }} </v-chip>
              <v-chip v-else-if="project.status===`overdue`" color="red lighten" small> {{ project.status }} </v-chip>
              <v-chip  v-else small> {{ project.status }} </v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>

  </v-container>
   
  </div>
</template>

<script>
  export default {
    data() {
      return {
           projects: [
            { id:1, title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { id:2, title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { id:3, title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'other', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { id:4, title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          ]
      }
    },
    methods: {
      sortBy(paramField){
        // console.log('hello masuk sini')
        this.projects.sort((a, b) => a[paramField] < b[paramField] ? -1 :1)
      }
    }    
  }
</script>

<style>

  .project.complete{
    border-left: 4px solid #3CD1C2;
  }
  .project.ongoing{
    border-left: 4px solid orange
  }
  .project.overdue{
    border-left: 4px solid tomato;
  }


  .chip.complete{
    background: #3CD1C2;
  }
  .chip.ongoing{
    background:  orange
  }
  .chip.overdue{
    background:  tomato;
    color:  tomato;
  }
  .v-chip.overdue{
    background:  tomato;
    color:  tomato;
  }


</style>
