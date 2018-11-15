

<template>
<div>
   <b-navbar class="header" toggleable="md" type="dark" variant="info">
    <b-navbar-brand class="head" href="#">Sample project</b-navbar-brand>
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item  right>Logut</b-nav-item>
    </b-navbar-nav>
</b-navbar>
<div class="form">
<form>
    <label>Email</label>
    <input type="email" placeholder="Enter Email" v-model="changeEmail"><br/><br/>
    <label>Password</label>
    <input type="password" placeholder="Enter password" v-model="changePass" required><br/><br/>
    <button id="btn" @click="Change">Submit</button>
</form>
</div>
  </div>
</template>

<script>
export default{
  data(){
    return{
       changeEmail:'',
       changePass:'',
    }
  },
  methods:{
    Change:function(){
      var arr = this.$store.state.Users;
      let user =  arr.find(item => item.email===this.changeEmail)
          if(user){
            console.log('old user',user.password)
            user.password = this.changePass
            console.log('neew user',user.password)
            console.log('neew user',user)
             this.$swal('Password Changed Successfully');
          }
          else if(this.changeEmail==="" || this.changePass === ""){
                  this.$swal('Fields Cannot be empty');
          }
          else{
            console.log('not user')
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
#btn{
     width:500px;
    height:40px;
    background-color:#17a2b8;
     border-radius: 8px;
}
</style>