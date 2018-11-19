


<template>
<div>
  <nav class="navbar">
    <div class="navbar-brand" style="font-size:26px;font-weight:bold">
      <a class="navbar-item">Sample Project</a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a><router-link class="link" to="/login">Login</router-link></a>
        </div>
      </div>
      <div class="navbar-item">
        <div class="buttons">
          <a><router-link class="link" to="/register">Sign Up</router-link></a>
        </div>
      </div>
    </div>
  </nav>
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
.navbar{
  background-color:#17a2b8;
  margin-top:-60px;
  color:white;
}
.navbar-item{
  font-size: 20px;
  color:white;
}
.link{
  color:white;
  text-decoration: none;
}
</style>