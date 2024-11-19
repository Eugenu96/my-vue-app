<script>
import BarChart from './BarChart.vue';

export default {
  data() {
    return {
      dish_data: {},
    }
  },
  mounted() {
    document.title = 'Diet | CaloriesCalc'
  },
  components: { BarChart, },
  methods: {
    getBgColor: function (d_data) {
      var indx = d_data.length > 0 ? d_data.length : 1;
      var colors = [
        'rgb(20, 189, 255)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'].splice(indx)
      return colors;
    },
    getDishData: function (dishData) {
      this.dish_data.data = dishData;
      this.dish_data.labels = ["kcal", "carb", "prot", "fats"];
      this.dish_data.bgcolors = this.getBgColor(dishData.length);
    },
  },
}
</script>

<template>
  <div class="col-12 col-lg-6">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRationList"
            aria-expanded="true" aria-controls="collapseRationList">
            Ration list
          </button>
        </h2>
        <div id="collapseRationList" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div @click="getDishData([324, 30, 10, 50])" class="dish_card">
                  <div class="dish_name">Макароны с курицей</div>
                  <div class="dish-values">350 ккал, 23 белк, 67 угл, 13 жир </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="dish_card">
                  <div class="dish_name">Макароны с курицей</div>
                  <div class="dish-values">350 ккал, 23 белк, 67 угл, 13 жир </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="dish_card">
                  <div class="dish_name">Макароны с курицей</div>
                  <div class="dish-values">350 ккал, 23 белк, 67 угл, 13 жир </div>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="container">
        <h5>Add dish</h5>
        <form action="" method="post">
          <div class="mb-2">
            <label for="dish_name" class="form-label">Name</label>
            <input type="text" name="" id="dish_name" class="form-control" placeholder="Name">
          </div>
          <div class="mb-2">
            <label for="dish_description" class="form-label">Description</label>
            <input type="text" name="" id="dish_description" class="form-control" placeholder="Name">
          </div>
          <div class="mb-2">
            <label for="dish_name" class="form-label">Name</label>
            <input type="text" name="" id="dish_name" class="form-control" placeholder="Name">
          </div>
          <div class="mb-2">
            <label for="product_in_dush" class="form-label">Products</label>
            <div class="input-group">
              <input type="text" id="product_in_dush" class="form-control" placeholder="Enter product">
              <button id="add_product_to_dish" class="btn btn-outline-secondary" type="button">Add</button>
            </div>
          </div>
          <!-- Show if add product not exist -->
          <div class="mb-2">
            <label for="" class="form-label">Product value</label>
            <div class="input-group">
              <input type="text" id="product_kcal" class="form-control" placeholder="">
              <span class="input-group-text">kcal</span>
              <input type="text" id="product_carb" class="form-control" placeholder="">
              <span class="input-group-text">carb</span>
              <input type="text" id="product_prot" class="form-control" placeholder="">
              <span class="input-group-text">prot</span>
              <input type="text" id="product_fats" class="form-control" placeholder="">
              <span class="input-group-text">fats</span>
            </div>
          </div>
          <div class="mb-2">
            <label for="" class="form-label">Dish value</label>
            <div class="input-group">
              <input type="text" id="dish_kcal" class="form-control" placeholder="">
              <span class="input-group-text">kcal</span>
              <input type="text" id="dish_carb" class="form-control" placeholder="">
              <span class="input-group-text">carb</span>
              <input type="text" id="dish_prot" class="form-control" placeholder="">
              <span class="input-group-text">prot</span>
              <input type="text" id="dish_fats" class="form-control" placeholder="">
              <span class="input-group-text">fats</span>
            </div>
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Save Dish</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="col-12 col-lg-6">
    <BarChart :chart_data="dish_data"></BarChart>
  </div>
</template>

<style lang="scss">
.accordion-body {
  max-height: 350px;
  overflow-y: scroll;
}

.list-group-item {
  cursor: pointer;
  text-decoration: solid;

  :hover {
    background-color: rgba(127, 255, 212, 0.05);
  }
}
</style>