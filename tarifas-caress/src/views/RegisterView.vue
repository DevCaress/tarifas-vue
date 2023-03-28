<script setup>
import FormUsers from '@/components/FormUsers.vue';
import { userStore } from '@/store/user';
const user = userStore()
const superUser = 'xhKPq6Yc9SSgbabjKm6fFQXWIau2'
</script>

<template>
    <FormUsers 
    v-if="user.userData.uid === superUser"
    textBtn="Registrar" 
    title="Registrar usuario" 
    :userFunction="user.registerUser" />
    
</template>