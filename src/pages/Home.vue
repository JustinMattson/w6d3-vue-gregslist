<template>
  <div class="home text-center">
    <h1>Gregslist</h1>
    <nav class="nav nav-tabs nav-stacked">
      <a class="nav-link" :class="{active: activeTab=='cars'}" @click="activeTab = 'cars'">Cars</a>
      <a
        class="nav-link"
        :class="{active: activeTab=='houses'}"
        @click="activeTab = 'houses'"
      >Houses</a>
      <a class="nav-link" :class="{active: activeTab=='jobs'}" @click="activeTab = 'jobs'">Jobs</a>
    </nav>
    <cars v-if="activeTab == 'cars'" />
    <div v-else-if="activeTab == 'houses'">Houses</div>
    <div v-else>JOBS</div>
  </div>
</template>


<script>
import Cars from "@/components/CarsComponent.vue"
export default {
  name: 'Home',
  data() {
    return {
      activeTab: 'cars'
    }
  },
  components: {
    Cars
  }
}
</script>