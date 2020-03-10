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
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      let app = this;

      axios.post('/api/login', {
        email: app.form.email,
        password: app.form.password
      })
      .then(function(response) {
        console.log(response);
        localStorage.setItem('token', response.data.token)
      })
      .catch(function(error) {
        console.log(error);
      })
    }
  }
}
</script>
