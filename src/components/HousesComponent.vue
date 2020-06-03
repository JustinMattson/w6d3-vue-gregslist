<template>
  <div class="houses-component container">
    <div class="row">
      <div class="col">
        <button
          type="button"
          class="btn btn-success my-3"
          v-if="!houseForm"
          @click="houseForm = !houseForm"
        >Add House</button>
        <form class="form-inline" v-if="houseForm" @submit.prevent="createHouse">
          <div class="form-group ml-2">
            <label for="description">Description</label>
            <input
              type="text"
              class="form-control"
              name="description"
              id="description"
              aria-describedby="description"
              placeholder="Description..."
              v-model="newHouse.description"
              required
            />
          </div>
          <div class="form-group ml-2">
            <label for="year">Year</label>
            <input
              type="text"
              class="form-control"
              name="year"
              id="year"
              aria-describedby="year"
              placeholder="Year..."
              v-model="newHouse.year"
              required
            />
          </div>
          <div class="form-group ml-2">
            <label for="bedrooms">Bedrooms</label>
            <input
              type="text"
              class="form-control"
              name="bedrooms"
              id="bedrooms"
              aria-describedby="bedrooms"
              placeholder="Bedrooms..."
              v-model="newHouse.bedrooms"
            />
          </div>
          <div class="form-group ml-2">
            <label for="bathrooms">Bathrooms</label>
            <input
              type="text"
              class="form-control"
              name="bathrooms"
              id="bathrooms"
              aria-describedby="bathrooms"
              placeholder="Bathrooms..."
              v-model="newHouse.bathrooms"
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
              v-model="newHouse.price"
              required
            />
          </div>
          <div class="form-group ml-2">
            <label for="levels">Levels</label>
            <input
              type="number"
              class="form-control"
              name="levels"
              id="levels"
              aria-describedby="levels"
              v-model="newHouse.levels"
              required
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
              v-model="newHouse.imgUrl"
              required
            />
          </div>
          <button type="submit" class="btn btn-outline-success">Submit</button>
          <button
            type="button"
            class="btn btn-danger"
            @click="houseForm = !houseForm; newHouse={}"
          >Cancel</button>
        </form>
      </div>
    </div>
    <div class="row">
      <house v-for="house in houses" :key="house._id" :houseProp="house" />
    </div>
  </div>
</template>

<script>
import House from "./HouseComponent.vue";

export default {
  name: "Houses",
  // NOTE mounted fires at the first startup of the template being added to the page
  mounted() {
    this.$store.dispatch("getAllHouses");
  },
  data() {
    return {
      newHouse: {},
      houseForm: false
    };
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    }
  },
  methods: {
    createHouse() {
      this.$store.dispatch("createHouse", { ...this.newHouse });
      this.newHouse = {};
    }
  },
  components: {
    House
  }
};
</script>

<style>
</style>