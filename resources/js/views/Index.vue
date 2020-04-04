<template>
<el-row class="bgOverride"> <!-- Override dark theme colour specifically for Dashboard page -->
  <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24"> <!-- Element UI's method for responive.
                                                                        Element UI also have 24 columns instead of the standard 12 -->
    <el-container v-if="loggedIn"> <!-- If user is logged in, display nav and dashboard -->
      <!-- Accordian Details -->
      <el-aside width="17%" style="padding-left:1%;">
        <Accordion />
      </el-aside>

      <!-- Rotating Table-Carousel -->
      <el-main>
        <Carousel />
      </el-main>
    </el-container>

    <el-container v-if="loggedIn"> <!-- "v-if" is need again due to el-container acting as an additional template -->
      <!-- Static Timestamp (For Aesthetics Only (Filler)) -->
      <el-aside width="50%">
        <Timestamp />
      </el-aside>

      <!-- Calendar -->
      <el-main>
        <Calendar />
      </el-main>
    </el-container>

    <!-- If user is not logged in, display log in form -->
    <el-card 
      v-else 
      @submit="onSubmit" 
      style="width:80%; position:fixed; margin:9%!important; background:#171c24" 
      class="box-card"> <!-- Overriding dark theme for log in form -->

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
        class="demo-ruleForm"> <!-- ":model" is used to fetch email & password within form (see Script)
                                    ":rules" is used for Element UI validation (see Script) -->
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
                v-model="form.email"> <!-- "v-model" binds prop to component -->
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
              <el-button @click="onSubmit" type="primary">Log In</el-button> <!-- When button is clicked, activate "onSubmit" method (see Script), "type=primary" displays primary colour of Element UI -->
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
  
  // Data needed for this page
  data() {
    return {
      form: {
        email: "",
        password: ""
      }, // Props for form

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
      }, // Validation rules for form

      loggedIn: false, // Boolean if user is logged in. By default, it's false.
    }
  },

  // This hook is used to run code after an instance has been created.
  created() {
    if(localStorage.getItem('token')) {
      this.loggedIn = true; // If data inputted matches data from API stored in "localStorage", trigger "loggedIn" boolean to true.
    } else {
      this.loggedIn = false;
      app.$router.push('/'); // If data inputted does not match, direct to route.
    }
  },

  // Methods created awaiting to be called out. 
  methods: {
    onSubmit(evt) {
      evt.preventDefault(); // This event method cancels the event if it is cancelable (i.e. the default action that belongs to the event will not occur). 

      let app = this;

      axios.post('/api/login', { // POST Request within Axios, used for storing. Requests web server to accept data enclosed in the body of request message. 
        email: app.form.email,
        password: app.form.password
      })
      .then(function(response) { // Activated once the above has been performed. Hence ".then()".
        console.log(response);
        localStorage.setItem('token', response.data.token) // When a key name & value has been passed, this method would either add that key to the given storage object (i.e. "localStorage") or update the key's value if it already exists.
        location.reload(); // This native DOM method allows the current page to refresh once the method (i.e. "onSubmit()") has been activated.
      })
      .catch(function(error) { // If an error occurs, catch it. Hence ".catch()".
        console.log(error);
      })
    }
  },

  // Needed to display components within this template.
  components: {
    Accordion,
    Carousel,
    Timestamp,
    Calendar
  }
}
</script>

<style scoped> /* "scoped" specifies to this file only */
  /* Override Dark theme background for this page */
  .bgOverride {
    background: #171c24 !important;
  }
</style>