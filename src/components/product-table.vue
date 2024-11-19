<script>
import axios from 'axios'
import productForm from './product-form.vue';

export default {
    props: [],
    components: {
        productForm,
    },
    data() {
        return {
            categories: [],
            products: {},
        }
    },
    mounted() {
        this.getCategories()
    },
    methods: {
        getCategories() {
            axios
                .get('/api/v1/category-list')
                .then(response => {
                    this.categories = response.data
                })
                .catch(error => { console.log(error) });
        },
        getProducts(id_category) {
            axios
                .get('/api/v1/products-list/' + id_category + "/")
                .then(response => {
                    this.products[id_category] = response.data
                })
                .catch(error => { console.log(error) })
        },
        selectProduct(cat_id, indx, cat_name) {
            console.log("cat_id: " + cat_id);
            console.log('category: ' + cat_name)
            var product = this.products[cat_id][indx];
            this.$emit('selectProduct', product, cat_name);
        }
    },
    emits: ['categoriesChange', 'selectProduct'],
    watch: {
        categories(cat) {
            this.$emit("categoriesChange", cat);
        }
    }
}

</script>

<template>
    <div class="container">
        <div class="row">
            <!-- btn filters and form collaps -->
            <div>
                <button class="btn btn-sm btn-info" type="button" data-bs-toggle="collapse"
                    data-bs-target="#productsFilter" aria-expanded="false"
                    aria-controls="productsFilter">Filters</button>
                <button class="btn btn-sm btn-info" type="button" data-bs-toggle="collapse"
                    data-bs-target="#productForm" aria-expanded="false" aria-controls="productsFilter">Add
                    product</button>
            </div>
        </div>
        <div class="row">
            <!-- filters -->
            <div class="col-6">
                <div class="collapse" id="productsFilter">
                    <div class="card card-body mb-2">
                        <select class="form-select" size="3" aria-label="Size 3 select example">
                            <option value="0">All</option>
                            <option value="1">Fish</option>
                            <option value="2">Meat</option>
                            <option value="3">Fresh</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-2">
            <!-- Product form -->

            <div class="collapse" id="productForm">
                <div class="card card-body">
                    <productForm :categories="categories" :forAddProduct="true" />
                </div>
            </div>
        </div>

        <div class="row" style="max-height: 750px; overflow-y: scroll;">
            <div class="accordion" id="accordionExample">
                <div v-for="category in categories" v-bind:key="category.id" v-on:click="getProducts(category.id)"
                    class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            v-bind:data-bs-target="'#collapse-' + category.id" aria-expanded="false"
                            v-bind:aria-controls="'#collapse-' + category.id">
                            {{ category.name }}
                        </button>
                    </h2>
                    <div v-bind:id="'collapse-' + category.id" class="accordion-collapse collapse"
                        data-bs-parent="#accordionExample" style="">
                        <div class="accordion-body" style="max-height: 400px; overflow-y: scroll;">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    <tr v-for="(product, indx) in products[category.id]" v-bind:key="product.id"
                                        :title="product.description" style="cursor: pointer;"
                                        v-on:click="selectProduct(category.id, indx, category.name)">
                                        <td>{{ product.name }}</td>
                                        <td>{{ product.kilocalory }} kcal., {{ product.proteins }} prot., {{
                                            product.carbohydrates }} carb., {{ product.fats }} fat.</td>
                                    </tr>
                                    <!-- <tr v-for="category in categories" v-bind:key="category.id">
                        <td>{{ category.name }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> -->

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<style lang="scss"></style>