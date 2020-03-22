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

                            <el-input
                                id="input-3"
                                type="text"
                                placeholder="Status" 
                                v-model="form.status">
                            </el-input>
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
                            label="Course I.D">
                            
                            <el-input-number
                                style="width:350px;"
                                id="input-4"
                                v-model.number="form.course_id">
                            </el-input-number>
                        </el-form-item>
                    </el-col>

                    <!-- Lect I.D -->
                    <el-col :span="12">
                        <el-form-item 
                            id="input-group-5"
                            label-for="input-5"
                            prop="lecturer_id" 
                            label="Lecturer I.D">
                            
                            <el-input-number
                                style="width:350px;"
                                id="input-5"
                                v-model.number="form.lecturer_id">
                            </el-input-number>
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
    <!-- <b-row>
        <b-col cols="8">
            <b-card title="Add Enrolment" tag="article">
                <b-form @submit="onSubmit"> -->
                    <!-- Date -->
                    <!-- <b-form-group
                        id="input-group-1"
                        label="Date"
                        label-for="input-1">

                        <b-form-input
                            v-model="form.date"
                            id="input-1"
                            type="date"
                            placeholder="Date"
                            required>
                        </b-form-input>
                    </b-form-group> -->

                    <!-- Time -->
                    <!-- <b-form-group
                        id="input-group-2"
                        label="Time"
                        label-for="input-2">

                        <b-form-input
                            v-model="form.time"
                            id="input-2"
                            type="time"
                            placeholder="Time"
                            required>
                        </b-form-input>
                    </b-form-group> -->

                    <!-- Status -->
                    <!-- <b-form-group
                        id="input-group-3"
                        label="Status"
                        label-for="input-3">

                        <b-form-input
                            v-model="form.status"
                            id="input-3"
                            type="text"
                            placeholder="Status"
                            required>
                        </b-form-input>
                    </b-form-group> -->

                    <!-- Course -->
                    <!-- <b-form-group
                        id="input-group-4"
                        label="Course I.D"
                        label-for="input-4">

                        <b-form-select
                            v-model="form.course_id"
                            id="input-4"
                            placeholder="Select Course"
                            required>
                        </b-form-select>
                    </b-form-group> -->

                    <!-- Lecture -->
                    <!-- <b-form-group
                        id="input-group-5"
                        label="Lecture I.D"
                        label-for="input-5">

                        <b-form-select
                            v-model="form.lecture_id"
                            id="input-5"
                            placeholder="Select Lecture"
                            required>
                        </b-form-select>
                    </b-form-group>
                </b-form>
            </b-card>
        </b-col>
    </b-row> -->
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
                        type: 'number',
                        required: true, 
                        messgae: 'Please input Course I.D', 
                        trigger: 'blur' 
                    }
                ],
                lecture_id: [
                    { 
                        type: 'number',
                        required: true, 
                        messgae: 'Please input Lecturer I.D', 
                        trigger: 'blur' 
                    }
                ]
            },
            loggedIn: false,
            errors: []
        }
    },

    // computed: {
    //     codeValid() {
    //         return this.form.code.length <= 5 && this.form.code.length > 0
    //     }
    // },

    created() {
        if(localStorage.getItem('token')) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
            app.$router.push('/');
        }
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