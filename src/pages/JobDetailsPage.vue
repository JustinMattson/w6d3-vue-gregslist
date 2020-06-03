<template>
  <div class="job-details container">
    <div class="row mt-3">
      <div class="col-6">
        <h6 class="text-muted">{{job.id}}</h6>
        <h1>Company: {{job.company}}</h1>
        <h3>Hours/wk: {{job.hours}}</h3>
        <h3>Wage/hr: ${{job.rate}}</h3>
        <button type="button" class="btn btn-outline-danger" @click="deleteJob">Take Job!</button>
      </div>
      <div class="col-6">
        <h1>Job Title: {{job.jobTitle}}</h1>
        <h2>Description: {{job.description}}</h2>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "JobDetails",
  mounted() {
    // NOTE when the page loads, go get the job who's id is in the url params
    this.$store.dispatch("getJobDetails", this.$route.params.id);
  },
  computed: {},
  methods: {
    deleteJob() {
      this.$store.dispatch("deleteJob", this.job._id);
    }
  },
  // NOTE take some action before navigation changes
  beforeRouteLeave(to, from, next) {
    this.$store.commit("setActiveJob", {});
    next();
  },
  computed: {
    job() {
      return this.$store.state.activeJob;
    }
  },
  components: {}
};
</script>


<style scoped>
</style>