<script setup>
    const props = defineProps({
        title:String,
        info:String,
        cost:{
            type: Number,
            default: 0
        }

    })
</script>

<template>
    <div>
        <h2>{{ title }}</h2>
        <div>
            <p>- {{ info }}.</p>
            <slot></slot>
            <span v-if="cost > 0">Costo: ${{cost}} usd*</span>
        </div>
    </div>
</template>

<style>

</style>