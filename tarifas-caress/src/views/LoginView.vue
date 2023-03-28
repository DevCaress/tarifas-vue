<script setup>
import FormUsers from '@/components/FormUsers.vue';
import { userStore } from '@/store/user';
const user = userStore()
</script>

<template>
  <FormUsers textBtn="Ingresar" title="Login" :userFunction="user.loginUser" v-if="!user.userData"/>
</template>

