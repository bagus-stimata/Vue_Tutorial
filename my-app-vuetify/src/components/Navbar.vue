<template>
  <nav>
    <v-toolbar flat app >
      <!-- <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon> -->
        <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            plain
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-unfold-more-horizontal</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list color="grey lighten-4" outlined rounded> 
          <v-list-item
            v-for="link in links" :key="link.title" route :to="link.route"
          >
            <span>{{link.title}}</span>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn plain color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-run</v-icon>
      </v-btn>
    </v-toolbar>

 
    <v-navigation-drawer permanent app dark color="indigo"
     src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
     expand-on-hover
     >     

      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="">
          </v-avatar>
          <p class="white--text subtitle-2 mt-1">
            The Net Ninja
          </p>
        </v-flex>
        <v-flex>
          <Popup/>
        </v-flex>
      </v-layout>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in links"
          :key="item.title"
          link
          route :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


 
  </nav>
</template>

<script>
  import Popup from './Popup'

  export default {
    components: { Popup },
    data () {
      return {
        links: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/' },
          { title: 'Project', icon: 'mdi-image', route: '/projects' },
          { title: 'Team', icon: 'mdi-help-box', route: '/team' },
        ],
        right: null,
      }
    },
  }
</script>

