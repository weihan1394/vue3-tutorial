<template>
  <h1>Edit Project</h1>

  <form @submit.prevent="handleSubmit">
    <label>Title: </label>
    <input type="text" required v-model="title" />
    <label>Details</label>
    <textarea required v-model="details" />
    <button @click="updateProject">Update Project</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
      uri: 'http://localhost:3000/projects/' + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((response) => response.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
        console.log(data);
      });
  },
  methods: {
    // update
    updateProject() {
      let project = {
        title: this.title,
        details: this.details,
      };
      fetch(this.uri, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      })
        .then(() => {
          this.$router.push('/');
        })
        .catch((err) => {
          console.log(err.json);
        });
    },
  },
};
</script>

<style></style>
