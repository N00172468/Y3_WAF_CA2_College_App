<template>
<el-row style="width:98%; margin:auto;">
  <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

    <h1 v-if="loggedIn">Log In, Complete</h1>

    <!-- Card -->
    <el-card v-else @submit="onSubmit" class="box-card">

      <!-- Card Title -->
      <div slot="header" class="clearfix">
        <span>Log In</span>
      </div>

      <!-- Form -->
      <el-form 
        @submit="onSubmit"
        :model="form" 
        :rules="rules"
        ref="form" 
        class="demo-ruleForm">
      
        <!-- Row 1 -->
        <el-row>
          <!-- Email -->
          <el-col :span="24">
            <el-form-item 
              id="input-group-1"
              label-for="input-1" 
              prop="email" 
              label="Email">
              
              <el-input 
                id="input-1"
                type="email"
                placeholder="Email" 
                v-model="form.email">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- Row 2 -->
        <el-row>
          <!-- Email -->
          <el-col :span="24">
            <el-form-item 
              id="input-group-2"
              label-for="input-2" 
              prop="password" 
              label="Password">
              
              <el-input 
                id="input-2"
                type="password"
                placeholder="Password" 
                v-model="form.password">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- Row 3 -->
        <el-row>
          <el-col :span="24">
            <el-form-item>
              <el-button @click="onSubmit" type="primary">Log In</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

    </el-card>

  </el-col>
</el-row>
<!-- <h1> -->
  <!-- <h1 v-if="loggedIn">You are Logged In!</!--> 
  
  <!-- <b-form v-else @submit="onSubmit"> -->
    <!-- Email -->
    <!-- <b-form-group 
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
    </b-form-group> -->

    <!-- Password -->
    <!-- <b-form-group 
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
    </b-form-group> -->

    <!-- Submit Button -->
    <!-- <b-button type="submit" variant="primary">
        Submit
    </!-->
  <!-- </b-form>
</div> --> 
</template>

<script>
export default {
  name: 'index',

  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Please input Email',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'Please input Password',
            trigger: 'blur'
          }
        ]
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
        location.reload();
      })
      .catch(function(error) {
        console.log(error);
      })
    }
  },

  components: {

  }
}
</script>
