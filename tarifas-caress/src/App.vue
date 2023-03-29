<script setup>
  import {userStore} from './store/user.js'
  import { RouterView , RouterLink} from 'vue-router';
  const user = userStore()
  const superUser = 'xhKPq6Yc9SSgbabjKm6fFQXWIau2'

</script>


<template>
  <header class="header" v-if="user.userData">
    <div class="container-nav" v-if="user.userData.uid === superUser"> 
      <div class="logo">
        <img src="./assets/media/dc_marca_sn_1200.png" alt="">
      </div>
      <nav class="nav-content">
        <div class="nav-links">
          <div><RouterLink to='/'>Home</RouterLink></div>
          <div><RouterLink to='/register'>Registrar</RouterLink></div>
          <button class="btn" @click="user.logOutUser">Logout</button>
        </div>
      </nav>
    </div>
  </header>
    <router-view></router-view>
</template>

<style >
body{
  margin: 0;
  box-sizing: content-box;
  font-family: monospace;
  background-color: #898989;
  
}

.container-nav{
    background-color: #1b3039;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 85px;
    padding: 5px 10%;
}

.container-nav .logo{
    order: 3;
    margin-left: auto;
}

.container-nav .logo img{
    height: 70px;
    width: auto;
    transition: all 0.3s;
}

.container-nav .logo img:hover{
    transform: scale(1.2);
}

.container-nav nav{
    order: 1;
}

.container-nav .nav-links{
    list-style: none;
}

.container-nav .nav-links div{
    display: inline-block;
    padding: 0 20px;    
}

.container-nav .nav-links div:nth-child(1){
    padding: 0 20px 0 0;
}

.container-nav .nav-links div:hover{
    transform: scale(1.1);
}

.container-nav .nav-links a{
    font-size: 30px;
    color: #eceff1;
    text-decoration: none;    
    margin-left: 20px;
}

.container-nav .btn{
    order: 2;
}

.container-nav .btn {
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}

.container-nav .btn:hover{
    background-color: #e2f1f8;
    color: red;
    transform: scale(1.1);
}

@media screen and (min-width:1280px){
  body{
    width: 1280px;
    margin: auto;
  }
}

@media  screen and  (max-width:900px) {
  .logo{
    display: none;
  }
  .container-nav{
    justify-content: center;
  }
  .container-nav .nav-links a{
    font-size: 20px;
  }
}
@media  screen and  (max-width:710px) {
  .container-nav{
    width: auto;
    height: 80px; 
    position: relative;
    
  }
}
@media  screen and  (max-width:460px) {
  .nav-content{
    position: absolute;
  }

}



</style>