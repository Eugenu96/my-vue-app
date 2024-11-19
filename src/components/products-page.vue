<script>
import productTable from './product-table.vue';
import productInfo from './product-info.vue';

export default {
    data() {
        return {
            categories: [],
            seectedProduct: {},
            category: "",
        }
    },
    components: {
        productTable, productInfo
    },
    methods: {
        catChange(categories) {
            this.categories = categories;
        },
        selProduct(product, category) {
            this.seectedProduct = product;
            this.category = category;
        }
    },
}
</script>

<template>
    <div class="col-12 col-lg-8">
        <productTable @categoriesChange="catChange" @selectProduct="selProduct" />
    </div>
    <div class="col-12 col-lg-4">
        <productInfo :categories="categories" :selProduct="seectedProduct" :category="category" />
    </div>
</template>

<style lang="scss"></style>