import { defineStore } from 'pinia';
import { ref } from 'vue';
import { axios } from 'axios';

export const useProductsStore = defineStore('products', () => {
    const categories = ref([]);
    const products = ref({});
    const product = ref({});

    const getCategories = async () => {
        axios
            .get('/api/v1/category-list')
            .then(response => {
                categories.value = response.data
            })
            .catch(error => { console.log(error) });
    }

    const getProducts = async (id_category) => {
        axios
            .get('/api/v1/products-list/' + id_category + "/")
            .then(response => {
                products.value[id_category] = response.data
            })
            .catch(error => { console.log(error) })
    }

    const selectProduct = (cat_id, indx, cat_name) => {
        console.log("cat_id: " + cat_id);
        console.log('category: ' + cat_name)
        product.value = products.value[cat_id][indx];
    }

    return { categories, products, product, getCategories, getProducts, selectProduct }
});