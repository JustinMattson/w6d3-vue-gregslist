<template>
  <div class="house-details container">
    <div class="row mt-3">
      <div class="col-6">
        <h3>{{house.year}}</h3>
        <h1>{{house.description}}</h1>
        <h2>Bed/Bath: {{house.bedrooms}}/{{house.bathrooms}}</h2>
        <h3>Price: ${{house.price}}</h3>
        <button type="button" class="btn btn-outline-danger" @click="deleteHouse">DELETE!</button>
      </div>
      <div class="col-6">
        <img class="card-img-top" :src="house.imgUrl" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HouseDetails",
  mounted() {
    // NOTE when the page loads, go get the house who's id is in the url params
    this.$store.dispatch("getHouseDetails", this.$route.params.id);
  },
  methods: {
    deleteHouse() {
      this.$store.dispatch("deleteHouse", this.house._id);
    }
  },

  // NOTE take some action before navigation changes
  beforeRouteLeave(to, from, next) {
    this.$store.commit("setActiveHouse", {});
    next();
  },
  computed: {
    house() {
      return this.$store.state.activeHouse;
    }
  }
};
</script>

<style>
</style>