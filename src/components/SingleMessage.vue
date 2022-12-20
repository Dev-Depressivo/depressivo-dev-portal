<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>


<template>
    <h3>{{msg}}</h3>
</template>