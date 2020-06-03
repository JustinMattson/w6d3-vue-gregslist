<template>
  <div class="jobs-component container">
    <div class="row">
      <div class="col">
        <button
          type="button"
          class="btn btn-success my-3"
          v-if="!jobForm"
          @click="jobForm = !jobForm"
        >Add Job</button>
        <form class="form-inline" v-if="jobForm" @submit.prevent="createJob">
          <div class="form-group ml-2">
            <label for="jobTitle">Job Title</label>
            <input
              type="text"
              class="form-control"
              name="jobTitle"
              id="jobTitle"
              aria-describedby="Job Title"
              v-model="newJob.jobTitle"
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
              v-model="newJob.description"
              required
            />
          </div>
          <div class="form-group ml-2">
            <label for="company">Company</label>
            <input
              type="text"
              class="form-control"
              name="company"
              id="company"
              aria-describedby="company"
              placeholder="Company..."
              v-model="newJob.company"
              required
            />
          </div>
          <div class="form-group ml-2">
            <label for="hours">Hours</label>
            <input
              type="number"
              class="form-control"
              name="hours"
              id="hours"
              aria-describedby="hours"
              placeholder="Hours..."
              v-model="newJob.hours"
            />
          </div>
          <div class="form-group ml-2">
            <label for="rate">Rate</label>
            <input
              type="number"
              class="form-control"
              name="rate"
              id="rate"
              aria-describedby="rate"
              placeholder="Rate..."
              v-model="newJob.rate"
            />
          </div>
          <button type="submit" class="btn btn-outline-success">Submit</button>
          <button type="button" class="btn btn-danger" @click="jobForm = !jobForm; newJob={}">Cancel</button>
        </form>
      </div>
    </div>
    <div class="row">
      <job v-for="job in jobs" :key="job._id" :jobProp="job" />
    </div>
  </div>
</template>

<script>
import Job from "./JobComponent.vue";

export default {
  name: "Jobs",
  // NOTE mounted fires at the first startup of the template being added to the page
  mounted() {
    this.$store.dispatch("getAllJobs");
  },
  data() {
    return {
      newJob: {},
      jobForm: false
    };
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },
  methods: {
    createJob() {
      this.$store.dispatch("createJob", { ...this.newJob });
      this.newJob = {};
    }
  },
  components: {
    Job
  }
};
</script>

<style>
</style>