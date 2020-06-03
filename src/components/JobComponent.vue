<template>
  <div class="job col-3">
    <!-- NOTE Router link takes the name of the route, and an object including any parameters to pass -->
    <router-link :to="{ name: 'JobDetails', params: { id: jobProp._id }}">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title text-muted">{{jobProp.company}}</h4>
          <h3 class="card-title">{{jobProp.jobTitle}}</h3>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: ["jobProp"]
};
</script>

<style>
</style>