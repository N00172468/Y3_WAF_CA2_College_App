<template>
<el-row class="24">
  <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
    
    <el-menu
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
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
          <i class="el-icon-document"></i>
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
          <i class="el-icon-document"></i>
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
          <i class="el-icon-document"></i>
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
      <el-col :span="3" :offset="12">
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>Options</span>
        </template>

        <!-- Profile -->
        <el-menu-item-group title="View Your Profile">
          <el-menu-item index="`/users/1`">Profile</el-menu-item>
        </el-menu-item-group>

        <!-- Logout -->
        <el-menu-item-group title="Goodbye For Now">
          <el-menu-item @click="logout">Logout</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      </el-col>
    </el-menu>
  
  </el-col>
</el-row>
  <!-- <div>
  <b-navbar toggleable="sm" type="dark" variant="dark">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav> -->
      <!-- Home Nav Link -->
      <!-- <b-nav-item to="/">Home</b-nav-item> -->

      <!-- Courses Dropdown Nav Link -->
      <!-- <b-nav-item-dropdown text="Courses" left>
        <b-dropdown-item to="/courses">View All</b-dropdown-item>
        <b-dropdown-item to="/courses/create">Create</b-dropdown-item>
      </b-nav-item-dropdown> -->

      <!-- Lecturers Dropdown Nav Link -->
      <!-- <b-nav-item-dropdown text="Lecturers" left>
        <b-dropdown-item to="/lecturers">View All</b-dropdown-item>
        <b-dropdown-item to="/lecturers/create">Create</b-dropdown-item>
      </b-nav-item-dropdown> -->

      <!-- Enrolments Dropdown Nav Link -->
      <!-- <b-nav-item-dropdown text="Enrolments" left>
        <b-dropdown-item to="/enrolments">View All</b-dropdown-item>
        <b-dropdown-item to="/enrolments/create">Create</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav> -->

    <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right> -->
          <!-- Using 'button-content' slot -->
          <!-- <template v-slot:button-content>
            <em>User</em>
          </template> -->
          <!-- View user by id -->
          <!-- <b-dropdown-item :to="`/users/1`">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div> -->
</template>

<script>
export default {
  name: "myNavbar",
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.navbar {
  margin-bottom: 40px;
}
</style>
