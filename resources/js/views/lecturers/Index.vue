<template>
<el-row style="margin:auto;">
    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
    
        <!-- Card -->
        <el-card class="box-card">

            <!-- Card Title -->
            <div slot="header" class="clearfix">
                <span>Lecturers</span>
            </div>
        
            <!-- Table -->
            <el-table
                :data="items"
                style="width:100%;"
                max-height="550"
                router="true"
                stripe="true"
                border="true">
            
                <!-- Name -->
                <el-table-column
                    fixed
                    prop="name"
                    label="Name"
                    width="240">
                </el-table-column>

                <!-- Address -->
                <el-table-column
                    fixed
                    prop="address"
                    label="Address"
                    width="320">
                </el-table-column>

                <!-- Email -->
                <el-table-column
                    fixed
                    prop="email"
                    label="Email"
                    width="260">
                </el-table-column>

                <!-- Phone -->
                <el-table-column
                    fixed
                    prop="phone"
                    label="Phone Number"
                    width="150">
                </el-table-column>

                <!-- Buttons -->
                <el-table-column
                    fixed="right"
                    label="Operations"
                    width="300"
                    router="true">

                    <template slot-scope="scope">
                        <!-- View -->
                        <el-col :span="8">
                            <el-button
                                type="primary">
                                
                                <router-link 
                                    style="text-decoration:none; color:white;" 
                                    :to="`/lecturers/show/${scope.row.id}`">
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
                                    :to="`/lecturers/edit/${scope.row.id}`">
                                    <i class="el-icon-edit"></i> Edit
                                </router-link>
                            </el-button>
                        </el-col>

                        <!-- Delete -->
                        <el-col :span="8">
                            <Delete v-bind:id="scope.row.id" v-on:row-deleted="deleteRow(scope.$index, items)" />
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
            items: []
        }
    },

    methods : {
        deleteRow(index){
            this.items.splice(index, 1);
        }
    },

    mounted() {
        let app = this;
        let token = localStorage.getItem('token');
        axios.get('/api/lecturers', {
            headers: {
                Authorization: "Bearer " + token
            }
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