<template>
<el-row class="bgOverride">
  <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

    <!-- ***IF LOGGED IN*** -->
    <!-- Before Fold -->
    <el-container v-if="loggedIn">

      <!-- <h1 >Log In, Complete</h1> -->

      <!-- Accordian Details -->
      <el-aside width="17%" style="padding-left:1%;">
        <Accordion />
      </el-aside>

      <!-- Carousel for Tables -->
      <el-main>
        <Carousel />
      </el-main>
    
    </el-container>

    <!-- After Fold -->
    <el-container v-if="loggedIn">
    
      <!-- Static Timestamp (For Aesthetics Only (Filler)) -->
      <el-aside width="50%">
        <Timestamp />
      </el-aside>

      <!-- Calendar -->
      <el-main>
        <Calendar />
      </el-main>

    </el-container>



    <!-- ***IF LOGGED OUT*** -->
    <el-card 
      v-else 
      @submit="onSubmit" 
      style="width:80%; position:fixed; margin:9%!important; background:#171c24" 
      class="box-card">

      <!-- Card Title -->
      <div slot="header" class="clearfix">
        <span>
          <h1 
            style="text-align:center;">
            Welcome to Edu<span style="color:#409EFF;">Board</span>
          </h1>
          <br/>
            <el-col :span="12">
              Please log in with your provided credentials. 
            </el-col>

            <el-col :span="12" style="text-align:right;">
              <span style="font-size:0.6em; color:#29313d;">
                (Pssst! Your credentials are sam@bloggs.com / secret)
              </span>
            </el-col>
        </span>
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
</template>

<script>
import Accordion from '../components/Accordion'
import Carousel from '../components/Carousel'
import Timestamp from '../components/Timestamp'
import Calendar from '../components/Calendar'

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

      loggedIn: false,

      value: new Date()
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
    Accordion,
    Carousel,
    Timestamp,
    Calendar
  }
}
</script>

<style scoped>
  .bgOverride {
    background: #171c24 !important;
  }
</style>