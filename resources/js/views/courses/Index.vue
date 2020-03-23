<template>
<el-row style="margin:auto;" type="flex" justify="center" align="middle">
  <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

    <!-- Card -->
    <el-card class="box-card">

      <!-- Card Title -->
        <div slot="header" class="clearfix">
            <span>Courses</span>
        </div>

      <!-- Table -->
      <el-table
        :data="items"
        style="width:100%;"
        max-height="550"
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
          width="520">
        </el-table-column>

        <!-- Points -->
        <el-table-column
          prop="points"
          label="Points"
          width="70">
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
          width="300"
          router="true">

          <template>
            <!-- View -->
            <el-col :span="8">
              <el-button
                @click="`/courses/show/${items.id}`"
                index="`/courses/show/${items.id}`"
                type="primary">
                  
                  <router-link 
                    style="text-decoration:none; color:white;" 
                    :to="`/courses/show/${items.id}`">
                      <i class="el-icon-data-line"></i> View
                  </router-link>
              </el-button>
            </el-col>

            <!-- Edit -->
            <el-col :span="8">
              <el-button
                @click="`/courses/edit/${items.id}`"
                index="`/courses/edit/${items.id}`"
                type="warning">
                  
                  <router-link 
                    style="text-decoration:none; color:white;" 
                    :to="`/courses/edit/${items.id}`">
                      <i class="el-icon-edit"></i> Edit
                  </router-link>
              </el-button>
            </el-col>

            <!-- Delete -->
            <el-col :span="8">
              <el-button
                @click="`/courses/edit/${items.id}`"
                index="`/courses/edit/${items.id}`"
                type="danger"
                circle>
                  
                  <router-link 
                    style="text-decoration:none; color:white;" 
                    :to="`/courses/edit/${items.id}`">
                      <i class="el-icon-delete"></i>
                  </router-link>
              </el-button>
            </el-col>
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
