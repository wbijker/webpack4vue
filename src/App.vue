<template>
    <div>
        <span class="orange">{{ counter }}</span>
        <button @click="counter++">Increase</button>
        <button @click="counter--">Decreese</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 10
        }
    }
}
</script>

<style>
.orange {
    color: lime;
}
</style>
