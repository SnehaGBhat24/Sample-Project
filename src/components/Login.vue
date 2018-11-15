

<template>
<div>
   <b-navbar class="header" toggleable="md" type="dark" variant="info">
    <b-navbar-brand class="head" href="#">Sample project</b-navbar-brand>
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item  right>Change Password</b-nav-item>
    </b-navbar-nav>
</b-navbar>
<div class="form">
<form>
    <label>Email</label>
    <input type="email" placeholder="Enter Email" v-model="logUser" ><br/><br/>
    <label>Password</label>
    <input type="password" placeholder="Enter password" v-model="logPass"><br/><br/>
    <button id="btn" @click="Login">Submit</button>
</form>
</div>
  </div>
</template>

<script>
export default
{
   data()
   {
     return{
     logUser:'',
     logPass:'',
     }
   },
 methods:
 {
     Login:function()
     {
       var arr = this.$store.state.Users;
       console.log('store value',arr);
       let obj = arr.find(item => item.email === this.logUser);
         if(obj){
            if(obj.password === this.logPass)
            {
               console.log('found',obj);
               console.log('found name',obj.name);
               this.$swal('Welcome',obj.name);
            }
            else
            {
               this.$swal('Password Or Email Incorrect');
            }
          
          }
          else if(this.logUser ==="" || this.logPass === "")
          {
               this.$swal('Fileds cannot be empty');
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
.header{
  margin-top:-60px;
}
.head{
  font-size: 24px ;
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
#btn{
     width:500px;
    height:40px;
    background-color:#17a2b8;
     border-radius: 8px;
}
</style>