<template lang="pug">
div
    span.orange {{ counter }}
    button(@click="counter++") Increase
    button(@click="counter--") Decrease
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

<style lang="scss" scoped>
$color: orange;

.orange {
    font-size: 2rem;
    color: $color;
}
</style>
