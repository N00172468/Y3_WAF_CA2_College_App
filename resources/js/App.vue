<template>
  <div>
    <MyNavbar /> <!-- Render Navbar first per page (unless user is not logged in) -->

    <el-container>
      <router-view /> <!-- Render selected pages mentioned in router file -->
    </el-container>
  </div>
</template>

<script>
import MyNavbar from './components/MyNavbar' // Needed to use component

export default {
  name: 'app',

  components: { // Needed to display components
    MyNavbar
  }
}
</script>
