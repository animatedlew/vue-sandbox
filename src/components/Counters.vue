<template>
    <div class="counters">
        <simple-counter class="counter"></simple-counter>
        <simple-counter class="counter"></simple-counter>
        <simple-counter class="counter"></simple-counter>
        <simple-counter class="counter"></simple-counter>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import SimpleCounter from '@/components/SimpleCounter.vue';

@Component({ components: { SimpleCounter }})
export default class Counters extends Vue {
    @Prop() public total: number;
}
</script>

<style scoped>
button.counter {
  background: black;
  color: white;
  width: 32px;
  height: 32px;
  border: 16px;
  border-radius: 16px 16px;
  outline: 0;
  cursor: pointer;
}
.counters {
  margin-bottom: 26px;  
}
</style>