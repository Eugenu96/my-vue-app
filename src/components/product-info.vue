<script>

import Pie from './PieChart.vue';
import productForm from './product-form.vue';

export default {
    props: ['categories', 'selProduct', 'category'],
    components: {
        Pie,
        productForm,
    }
}

</script>

<template>
    <div class="row">
        <div class="container" style="height: 300px;">
            <Pie :selectedProduct="selProduct" />
        </div>
    </div>
    <div class="row">
        <productForm :forAddProduct="false" :categories="categories" :selectedProduct="selProduct"
            :productCategory="category" />
    </div>
</template>

<style lang="scss"></style>