<template>
<el-row style="margin:auto;">
    <el-col :span="24">

        <!-- Card -->
    <el-card class="box-card">
        
        <!-- Card Title -->
        <div slot="header" class="clearfix">
            <span>Add a Course</span>
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
                <!-- Title -->
                <el-col :span="12">
                    <el-form-item 
                        id="input-group-1"
                        label-for="input-1" 
                        prop="title" 
                        label="Title">
                        
                        <el-input 
                            style="width:350px;"
                            id="input-1"
                            type="text"
                            placeholder="Title" 
                            v-model="form.title">
                        </el-input>
                    </el-form-item>
                </el-col>

                <!-- Code -->
                <el-col :span="12">
                    <el-form-item 
                        id="input-group-2"
                        label-for="input-2"
                        prop="code" 
                        label="Code">
                        
                        <el-input 
                            style="width:350px;"
                            id="input-2"
                            type="text"
                            placeholder="Code" 
                            v-model="form.code">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <!-- Row 2 -->
            <el-row>
                <!-- Description -->
                <el-col :span="24">
                    <el-form-item
                        id="input-group-3"
                        label-for="input-3"
                        prop="description" 
                        label="Description">

                        <el-input
                            id="input-3"
                            type="textarea"
                            placeholder="Description" 
                            v-model="form.description">

                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <!-- Row 3 -->
            <el-row>
                <!-- Points -->
                <el-col :span="12">
                    <el-form-item 
                        id="input-group-4"
                        label-for="input-4"
                        prop="points" 
                        label="Points">
                        
                        <el-input-number
                            style="width:350px;"
                            id="input-4"
                            v-model.number="form.points">
                        </el-input-number>
                    </el-form-item>
                </el-col>

                <!-- Level -->
                <el-col :span="12">
                    <el-form-item 
                        id="input-group-5"
                        label-for="input-5"
                        prop="level" 
                        label="Level">
                        
                        <el-input-number
                            style="width:350px;"
                            id="input-5"
                            v-model.number="form.level">
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
</template>

<script>


export default {
    data() {
        return {
            form: {
                title: "",
                code: "",
                description: "",
                points: "",
                level: ""
            },
            rules: {
                title: [
                    { 
                        required: true, 
                        messgae: 'Please input Title', 
                        trigger: 'blur' 
                    }
                ],
                code: [
                    { 
                        required: true, 
                        messgae: 'Please input Code. Code must be less than 5 characters!', 
                        trigger: 'blur' 
                    }
                ],
                description: [
                    { 
                        required: true, 
                        messgae: 'Please input Description', 
                        trigger: 'blur' 
                    }
                ],
                points: [
                    { 
                        type: 'number',
                        required: true, 
                        messgae: 'Please input Points', 
                        trigger: 'blur' 
                    }
                ],
                level: [
                    { 
                        type: 'number',
                        required: true, 
                        messgae: 'Please input Level', 
                        trigger: 'blur' 
                    }
                ],
            },
            loggedIn: false,
            errors: []
        }
    },
    computed: {
        codeValid() {
            return this.form.code.length <= 5 && this.form.code.length > 0
        }
    },
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
            
            axios.post('/api/courses', {
                title: app.form.title,
                code: app.form.code,
                description: app.form.description,
                points: app.form.points,
                level: app.form.level,
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(function(response) {
                console.log(response);
                app.$router.push('/courses');
            })
            .catch(function(error) {
                console.log(error.response.data);

                app.errors = errors.response.data.errors
            })
        }
    }
}
</script>