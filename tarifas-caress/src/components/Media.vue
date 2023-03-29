<script setup>
const props = defineProps({
  followers: String,
  img: String,
});

</script>

<template>
  <div>
    <div>
      <img :src="require(`@/assets/media/${props.img}.svg`)" alt="" />
      <span>{{ followers }} </span>
    </div>
    <slot></slot>
  </div>
</template>

<style >
    .container-media-caress > div,
    .followers-nogara > div{
      margin: 10px;
    }
    .container-media-caress > div > div,
    .followers-nogara > div > div{
      display: flex;
      align-items: center;
    }
    div > img{
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
</style>
