<template>
    <div class="panel">
        panel
    </div>
</template>

<script>
    export default {
        name: "GrainFullPanel",
    }
</script>

<style scoped lang="scss">
    .panel{
        font-family: $font-family;
        border: 0;
        outline: 0;
        font-size: $ruler;
        border-radius: $ruler / 4;
        padding: 0;
        background-color: $color-bg;
        text-shadow: 1px 1px 0 $color-text-shadow;
        text-align: center;
        color: $color-button-text;
        font-weight: 600;
        box-shadow: -2px -2px 5px $color-shadow-light, 2px 2px 5px $color-shadow-dark;
        transition: all .2s ease-in-out;
        /*&.click {
            box-shadow: inset 1px 1px 2px $color-shadow-dark,
            inset -1px -1px 2px $color-shadow-light;
        }*/
    }
</style>
