<template>
<el-row class="24">
  <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
    
    <el-menu
      v-if="loggedIn"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#1d2740"
      text-color="#fff"
      active-text-color="#ffd04b"
      router="true">

      <!-- Home -->
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span>Home</span>
      </el-menu-item>
      
      <!-- Courses -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-management"></i>
          <span>Courses</span>
        </template>

        <!-- View All -->
        <el-menu-item-group title="View Courses">
          <el-menu-item index="/courses">View All</el-menu-item>
        </el-menu-item-group>

        <!-- Create -->
        <el-menu-item-group title="Add Course">
          <el-menu-item index="/courses/create">Add</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- Lecturers -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>Lecturers</span>
        </template>

        <!-- View All -->
        <el-menu-item-group title="View Lecturers">
          <el-menu-item index="/lecturers">View All</el-menu-item>
        </el-menu-item-group>

        <!-- Create -->
        <el-menu-item-group title="Add Lecture">
          <el-menu-item index="/lecturers/create">Add</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- Enrolments -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-claim"></i>
          <span>Enrolments</span>
        </template>

        <!-- View All -->
        <el-menu-item-group title="View Enrolments">
          <el-menu-item index="/enrolments">View All</el-menu-item>
        </el-menu-item-group>

        <!-- Create -->
        <el-menu-item-group title="Add Enrolment">
          <el-menu-item index="/enrolments/create">Add</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- User Menu -->
      <el-row type="flex" justify="end">
        <el-col :span="4" :xl="3" :lg="4" :md="6" :sm="12" :xs="24">
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>Options</span>
            </template>

            <!-- Logout -->
            <el-menu-item-group title="Goodbye For Now">
              <el-menu-item @click="logout">Logout</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-col>
      </el-row>
    </el-menu>
  
  </el-col>
</el-row>
</template>

<script>
export default {
  name: "myNavbar",

  data() {
    return {
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    logout() {
      localStorage.removeItem('token');
      let app = this;
      app.$router.push('/');
      location.reload();
      console.log("Logged Out");
    }
  }
};
</script>

<style>
.navbar {
  margin-bottom: 40px;
}
</style>
