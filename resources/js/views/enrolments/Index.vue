<template>
<el-row style="margin:auto">
    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

        <!-- Card -->
        <el-card class="box-card">
        
            <!-- Card Title -->
            <div slot="header" class="clearfix">
                <span>Enrolments</span>
            </div>

            <!-- Table -->
            <el-table
                :data="items"
                style="width:100%;"
                max-height="550"
                router="true"
                stripe="true"
                border="true">
            
                <!-- Date -->
                <el-table-column
                    fixed
                    prop="date"
                    label="Date"
                    width="240">
                </el-table-column>

                <!-- Time -->
                <el-table-column
                    fixed
                    prop="time"
                    label="Time"
                    width="240">
                </el-table-column>

                <!-- Status -->
                <el-table-column
                    fixed
                    prop="status"
                    label="Status"
                    width="240">
                </el-table-column>

                <!-- Course ID -->
                <el-table-column
                    fixed
                    prop="course_id"
                    label="Course I.D"
                    width="240">
                </el-table-column>

                <!-- Lect ID -->
                <el-table-column
                    fixed
                    prop="lecturer_id"
                    label="Lecturer I.D"
                    width="240">
                </el-table-column>    

                <!-- Buttons -->
                <el-table-column
                    fixed="right"
                    label="Operations"
                    width="120"
                    router="true">

                    <template>
                        <el-button
                            @click="`/enrolments/edit/${items.id}`"
                            index="`/enrolments/edit/${items.id}`"
                            type="warning">
                            
                            <router-link 
                                style="text-decoration:none; color:white;" 
                                :to="`/enrolments/edit/${items.id}`">
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
                    <b-th>Date</b-th>
                    <b-th>Time</b-th>
                    <b-th>Status</b-th>
                    <b-th>Course I.D</b-th>
                    <b-th>Lecturer I.D</b-th>
                </b-tr>
            </b-head>
            <br/>
            <b-body>
                <b-tr v-for="item in items" :key="item.id">
                    <b-td>{{ item.date }}</b-td>
                    <b-td>{{ item.time }}</b-td>
                    <b-td>{{ item.status }}</b-td>
                    <b-td>{{ item.course_id }}</b-td>
                    <b-td>{{ item.lecturer_id }}</b-td>
                    <b-td><router-link :to="`/enrolments/edit/${item.id}`">Edit</router-link></b-td>
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
        
        axios.get('/api/enrolments', {
            headers: { Authorization: "Bearer " + token }
        })
        .then(function (response) {
            console.log(response.data);
            app.items = response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}
</script>