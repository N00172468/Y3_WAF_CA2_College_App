<template>
<el-row>
  <el-col :span="24" :offset="1">

    <!-- Card -->
    <el-card class="box-card">

      <!-- Table -->
      <el-table
        :data="items"
        style="width:100%;"
        max-height="600"
        router="true"
        stripe="true"
        border="true">

        <!-- Title -->
        <el-table-column
          fixed
          prop="title"
          label="Title"
          width="240">
        </el-table-column>

        <!-- Code -->
        <el-table-column
          prop="code"
          label="Code"
          width="120">
        </el-table-column>

        <!-- Description -->
        <el-table-column
          prop="description"
          label="Description"
          width="720">
        </el-table-column>

        <!-- Points -->
        <el-table-column
          prop="points"
          label="Points"
          width="100">
        </el-table-column>

        <!-- Level -->
        <el-table-column
          prop="level"
          label="Level"
          width="60">
        </el-table-column>

        <!-- Buttons -->
        <el-table-column
          fixed="right"
          label="Operations"
          width="120"
          router="true">

          <template>
            <el-button
              @click="`/courses/edit/${items.id}`"
              index="`/courses/edit/${items.id}`"
              type="warning">
                
                <router-link 
                  style="text-decoration:none; color:white;" 
                  :to="`/courses/edit/${items.id}`">
                    Edit
                </router-link>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    
    </el-card>

  </el-col>
</el-row>
  <!-- <b-row align-h="center">
    <b-col cols="12">

      <b-table-simple hover responsive>
        <b-head>
          <b-tr>
            <b-th>Title</b-th>
            <b-th>Code</b-th>
            <b-th>Description</b-th>
            <b-th>Points</b-th>
            <b-th>Level</b-th>
            <b-th>Actions</b-th>
          </b-tr>
        </b-head>
        <b-body>
          <b-tr v-for="item in items" :key="item.id">
            <b-td>{{ item.title }}</b-td>
            <b-td>{{ item.code }}</b-td>
            <b-td>{{ item.description }}</b-td>
            <b-td>{{ item.level }}</b-td>
            <b-td>{{ item.points }}</b-td>
            <b-td><router-link :to="`/courses/edit/${item.id}`">Edit</router-link></b-td>
          </b-tr>
        </b-body>
      </b-table-simple>
    </b-col>
  </b-row> -->
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },

  created(){
    let app = this;
    let token = localStorage.getItem('token');
    
    axios.get('/api/courses', {
      headers: { Authorization: "Bearer " + token}
    })
    .then(function (response) {
      console.log(response.data);
      app.items = response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    })
  },

  methods: {

  }
}
</script>
