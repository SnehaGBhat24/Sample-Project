
<template>
<div>
  <nav class="navbar">
    <div class="navbar-brand" style="font-size:26px;font-weight:bold">
      <a class="navbar-item">Sample Project</a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a><router-link class="link" to="/">Home</router-link></a>
        </div>
      </div>
      <div class="navbar-item">
        <div class="buttons">
          <a><router-link class="link" to="/login">Login</router-link></a>
        </div>
      </div>
    </div>
  </nav>
  
<div class="form">
       <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Name" v-model="name">
            </div>
       </div>
       <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" placeholder="Email" v-model="email">
            </div>
       </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="password" minplaceholder="Password" v-model="password">
            </div>
       </div>
        <div class="field">
            <label class="label">Confirm Password</label>
            <div class="control">
                <input class="input" type="password" placeholder="Confirm Password" v-model="confirmPassword">
            </div>
       </div>
        <div class="has-text-centered">
            <a class="btn" v-on:click.prevent="addUser">Submit</a>
        </div>
        <div class="forgot">
        <a><router-link  to="/change">Forgot Password</router-link></a>
        </div>
</div>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return{
      name:'',
      email:'',
      password:'',
      confirmPassword:'',
    }
  },
  methods:{
       addUser:function(){
        var user={};
        user.name= this.name;
        user.email= this.email;
        user.password= this.password;
        console.log('12345',user);
        var email= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/.test(this.email);
        // console.log('email',email)
        if(this.name ==="" || this.email ==="" || this.password ===""){
             this.$swal('Some fileds are Missing');
        }
        else if(!email){
         this.$swal('Invalid Email');
        }
        else if(this.password.length < 5){
            this.$swal('Password length must atleat 5 Characters');
          }
        else if(this.password !== this.confirmPassword){
              this.$swal('Password Dosent match');
          }
        else {
             this.$store.dispatch('register',user);
             this.$swal('User Registered');
        }
  },
}
}
</script>

<style>
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
.link:hover{
  text-decoration: none;
  color:white;
}
.form{
    margin-top:50px;
    margin-left:30%;
    height:500px;
    width:500px;
}
.btn{
    margin-top:20px;
     width:500px;
    height:40px;
    background-color:#17a2b8;
     border-radius: 8px;
}
.forgot{
  margin-top:30px;
  font-size: 16px;
  color:black;
}
</style>