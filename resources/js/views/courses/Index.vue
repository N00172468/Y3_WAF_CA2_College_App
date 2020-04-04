<template>
<el-row class="bgReset" style="margin:auto;" type="flex" justify="center" align="middle">
  <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

    <!-- Card -->
    <el-card class="box-card">

      <!-- Card Title -->
        <div slot="header" class="clearfix"> <!-- "slot" attribute based on Element UI docs. "clearfix" class is part of Flexbox. It confines contains together (i.e. acts as a div) -->
            <span>Courses</span>
        </div>

      <!-- Table -->
      <el-table
        :data="items"
        style="width:100%;"
        max-height="550"
        router="true"
        stripe="true"
        border="true"> <!-- ":data" fetches contents of items array (see Script). -->

        <!-- Title -->
        <el-table-column
          prop="title" 
          label="Title"
          width="240"> <!-- In Element UI,"prop" allows to display the chosen content within the "items" of data -->
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
 
          <template slot-scope="scope"> <!-- "slot-scope" attribute allows to receive props passed to a slot -->
            <!-- View -->
            <el-col :span="8">
              <el-button type="primary">
                  
                  <router-link 
                    style="text-decoration:none; color:white;" 
                    :to="`/courses/show/${scope.row.id}`"> <!-- "${scope.row.id}" specifies the ID of the object within the row -->
                      <i class="el-icon-data-line"></i> View
                  </router-link>
              </el-button>
            </el-col>

            <!-- Edit -->
            <el-col :span="8">
              <el-button
                type="warning">
                  
                  <router-link 
                    style="text-decoration:none; color:white;" 
                    :to="`/courses/edit/${scope.row.id}`">
                      <i class="el-icon-edit"></i> Edit
                  </router-link>
              </el-button>
            </el-col>

            <!-- Delete -->
            <el-col :span="8">
              <Delete v-bind:id="scope.row.id" v-on:row-deleted="deleteRow(scope.$index, items)" /> <!-- "v-bind" dynamically toggle classes. "v-on" listens for a DOM event/s and runs JS when they're triggered. 
                                                                                                          "row-deleted" is the DOM event that needs to be listened to (see Delete.vue componenet). 
                                                                                                          Once the event has been heard, activate "deleteRow" method (see Script) -->
            </el-col>
          </template>
        </el-table-column>
      </el-table>
    
    </el-card>

  </el-col>
</el-row>
</template>

<script>
import Delete from './Delete'

export default {
  data() {
    return {
      items: [] // Array to hold the API contents.
    }
  },
  methods : {
    deleteRow(index){
      this.items.splice(index, 1); // Once column has been deleted, remove column (i.e. splice) by refreshing after method has been activated.
    }
  },

  mounted(){
    let app = this;
    let token = localStorage.getItem('token');
    
    axios.get('/api/courses', {  // GET request within Axios. Used to retrieve data. 
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

  components: {
    Delete
  }
}
</script>

<style>
  body {
    background: none !important;
  }
</style>