<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Raf News</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
          <li class="nav-item">
            <router-link :to="{name: 'HomeView'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === 'HomeView'}">Articles</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'SignInView'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === '#'}">Most recent</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'SignInView'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === '#'}">Most read monthly</router-link>
          </li>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
            <router-link :to="{name: 'SignInView'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === 'SingInView'}">Sign in</router-link>
          </li>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "nav_bar"
}
</script>

<style scoped>

</style>