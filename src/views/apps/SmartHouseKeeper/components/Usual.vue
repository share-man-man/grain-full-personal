<template>
    <div class="usual">
        <grain-full-switch style="margin: 20px"/>
        <grain-full-switch style="margin: 20px"/>
        <grain-full-switch style="margin: 20px"/>
        <grain-full-switch style="margin: 20px"/>
    </div>
</template>

<script>
    import GrainFullSwitch from "../../../../components/GrainFull/Neumorphism/GrainFullSwitch";
    export default {
        name: "Usual",
        components: {GrainFullSwitch}
    }
</script>

<style scoped lang="scss">
    .usual{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
