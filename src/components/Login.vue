

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
          <a><router-link class="link" to="/change">Change Password</router-link></a>
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
            <a class="btn" v-on:click.prevent="Login">Submit</a>
        </div>

</div>
  </div>
</template>

<script>
export default
{
   data()
   {
     return{
       user:{
     email:'',
     password:''
     
     },
   }
   },
 methods:
 {
     Login:function()
     {
        var email= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/.test(this.user.email);
       var arr = this.$store.state.Users;
       console.log('store value',arr);
       let obj = arr.find(item => item.email === this.user.email);
         if(this.user.email === "" || this.user.password === ""){
            this.$swal('Fileds cannot be empty');
         }
         else if(obj && obj.password === this.user.password){
            if(obj.password === this.user.password)
            {
               console.log('found',obj);
               console.log('found name',obj.name);
               this.$swal('Welcome',obj.name);
               setTimeout( () => this.$router.push('/'),1000);
            }
            else
            {
               this.$swal('Password Or Email Incorrect');
            }
          
          }
          else
            {
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
</style>