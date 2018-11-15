
<template>
<div>
   <b-navbar class="header" toggleable="md" type="dark" variant="info">
    <b-navbar-brand class="head" href="#">Sample project</b-navbar-brand>
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item  right>Sign In</b-nav-item>
    </b-navbar-nav>
</b-navbar>
<!-- <p v-model="text"></p> -->
<div class="form">
<form>
    <label>Name</label>
    <input type="text"  placeholder="Enter Name" v-model="name"><br/><br/>
    <label>Email</label>
    <input type="email"  placeholder="Enter Email" v-model="email"><br/><br/>
    <label>Password</label>
    <input type="password" placeholder="Enter password" v-model="password"><br/><br/>
    <label>Confirm Password</label>
    <input type="password" placeholder="Re-Enter password" v-model="confirmPassword"><br/><br/>
    <button class="btn" v-on:click="addUser">Submit</button>
</form>
</div>
  </div>
</template>

<script>
// import axios from 'axios';
// import { mapState } from 'vuex';

export default{
  data(){
    return{
      array:[],
      name:'',
      email:'',
      password:'',
      confirmPassword:'',
    }
  },
  methods:{
       addUser:function(){
        var obj={};
        obj.name= this.name;
        obj.email= this.email;
        obj.password= this.password;
        console.log('12345',obj);

        if(this.name ==="" || this.email ==="" || this.password ===""){
             this.$swal('Some fileds are Missing');
        }
        else if(this.password !== this.confirmPassword){
              this.$swal('Password Dosent match');
          }
        else {
             this.$store.dispatch('register',obj);
             this.$swal('User Registered');
        }
  },
}
}
</script>

<style>
.header{
  margin-top:-60px;
}
.head{
  font-size: 24px;
}
.ml-auto{
  font-size: 21px;
}
.form{
    margin-top:50px;
    margin-left:30%;
    height:500px;
    width:500px;
}
input{
    width:500px;
    height:40px;
    border-radius: 8px;
}
.btn{
     width:500px;
    height:40px;
    background-color:#17a2b8;
     border-radius: 8px;
}
</style>