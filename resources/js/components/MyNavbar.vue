<template>
  <div>
  <b-navbar toggleable="sm" type="dark" variant="dark">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav>
      <!-- Home Nav Link -->
      <b-nav-item to="/">Home</b-nav-item>

      <!-- Courses Dropdown Nav Link -->
      <b-nav-item-dropdown text="Courses" left>
        <b-dropdown-item to="/courses">View All</b-dropdown-item>
        <b-dropdown-item to="/courses/create">Create</b-dropdown-item>
      </b-nav-item-dropdown>

      <!-- Lecturers Dropdown Nav Link -->
      <b-nav-item-dropdown text="Lecturers" left>
        <b-dropdown-item to="/lecturers">View All</b-dropdown-item>
        <b-dropdown-item to="/lecturers/create">Create</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <!-- View user by id -->
          <b-dropdown-item :to="`/users/1`">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
  name: "myNavbar",
  methods: {

  }
};
</script>
<style>
.navbar {
  margin-bottom: 40px;
}
</style>
