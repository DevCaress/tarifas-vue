<script setup>
import {ref} from 'vue'
import {userStore} from '../store/user'

const props = defineProps({
    textBtn: String,
    title: String,
    userFunction : Function 
    
})

const user = userStore()
const email = ref('nogaradevocde@gmail.com')
const password = ref('CSdk5433*-')
const handelSubmit = async () =>{
    if(!email.value || password.value.length < 5){
        return alert('please fill in the fields')
    }else{
        await props.userFunction(email.value,password.value)
    }
    
}



</script>

<template>
    <section class="login-box">
        <img src="../assets/media/dc_marca_sn_1200.png" class="avatar" alt="Avatar image">
        <h1>{{ title }}</h1>
        <div>
            <form @submit.prevent="handelSubmit()"> 
                <label for="email">Email</label>
                <input type="email" v-model.trim="email">
                <label for="password">Password</label>
                <input type="password" v-model.trim="password">
                <button class="btn btn-primary" type="submit" :disabled="user.loadinUser">{{textBtn}}</button>
            </form>
        </div>
    </section>
</template>

<style>

.login-box {
  width: 320px;
  height: 420px;
  background: #000;
  color: #fff;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 70px 30px;
  border-radius: 10%;
}

.login-box .avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
}

.login-box h1 {
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
  font-size: 22px;
}

.login-box label {
  margin: 0;
  padding: 0;
  font-weight: bold;
  display: block;
}

.login-box input {
  width: 100%;
  margin-bottom: 20px;
}

.login-box input[type="text"], .login-box input[type="password"] {
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-size: 16px;
}

.login-box input[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  background: #b80f22;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
}

.login-box input[type="submit"]:hover {
  cursor: pointer;
  background: #ffc107;
  color: #000;
}

.login-box a {
  text-decoration: none;
  font-size: 12px;
  line-height: 20px;
  color: darkgrey;
}

.login-box a:hover {
  color: #fff;
}
</style>