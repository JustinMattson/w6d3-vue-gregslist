<template>
  <div class="cars-component container">
    <div class="row">
      <div class="col">
        <button
          type="button"
          class="btn btn-success"
          v-if="!carForm"
          @click="carForm = !carForm"
        >Add Car</button>
        <form class="form-inline" v-if="carForm" @submit.prevent="createCar">
          <div class="form-group ml-2">
            <label for="title">Title</label>
            <input
              type="text"
              class="form-control"
              name="title"
              id="title"
              aria-describedby="title"
              placeholder="Title..."
              v-model="newCar.title"
              required
            />
          </div>
          <div class="form-group ml-2">
            <label for="make">Make</label>
            <input
              type="text"
              class="form-control"
              name="make"
              id="make"
              aria-describedby="make"
              placeholder="Make..."
              v-model="newCar.make"
              required
            />
          </div>
          <div class="form-group ml-2">
            <label for="model">Model</label>
            <input
              type="text"
              class="form-control"
              name="model"
              id="model"
              aria-describedby="model"
              placeholder="Model..."
              v-model="newCar.model"
            />
          </div>
          <div class="form-group ml-2">
            <label for="price">Price</label>
            <input
              type="number"
              class="form-control"
              name="price"
              id="price"
              aria-describedby="price"
              v-model="newCar.price"
              required
            />
          </div>
          <div class="form-group ml-2">
            <label for="year">Year</label>
            <input
              type="number"
              class="form-control"
              name="year"
              id="year"
              aria-describedby="year"
              v-model="newCar.year"
              required
            />
          </div>
          <div class="form-group ml-2">
            <label for="description">Description</label>
            <input
              type="text"
              class="form-control"
              name="description"
              id="description"
              aria-describedby="description"
              placeholder="Description..."
              v-model="newCar.description"
            />
          </div>
          <div class="form-group ml-2">
            <label for="imgUrl">Image Url</label>
            <input
              type="url"
              class="form-control"
              name="imgUrl"
              id="imgUrl"
              aria-describedby="imgUrl"
              placeholder="Image Url..."
              v-model="newCar.imgUrl"
              required
            />
          </div>
          <button type="submit" class="btn btn-outline-success">Submit</button>
          <button type="button" class="btn btn-danger" @click="carForm = !carForm; newCar={}">Cancel</button>
        </form>
      </div>
    </div>
    <div class="row">
      <car v-for="car in cars" :key="car._id" :carProp="car" />
    </div>
  </div>
</template>

<script>
import Car from "./CarComponent.vue"

export default {
  name: "Cars",
  // NOTE mounted fires at the first startup of the template being added to the page
  mounted() {
    this.$store.dispatch("getAllCars")
  },
  data() {
    return {
      newCar: {},
      carForm: false
    }
  },
  computed: {
    cars() {
      return this.$store.state.cars
    }
  },
  methods: {
    createCar() {
      this.$store.dispatch("createCar", { ...this.newCar })
      this.newCar = {}
    }
  },
  components: {
    Car
  }
}
</script>

<style>

</style>