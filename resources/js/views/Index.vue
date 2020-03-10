<template>
<div>
  <h1 v-if="loggedIn">You are Logged In!</h1>
  
  <b-form v-else @submit="onSubmit">
    <!-- Email -->
    <b-form-group 
        id="input-group-1" 
        label="Email" 
        label-for="input-1">
        
        <b-form-input 
            v-model="form.email"
            id="input-1"
            type="email"
            placeholder="Email"
            required>
        </b-form-input>
    </b-form-group>

    <!-- Password -->
    <b-form-group 
        id="input-group-2" 
        label="Password" 
        label-for="input-2">
        
        <b-form-input 
            v-model="form.password"
            id="input-2"
            type="password"
            placeholder="Password"
            required>
        </b-form-input>
    </b-form-group>

    <!-- Submit Button -->
    <b-button type="submit" variant="primary">
        Submit
    </b-button>
  </b-form>
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
      },
      loggedIn: false
    }
  },
  created() {
    if(localStorage.getItem('token')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
      app.$router.push('/');
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
