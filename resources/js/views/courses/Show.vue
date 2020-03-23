<template>
<el-row style="margin:auto;">
    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
    
        <!-- Card -->
        <el-card class="box-card">
        
            <!-- Card Title and Buttons -->
            <div>
                <el-row>
                    <el-col :span="16">
                        <h1 style="text-transform:uppercase;">{{ course.title }}</h1>
                    </el-col>

                    <!-- Edit -->
                    <el-col :span="7">
                        <el-button
                            style="float:right;"
                            type="warning">

                            <router-link
                                style="text-decoration:none; color:white;" 
                                :to="`/courses/edit/${ course.id }`">
                                    <i class="el-icon-edit"></i> Edit
                            </router-link>
                        </el-button>
                    </el-col>

                    <!-- Delete -->
                    <el-col :span="1">
                        <el-button
                            style="float:right;"
                            type="danger"
                            circle>

                            <router-link
                                style="text-decoration:none; color:white;" 
                                :to="`/courses/edit/${ course.id }`">
                                    <i class="el-icon-delete"></i>
                            </router-link>
                        </el-button>
                    </el-col>
                </el-row>
            </div>

            <!-- Card Body -->
            <div>
                <!-- Code -->
                <el-divider>
                    <span style="color:#409EFF; font-size:1.6em;">Code</span>
                </el-divider>
                
                <el-row style="padding:1%;">
                    <el-col :span="24">
                        <h4 style="text-align:center;">{{ course.code }}</h4>
                    </el-col>
                </el-row>
                
                <!-- Description -->
                <el-divider>
                    <span style="color:#409EFF; font-size:1.6em;">Description</span>
                </el-divider>
                
                <el-row style="padding:1.5%;">
                    <el-col :span="24">
                        <h5 style="text-align:center;">{{ course.description }}</h5>
                    </el-col>
                </el-row>

                <!-- Points -->
                <el-divider>
                    <span style="color:#409EFF; font-size:1.6em;">Points</span>
                </el-divider>
                
                <el-row style="padding:1.5%;">
                    <el-col :span="24">
                        <h4 style="text-align:center;">
                            {{ course.points }}
                        </h4>
                    </el-col>
                </el-row>

                <!-- Level -->
                <el-divider>
                    <span style="color:#409EFF; font-size:1.6em;">Level</span>
                </el-divider>
                
                <el-row style="padding:1.5%;">
                    <el-col :span="24">
                        <h4 style="text-align:center;">
                            {{ course.level }}
                        </h4>
                    </el-col>
                </el-row>
            </div>
        
        </el-card>

        <!-- Show More Courses Table -->
        <el-row>
            <el-col :span="24">
                <el-button
                    style="width:100%;"
                    type="primary">

                    <router-link
                        style="text-decoration:none; color:white;" 
                        :to="`/courses`">
                            <i class="el-icon-s-management"></i> Show More Courses
                    </router-link>
                </el-button>
            </el-col>
        </el-row>

    </el-col>
</el-row>
</template>

<script>
export default {
    data() {
        return {
            course: {},
            show: true,
            loggedIn: false
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
        
        axios.get(`/api/courses/${app.$route.params.id}`, {
            headers: { Authorization: "Bearer " + token }
        })
        .then(function (response) {
            app.course = response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    },
}
</script>