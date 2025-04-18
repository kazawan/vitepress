<template>
    <div>
        {{ catalog}}
    </div>
    hello
</template>


<script setup>
    const props = defineProps({
        catalog:{
            type:String,
            default:"catalog"
        }
    })
</script>