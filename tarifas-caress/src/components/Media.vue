<script setup>
const props = defineProps({
  followers: String,
  img: String,
});

</script>

<template>
  <div>
    <div>
      <img :src="props.img" alt="" />
      <span>{{   followers }} </span>
    </div>
    <slot></slot>
  </div>
</template>

<style>
    div > img{
        width: 25px;
        height: 25px;
    }
</style>
