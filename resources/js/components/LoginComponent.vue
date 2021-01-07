<template>
   <div class="body">
       <div class="wrapper">
           <h4 class="signIn">Sign In</h4>
           <div class="social">
               <button class="btn btn-primary">
                   <img class="icon" :src="'icons/facebook.png'" alt="facebook">Facebook
               </button>
               <button class="ml-2 btn btn-light">
                   <img class="icon" :src="'icons/google.png'" alt="google">Google
               </button>
           </div>
           <div class="input-data">
               <input type="email" required>
               <div class="underline"></div>
               <label>Email</label>
           </div>
           <div class="input-data">
               <input type="password" required>
               <div class="underline"></div>
               <label>Password</label>
           </div>
           <div class="form-group remember-me">
               <input type="checkbox" class="form-check form-check-inline"> Remember Me
           </div>
           <button @click="login()" class="btn btn-primary log-in">Log In</button>
           <div class="alert alert-danger">
               Press the login button to see dashboard
           </div>
           <div class="old">
               <p>Create an account</p>  <router-link to="/register">Register</router-link>

           </div>
       </div>
   </div>
</template>

<script>
export default {
name: "LoginComponent",
methods: {
    login() {
        this.$store.commit('LOGIN');
        this.$router.push('/dashboard/1')
    }
},
}
</script>

<style scoped>
    .body{
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: linear-gradient(-135deg, #c850c0, #4158d0);
    }
    .signIn{
        text-align:center;
        padding: 10px;
    }
    .wrapper{
        border-radius: 4px;
        width: 450px;
        background: #fff;
        margin: 100px auto;
        padding: 30px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    }
    .wrapper .input-data{
        height: 40px;
        width: 100%;
        margin-bottom: 30px;
        position: relative;
    }
    .wrapper .input-data:last-child{
        margin-bottom: 0;
    }
    .wrapper .input-data input{
        height: 100%;
        width: 100%;
        border: none;
        font-size: 17px;
        border-bottom: 2px solid silver;
    }
    .input-data input:focus ~ label,
    .input-data input:valid ~ label{
        transform: translateY(-20px);
        font-size: 15px;
        color: #4158d0;
    }
    .wrapper .input-data label{
        position: absolute;
        bottom: 10px;
        left: 0;
        color: grey;
        pointer-events: none;
        transition: all 0.3s ease;
    }
    .input-data .underline{
        position: absolute;
        height: 2px;
        width: 100%;
        bottom: 0;
    }
    .input-data .underline:before{
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background: #4158d0;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease;
    }
    .input-data input:focus ~ .underline:before,
    .input-data input:valid ~ .underline:before{
       transform: scaleX(1);
    }
    .social {
        margin-left: 80px;
        margin-bottom: 30px;
    }
    .icon {
        height: 22px;
        margin-right: 6px;
    }
    .log-in{
       margin-bottom: 10px;
    }
    .old {
        display: flex;
        justify-content: center;
    }
    .old a {
        margin-left: 10px;
    }
</style>
