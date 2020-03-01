<template :number="number">
    <p>The number is {{ number }}</p>
</template>

<script>
    export default {
        props: {
            number: {
                type: Number,
                required: true
            }
        }
    };
</script>