<template>
<div id="nav">
  <ul>
    <li>
      <router-link
          :to="{
              name: 'Home'
            }"
      >
        Home
      </router-link>
    </li>

    <li>
      <router-link
          :to="{
              name: 'signin'
            }"
      >
        Sign in
      </router-link>
    </li>
    <li>Bagus Winarno</li>

    <li>
      <router-link
          :to="{
              name: 'dashboard'
            }"
      >
        Dashboard
      </router-link>
    </li>

    <li>
      <a href="#">
        Sign out
      </a>
    </li>

  </ul>

</div>
</template>

<script>
export default {
  name: "TheNavigation"
}
</script>

<style scoped>

</style>