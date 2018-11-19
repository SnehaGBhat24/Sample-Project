

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
    </div>
  </nav>
<div class="form">
    <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" placeholder="Email" v-model="user.email">
            </div>
       </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="password" placeholder="Password" v-model="user.password">
            </div>
       </div>
    <div class="has-text-centered">
            <a class="btn" v-on:click.prevent="Change">Submit</a>
        </div>

</div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      user:{
       email:'',
       password:'',
      }
    }
  },
  methods:{
    Change:function(){
      var arr = this.$store.state.Users;
      let user =  arr.find(item => item.email===this.user.email)
          if(user){
            console.log('old user',user.password)
            user.password = this.changePass
            console.log('neew user',user.password)
            // console.log('neew user',user)
             this.$swal('Password Changed Successfully');
          }
          else if(this.user.email==="" || this.user.pass === ""){
                  this.$swal('Fields Cannot be empty');
          }
          else{
            // console.log('not user')
             this.$swal('User Not Found');
          }
        
    }
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
   margin-top:20px;
     width:500px;
    height:40px;
    background-color:#17a2b8;
     border-radius: 8px;
}
</style>