<template>
  <div>
    <MyNavbar />
    <el-container>
      <router-view />
    </el-container>
  </div>
</template>
<script>
import MyNavbar from './components/MyNavbar'

export default {
  name: 'app',
  components: {
    MyNavbar
  },
  data() {
    return {

    }
  }
}
</script>
<style>
</style>
