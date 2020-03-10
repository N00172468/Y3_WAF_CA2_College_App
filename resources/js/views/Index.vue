<template>
  <div>
    This is the Index page
  </div>
</template>
<script>
export default {
  name: 'index',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    login() {
      let app = this;
      axios.post('/api/login', {
        email: app.email,
        password: app.password
      })
      .then(function(response) {
        console.log(response.data);
        app.name = response.data.name;
        localStorage.setItem('token', response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  }
}
</script>
