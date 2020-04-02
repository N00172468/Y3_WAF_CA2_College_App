<template>
<el-row class="bgOverride" style="margin:auto;">
  <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

    <!-- ***IF LOGGED IN*** -->
    <!-- Before Fold -->
    <el-container v-if="loggedIn">

      <!-- <h1 >Log In, Complete</h1> -->

      <!-- Accordian Details -->
      <el-aside width="17%" style="padding-left:1%;">
        <el-collapse accordion>
          
          <!-- About the Project -->
          <el-collapse-item title="About the Project" name="1">
            <div>
              Ipsum Lipsum Lipsy Ipsy
            </div>
          </el-collapse-item>

          <!-- Dashboard -->
          <el-collapse-item title="Dashboard" name="2">
            <div>
              Ipsum Lipsum Lipsy Ipsy
            </div>
          </el-collapse-item>

          <!-- CRUD -->
          <el-collapse-item title="C.R.U.D Functionalities" name="3">
            <div>
              Ipsum Lipsum Lipsy Ipsy
            </div>
          </el-collapse-item>

          <!-- Vue.js -->
          <el-collapse-item title="Vue.js" name="4">
            <div>
              Ipsum Lipsum Lipsy Ipsy
            </div>
          </el-collapse-item>

          <!-- Element UI -->
          <el-collapse-item title="Element U.I" name="5">
            <div>
              Ipsum Lipsum Lipsy Ipsy
            </div>
          </el-collapse-item>
        
        </el-collapse>
      </el-aside>

      <!-- Carousel for Tables -->
      <el-main>
        <el-carousel :interval="4000" type="card" height="600px">
          <!-- Course Table -->
          <el-carousel-item>
            <IndexCourse/>
          </el-carousel-item>

          <!-- Lects Table -->
          <el-carousel-item>
            <IndexLects/>
          </el-carousel-item>

          <!-- Enrol Table -->
          <el-carousel-item>
            <IndexEnrol/>
          </el-carousel-item>
        </el-carousel>
      </el-main>
    
    </el-container>

    <!-- After Fold -->
    <el-container v-if="loggedIn">
    
      <!-- Static Timestamp (For Aesthetics Only (Filler)) -->
      <el-aside width="50%">
        <div class="block">
          <el-timeline>

            <!-- Timestamp 1 -->
            <el-timeline-item type="success" timestamp="1/1/2020" placement="top">
              <el-card>
                <h4>Test 1</h4>
                <p>Ipsy Lipsy Shimmy Shimmy Yaaa</p>
              </el-card>
            </el-timeline-item>

            <!-- Timestamp 2 -->
            <el-timeline-item type="success" timestamp="15/2/2020" placement="top">
              <el-card>
                <h4>Test 2</h4>
                <p>Ipsy Lipsy Shimmy Shimmy Yaaa</p>
              </el-card>
            </el-timeline-item>

            <!-- Timestamp 3 -->
            <el-timeline-item type="warning" timestamp="21/3/2020" placement="top">
              <el-card>
                <h4>Test 3</h4>
                <p>Ipsy Lipsy Shimmy Shimmy Yaaa</p>
              </el-card>
            </el-timeline-item>

            <!-- Timestamp 4 -->
            <el-timeline-item type="danger" timestamp="1/4/2020" placement="top">
              <el-card>
                <h4>Test 4</h4>
                <p>Ipsy Lipsy Shimmy Shimmy Yaaa</p>
              </el-card>
            </el-timeline-item>

          </el-timeline>
        </div>
      </el-aside>

      <!-- Calendar -->
      <el-main>
        <el-calendar v-model="value"></el-calendar>
      </el-main>

    </el-container>

    <!-- ***IF LOGGED OUT*** -->
    <el-card v-else @submit="onSubmit" style="width:100%!important;" class="box-card">

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
</template>

<script>
import IndexCourse from './courses/Index'
import IndexLects from './lecturers/Index'
import IndexEnrol from './enrolments/Index'

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
    IndexCourse,
    IndexLects,
    IndexEnrol
  }
}
</script>

<style scoped>
  .bgOverride {
    background: #171c24 !important;
  }
</style>