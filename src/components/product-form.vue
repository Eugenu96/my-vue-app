<script>

import { computed } from 'vue';

export default {
    data() {
        return {
            isvisible: false,
        }
    },
    props: {
        productCategory: {
            type: String,
            default: '',
        },
        forAddProduct: {
            type: Boolean,
            default: false,
        },
        categories: {
            type: Array,
            default: [],
        },
        selectedProduct: {
            type: Object,
            default: {
                id: -1,
                name: "",
                category: "",
                description: "",
                kilocalory: 0,
                proteins: 0,
                carbohydrates: 0,
                fats: 0,
                units: 0,
            }

        },
    },
    methods: {
        setSelectedCat: function (cur_cat, product_cat) {
            return cur_cat === product_cat;
        },
    },
    mounted() {
    }
}

</script>

<template>
    <form action="" method="post">
        <div class="form-floating mb-2">
            <input type="text" :value="selectedProduct.name" class="form-control form-control-sm" id="floatingPassword"
                placeholder="Name">
            <label for="floatingPassword">Name</label>
        </div>

        <div class="form-floating mb-2">
            <textarea class="form-control" placeholder="Leave a comment here"
                id="floatingTextarea">{{ selectedProduct.description }}</textarea>
            <label for="floatingTextarea">Description</label>
        </div>

        <div v-if="forAddProduct" class="input-group mb-2">
            <label class="input-group-text" for="selectCategory">Category</label>
            <select id="selectCategory" class="form-select form-select-sm">
                <option v-for="category in categories" v-bind:key="category.id" :value="category.id"
                    :selected="category.name == selected"> {{ category.name }}
                </option>
            </select>
        </div>

        <div v-else class="input-group mb-2">
            <span class="input-group-text">Category</span>
            <input type="text" :value="productCategory" aria-label="kilocalories" class="form-control">
        </div>

        <div class="input-group mb-2">
            <span class="input-group-text">kcal.</span>
            <input type="text" :value="selectedProduct.kilocalory" aria-label="kilocalories" class="form-control">
        </div>

        <div class="input-group mb-2">
            <span class="input-group-text">prot.</span>
            <input type="text" :value="selectedProduct.proteins" aria-label="Proteins" class="form-control">
        </div>

        <div class="input-group mb-2">
            <span class="input-group-text">carb.</span>
            <input type="text" :value="selectedProduct.carbohydrates" aria-label="Carbohydrates" class="form-control">
        </div>

        <div class="input-group mb-2">
            <span class="input-group-text">fats</span>
            <input type="text" :value="selectedProduct.fats" aria-label="Fats" class="form-control">
        </div>

        <div class="input-group mb-2">
            <span class="input-group-text">weight</span>
            <input type="text" :value="selectedProduct.units" aria-label="Fats" class="form-control">
        </div>

        <div v-if="forAddProduct" class="d-grid" gap-2>
            <button type="submit" class="btn btn-primary mb-3">Save product</button>
        </div>

    </form>
</template>

<style></style>