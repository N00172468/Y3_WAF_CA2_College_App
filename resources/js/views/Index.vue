<template>
<el-row style="width:98%; margin:auto;">
  <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

    <!-- ***IF LOGGED IN*** -->
    <el-container v-if="loggedIn">

      <!-- <h1 >Log In, Complete</h1> -->

      <!-- Accordian Details -->
      <el-aside width="25%">
        <el-collapse accordion>
          
          <!-- About the Project -->
          <el-collapse-item title="About the Project" name="1">
            <h5>
              Ipsum Lipsum Lipsy Ipsy
            </h5>
          </el-collapse-item>

          <!-- Dashboard -->
          <el-collapse-item title="Dashboard" name="2">
            <h5>
              Ipsum Lipsum Lipsy Ipsy
            </h5>
          </el-collapse-item>

          <!-- CRUD -->
          <el-collapse-item title="C.R.U.D Functionalities" name="3">
            <h5>
              Ipsum Lipsum Lipsy Ipsy
            </h5>
          </el-collapse-item>

          <!-- Vue.js -->
          <el-collapse-item title="Vue.js" name="4">
            <h5>
              Ipsum Lipsum Lipsy Ipsy
            </h5>
          </el-collapse-item>

          <!-- Element UI -->
          <el-collapse-item title="Element U.I" name="5">
            <h5>
              Ipsum Lipsum Lipsy Ipsy
            </h5>
          </el-collapse-item>
        
        </el-collapse>
      </el-aside>

      <!-- Carousel for Tables -->
      <el-main>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-main>
    
    </el-container>


    <!-- ***IF LOGGED OUT*** -->
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

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>