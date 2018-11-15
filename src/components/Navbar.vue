


<template>
<div>
   <b-navbar class="header" toggleable="md" type="dark" variant="info">
    <b-navbar-brand class="head" href="#">Sample project</b-navbar-brand>
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item  right>Sign In</b-nav-item>
      <b-nav-item  right>Sign Up</b-nav-item>
    </b-navbar-nav>
</b-navbar>
  </div>
</template>

<script>


export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  margin-top:-60px;
}
.head{
  font-size: 24px;
}
.ml-auto{
  font-size: 21px;
}
</style>