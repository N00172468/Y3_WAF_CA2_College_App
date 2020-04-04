<template>
<el-row style="width:95%; margin:auto;">
    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
    
        <!-- Card -->
        <el-card class="box-card">
        
            <!-- Card Title and Buttons -->
            <div>
                <el-row>
                    <el-col :span="16">
                        <h1 style="text-transform:uppercase;"> Enrolment for {{ enrolment.date }}</h1>
                    </el-col>

                    <!-- Edit -->
                    <el-col :span="7">
                        <el-button
                            style="float:right;"
                            type="warning">

                            <router-link
                                style="text-decoration:none; color:white;" 
                                :to="`/enrolments/edit/${ enrolment.id }`">
                                    <i class="el-icon-edit"></i> Edit
                            </router-link>
                        </el-button>
                    </el-col>

                    <!-- Delete -->
                    <el-col :span="1">
                        <Delete v-on:row-deleted="routeBack()" />
                    </el-col>
                </el-row>
            </div>

            <!-- Card Body -->
            <div>
                <!-- Time -->
                <el-divider>
                    <span style="color:#409EFF; font-size:1.6em;">Time</span>
                </el-divider>
                
                <el-row style="padding:1%;">
                    <el-col :span="24">
                        <h4 style="text-align:center;">{{ enrolment.time }}</h4>
                    </el-col>
                </el-row>

                <!-- Status -->
                <el-divider>
                    <span style="color:#409EFF; font-size:1.6em;">Status</span>
                </el-divider>
                
                <el-row style="padding:1%;">
                    <el-col :span="24">
                        <h4 style="text-align:center;">{{ enrolment.status }}</h4>
                    </el-col>
                </el-row>

                <!-- Course ID -->
                <el-divider>
                    <span style="color:#409EFF; font-size:1.6em;">Course</span>
                </el-divider>
                
                <el-row style="padding:1%;">
                    <el-col :span="24">
                        <!-- As the course I.D has a relationship with the course table (in database), this allows the contents of courses to be fetched within the enrolments table -->
                        <h4 style="text-align:center;">{{ enrolment.course.title }}</h4>
                    </el-col>
                </el-row>

                <!-- Lect ID -->
                <el-divider>
                    <span style="color:#409EFF; font-size:1.6em;">Lecturer</span>
                </el-divider>
                
                <el-row style="padding:1%;">
                    <el-col :span="24">
                        <!-- As the lect I.D has a relationship with the lect table (in database), this allows the contents of lects to be fetched within the enrolments table -->
                        <h4 style="text-align:center;">{{ enrolment.lecturer.name}}</h4>
                    </el-col>
                </el-row>
            </div>
        
        </el-card>

        <!-- Show More Enrolment Table -->
        <el-row>
            <el-col :span="24">
                <el-button
                    style="width:100%;"
                    type="primary">

                    <router-link
                        style="text-decoration:none; color:white;" 
                        :to="`/enrolments`">
                            <i class="el-icon-s-management"></i> Show More Enrolments
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
            enrolment: {},
            show: true,
            loggedIn: false,
        }
    },

    created() {
        if (localStorage.getItem('token')) {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }

        let app = this;
        let token = localStorage.getItem('token');
        
        axios.get(`/api/enrolments/${app.$route.params.id}`, {
            headers: { Authorization: "Bearer " + token }
        })
        .then(function (response) {
            app.enrolment = response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        });

    },

    methods: {
        routeBack() {
            let app = this;
            app.$router.push('/enrolments');
        }
    },

    components: {
        Delete
    }
}
</script>