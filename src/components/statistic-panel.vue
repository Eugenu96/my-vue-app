<script setup>
import statisticBar from './statistic-bar.vue';
</script>

<template>

    <div class="col-12 col-lg-3">
        <statisticBar title="calories" cur_value="965" target_value="1200" />
    </div>

    <div class="col-12 col-lg-3">
        <statisticBar title="protein" cur_value="27" target_value="60" />
    </div>

    <div class="col-12 col-lg-3">
        <statisticBar title="carbohydrates" cur_value="125" target_value="145" />
    </div>

    <div class="col-12 col-lg-3">
        <statisticBar title="fat" cur_value="17" target_value="25" />
    </div>

</template>

<style lang="scss"></style>