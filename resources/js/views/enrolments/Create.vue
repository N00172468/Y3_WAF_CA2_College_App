<template>
<el-row style="margin:auto;">
    <el-col :span="24">

        <!-- Card -->
        <el-card class="box-card">

            <!-- Card Title -->
            <div slot="header" class="clearfix">
                <span>Add an Enrolment</span>
            </div>

            <!-- Form -->
            <el-form 
                @submit="onSubmit"
                :model="form" 
                :rules="rules"
                ref="form" 
                class="demo-ruleForm">

                <!-- Row 1 -->
                <el-row :gutter="50">
                    <!-- Date -->
                    <el-col :span="12">
                        <el-form-item 
                            id="input-group-1"
                            label-for="input-1" 
                            prop="date" 
                            label="Date">
                            
                            <el-date-picker
                                style="width:350px;"
                                id="input-1"
                                type="date"
                                placeholder="Date" 
                                format="yyyy/MM/dd"
                                value-format="yyyy-MM-dd"
                                v-model="form.date">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>

                    <!-- Time -->
                    <el-col :span="12">
                        <el-form-item 
                            id="input-group-2"
                            label-for="input-2" 
                            prop="time" 
                            label="Time">
                            
                            <el-time-picker
                                format="HH:mm:ss"
                                value-format="HH:mm:ss"
                                style="width:350px;"
                                id="input-2"
                                type="time"
                                placeholder="Time" 
                                v-model="form.time">
                            </el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Row 2 -->
                <el-row>
                    <!-- Status -->
                    <el-col :span="24">
                        <el-form-item
                            id="input-group-3"
                            label-for="input-3"
                            prop="status" 
                            label="Status">

                            <el-select
                                style="width:100%;"
                                id="input-3"
                                placeholder="Please Choose Status"
                                v-model="form.status">
                                
                                <el-option
                                    label="Interested"
                                    value="interested">
                                </el-option>

                                <el-option
                                    label="Assigned"
                                    value="assigned">
                                </el-option>
                                
                                <el-option
                                    label="Associated"
                                    value="associate">
                                </el-option>

                                <el-option
                                    label="Career Break"
                                    value="career_break">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Row 3 -->
                <el-row>
                    <!-- Course I.D -->
                    <el-col :span="12">
                        <el-form-item 
                            id="input-group-4"
                            label-for="input-4"
                            prop="course_id" 
                            label="Course">
                            
                            <el-select
                                style="width:350px;"
                                id="input-4"
                                placeholder="Please Choose Course"
                                v-model="form.course_id">
                                
                                    <el-option
                                        v-for="item in courses"
                                        :key="item.id"
                                        :label="item.title"
                                        :value="item.id">
                                    </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <!-- Lect I.D -->
                    <el-col :span="12">
                        <el-form-item 
                            id="input-group-5"
                            label-for="input-5"
                            prop="lecturer_id" 
                            label="Lecturer I.D">

                            <el-select
                                style="width:350px;"
                                id="input-4"
                                placeholder="Please Choose Lecturer"
                                v-model="form.lecturer_id">
                                    <el-option
                                        v-for="item in lecturers"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                    </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Row 4 -->
                <el-row>
                    <el-col :span="24">
                        <el-form-item>
                            <el-button @click="onSubmit" type="primary">Submit</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>

        </el-card>

    </el-col>
</el-row>
</template>

<script>
export default {
    data() {
        return {
            form: {
                date: "",
                time: "",
                status: "",
                course_id: "",
                lecturer_id: ""
            },
            rules: {
                date: [
                    { 
                        type: 'date',
                        required: true, 
                        messgae: 'Please input Date', 
                        trigger: 'blur' 
                    }
                ],
                time: [
                    { 
                        type: 'time',
                        required: true, 
                        messgae: 'Please input Time.', 
                        trigger: 'blur' 
                    }
                ],
                status: [
                    { 
                        required: true, 
                        messgae: 'Please input Status', 
                        trigger: 'blur' 
                    }
                ],
                course_id: [
                    { 
                        required: true, 
                        messgae: 'Please input Course', 
                        trigger: 'blur' 
                    }
                ],
                lecturer_id: [
                    { 
                        required: true, 
                        messgae: 'Please input Lecturer', 
                        trigger: 'blur' 
                    }
                ]
            },
            loggedIn: false,
            errors: [],
            courses: [],
            lecturers: []
        }
    },

    created() {
        if(localStorage.getItem('token')) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
            app.$router.push('/');
        }

        let app = this;
        let token = localStorage.getItem('token');
        
        axios.get('/api/courses', {
            headers: { Authorization: "Bearer " + token }
        })
        .then(function (response) {
            console.log(response.data);
            app.courses = response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        })

        axios.get('/api/lecturers', {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(function (response) {
            console.log(response.data);
            app.lecturers = response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        })
    },

    methods: {
        onSubmit(evt) {
            evt.preventDefault()

            let app = this;
            let token = localStorage.getItem('token');
            
            axios.post('/api/enrolments', {
                date: app.form.date,
                time: app.form.time,
                status: app.form.status,
                course_id: app.form.course_id,
                lecturer_id: app.form.lecturer_id,
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(function(response) {
                console.log(response);
                app.$router.push('/enrolments');
            })
            .catch(function(error) {
                console.log(error.response.data);

                app.errors = errors.response.data.errors
            })
        }
    }
}
</script>