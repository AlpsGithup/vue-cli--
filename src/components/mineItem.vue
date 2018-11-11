<template>
    <div class="icons">
        <slot name="iconimg"></slot>
        <span>{{icontxt}}</span>
    </div>
</template>
<script>
export default {
    props:["icontxt"]
}
</script>

<style>
.icons {
    width:22%;
}
.icons img{
    width:50%;
}
</style>
