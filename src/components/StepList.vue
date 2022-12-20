<script setup>
defineProps({
  steps: {
    type: Array,
    required: true
  }
})
</script>


<template>
    <ul class="list-group list-group-flush" v-for="step in steps">
        <li class="list-group-item">{{step}}</li>
    </ul>
</template>