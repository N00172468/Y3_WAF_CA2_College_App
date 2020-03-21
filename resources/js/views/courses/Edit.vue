<template>
<el-row>
  <el-col :span="24" :offset="10">
  
    <h3 v-if="!loggedIn">You are not logged in!!</h3>

    <!-- Card -->
    <el-card v-else class="box-card">
        
      <!-- Card Title -->
      <div slot="header" class="clearfix">
        <span>Edit Course</span>
      </div>

      <!-- Form -->
      <el-form 
        @submit="onSubmit"
        :model="form" 
        :rules="rules"
        ref="form" 
        class="demo-ruleForm">
      
        <!-- Row 1 -->
        <el-row :gutter="50">
          <!-- Title -->
          <el-col :span="12">
            <el-form-item 
              id="input-group-1"
              label-for="input-1" 
              prop="title" 
              label="Title">
              
              <el-input 
                style="width:350px;"
                id="input-1"
                type="text"
                placeholder="Title" 
                v-model="course.title">
              </el-input>
            </el-form-item>
          </el-col>

          <!-- Code -->
          <el-col :span="12">
            <el-form-item 
              id="input-group-2"
              label-for="input-2"
              prop="code" 
              label="Code">
                  
              <el-input 
                style="width:350px;"
                id="input-2"
                type="text"
                placeholder="Code" 
                v-model="course.code">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- Row 2 -->
        <el-row>    
          <!-- Description -->
          <el-col :span="24">
            <el-form-item
              id="input-group-3"
              label-for="input-3"
              prop="description" 
              label="Description">

              <el-input
                id="input-3"
                type="textarea"
                placeholder="Description" 
                v-model="course.description">

              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- Row 3 -->
        <el-row>
          <!-- Points -->
          <el-col :span="12">
            <el-form-item 
              id="input-group-4"
              label-for="input-4"
              prop="points" 
              label="Points">
              
              <el-input-number
                style="width:350px;"
                id="input-4"
                v-model.number="course.points">
              </el-input-number>
            </el-form-item>
          </el-col>

          <!-- Level -->
          <el-col :span="12">
            <el-form-item 
              id="input-group-5"
              label-for="input-5"
              prop="level" 
              label="Level">
              
              <el-input-number
                style="width:350px;"
                id="input-5"
                v-model.number="course.level">
              </el-input-number>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- Row 4 -->
        <el-row>
          <el-col :span="24">
            <el-form-item>
              <el-button @click="onSubmit" type="primary">Save</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    
    </el-card>
  
  </el-col>
</el-row>
  <!-- <b-row align-h="center">
    <b-col cols="8">
      <h3 v-if="!loggedIn">You are not logged in!!</h3>
      <b-card
        v-else
        title="Edit Course"
        tag="article"
      >

        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Title:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="course.title"
              type="text"
              required
              placeholder="Enter title"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Code:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="course.code"
              type="text"
              required
              placeholder="Enter code"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Description:"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="course.description"
              type="text"
              required
              placeholder="Enter description"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Points:"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="course.points"
              type="number"
              required
              placeholder="Enter points"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-5"
            label="Level:"
            label-for="input-5"
          >
            <b-form-input
              id="input-5"
              v-model="course.level"
              type="number"
              required
              placeholder="Enter level"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-card>
    </b-col>
  </b-row> -->
</template>

<script>
  export default {
    data() {
      return {
        course: {},
        show: true,
        loggedIn: false
      }
    },

    created() {
      if (localStorage.getItem('token')) {
        this.loggedIn = true;
      }
      else {
        this.loggedIn = false;
      }

      let app = this;
      let token = localStorage.getItem('token');
      
      axios.get(`/api/courses/${app.$route.params.id}`, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(function (response) {
        app.course = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },

    methods: {
      onSubmit(evt) {
        evt.preventDefault()

        let app = this;
        let token = localStorage.getItem('token');
        axios.put(`/api/courses/${app.$route.params.id}`, {
            title: app.course.title,
            code: app.course.code,
            description: app.course.description,
            points: app.course.points,
            level: app.course.level,
        },
        {
          headers: { Authorization: "Bearer " + token }
        })
        .then(function (response) {
          app.$router.push('/courses');
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>
