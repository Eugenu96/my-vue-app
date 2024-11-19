<script>
export default {
    props: ["categories", "selected"],

}
</script>

<template>
    <select class="form-select form-select-sm mb-2" aria-label="Small select example">
        <option v-for="category in categories" v-bind:key="category.id" :value="category.id"
            :selected="category.name == selected"> {{ category.name }}
        </option>
    </select>
</template>

<style></style>