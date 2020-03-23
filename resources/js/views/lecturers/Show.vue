<template>
<el-row style="width: 95%; margin:auto;">
    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
    
        <!-- Card -->
        <el-card class="box-card">
            
                <!-- Card Title and Buttons -->
            <div>
                <el-row>
                    <el-col :span="16">
                        <h1 style="text-transform:uppercase;">{{ lecture.name }}</h1>
                    </el-col>

                    <!-- Edit -->
                    <el-col :span="7">
                        <el-button
                            style="float:right;"
                            type="warning">

                            <router-link
                                style="text-decoration:none; color:white;" 
                                :to="`/courses/edit/${ lecture.id }`">
                                    <i class="el-icon-edit"></i> Edit
                            </router-link>
                        </el-button>
                    </el-col>

                    <!-- Delete -->
                    <el-col :span="1">
                        <Delete />
                    </el-col>
                </el-row>
            </div>

            <!-- Card Body -->
            <div>
                <!-- Address -->
                <el-divider>
                    <span style="color:#409EFF; font-size:1.6em;">Address</span>
                </el-divider>
                
                <el-row style="padding:1%;">
                    <el-col :span="24">
                        <h4 style="text-align:center;">{{ lecture.address }}</h4>
                    </el-col>
                </el-row>

                <!-- Email -->
                <el-divider>
                    <span style="color:#409EFF; font-size:1.6em;">Email</span>
                </el-divider>
                
                <el-row style="padding:1%;">
                    <el-col :span="24">
                        <h4 style="text-align:center;">{{ lecture.email }}</h4>
                    </el-col>
                </el-row>

                <!-- Phone -->
                <el-divider>
                    <span style="color:#409EFF; font-size:1.6em;">Phone Number</span>
                </el-divider>
                
                <el-row style="padding:1%;">
                    <el-col :span="24">
                        <h4 style="text-align:center;">{{ lecture.phone }}</h4>
                    </el-col>
                </el-row>
            </div>
            
        </el-card>

        <!-- Show More Lecturers Table -->
        <el-row>
            <el-col :span="24">
                <el-button
                    style="width:100%;"
                    type="primary">

                    <router-link
                        style="text-decoration:none; color:white;" 
                        :to="`/lecturers`">
                            <i class="el-icon-s-custom"></i> Show More Lecturers
                    </router-link>
                </el-button>
            </el-col>
        </el-row>
        
    </el-col>
</el-row>
</template>

<script>
import Delete from './Delete'

export default {
    data() {
        return {
            lecture: {},
            show: true,
            loggedIn: false
        }
    },

    created() {
        if(localStorage.getItem('token')) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }

        let app = this;
        let token = localStorage.getItem('token');
        axios.get(`/api/lecturers/${app.$route.params.id}`, {
            headers: { Authorization: "Bearer " + token }
        })
        .then(function(response) {
            app.lecture = response.data.data;
        })
        .catch(function(error) {
            console.log(error);
        })
    },

    components: {
        Delete
    }
}
</script>