<template>
  <button @click="count += 1">{{ count }}</button>
</template>

<script lang="ts">
export default { data() { return { count: 0 }; } };
</script>
