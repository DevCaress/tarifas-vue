<script setup>
  import FormUsers from './components/FormUsers.vue';
  import {userStore} from './store/user.js'
  import { RouterView , RouterLink} from 'vue-router';
  const user = userStore()
  const superUser = 'xhKPq6Yc9SSgbabjKm6fFQXWIau2'
</script>


<template>
  <header class="header" v-if="user.userData "> 
    <div class="logo">
      <img src="./assets/media/dc_marca_sn_1200.png" alt="">
    </div>
    <nav >
      <div class="nav-links">
        <div><RouterLink to='/'>Home</RouterLink></div>
        <div><RouterLink to='/register' v-if="user.userData.uid === superUser">Registrar</RouterLink></div>
        <button class="btn" @click="user.logOutUser">Logout</button>
      </div>
    </nav>
  </header>
  <router-view></router-view>
</template>

<style>
body{
  margin: 0;
  padding: 2em 30em;
  box-sizing: content-box;
  font-family: monospace;
  background-color: #898989;
  
}

.header{
    background-color: #1b3039;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 85px;
    padding: 5px 10%;
}

.header .logo{
    order: 3;
    margin-left: auto;
}

.header .logo img{
    height: 70px;
    width: auto;
    transition: all 0.3s;
}

.header .logo img:hover{
    transform: scale(1.2);
}

.header nav{
    order: 1;
}

.header .nav-links{
    list-style: none;
}

.header .nav-links div{
    display: inline-block;
    padding: 0 20px;    
}

.header .nav-links div:nth-child(1){
    padding: 0 20px 0 0;
}

.header .nav-links div:hover{
    transform: scale(1.1);
}

.header .nav-links a{
    font-size: 30px;
    color: #eceff1;
    text-decoration: none;    
    margin-left: 20px;
}

.header .btn{
    order: 2;
}

.header .btn {
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

.header .btn:hover{
    background-color: #e2f1f8;
    color: red;
    transform: scale(1.1);
}


</style>