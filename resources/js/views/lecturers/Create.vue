<template>
<el-row style="margin:auto;">
    <el-col :span="24">

        <!-- Card -->
        <el-card class="box-card">
        
            <!-- Card Title -->
            <div slot="header" class="clearfix">
                <span>Add a Lecturer</span>
            </div>
        
            <!-- Form -->
            <el-form 
                @submit="onSubmit"
                :model="form" 
                :rules="rules"
                ref="form" 
                class="demo-ruleForm">

                <!-- Row 1 -->
                <el-row>
                    <!-- Name -->
                    <el-col :span="24">
                        <el-form-item 
                            id="input-group-1"
                            label-for="input-1" 
                            prop="name" 
                            label="Name">
                            
                            <el-input 
                                id="input-1"
                                type="text"
                                placeholder="Name" 
                                v-model="form.name">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Row 2 -->
                <el-row>
                    <!-- Address -->
                    <el-col :span="24">
                        <el-form-item 
                            id="input-group-2"
                            label-for="input-2" 
                            prop="address" 
                            label="Address">
                            
                            <el-input 
                                id="input-2"
                                type="textarea"
                                placeholder="Address" 
                                v-model="form.address">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Row 3 -->
                <el-row :gutter="50">
                    <!-- Email -->
                    <el-col :span="12">
                        <el-form-item 
                            id="input-group-3"
                            label-for="input-3" 
                            prop="email" 
                            label="Email">
                            
                            <el-input 
                                style="width:350px;"
                                id="input-3"
                                type="email"
                                placeholder="Email" 
                                v-model="form.email">
                            </el-input>
                        </el-form-item>
                    </el-col>

                    <!-- Phone -->
                    <el-col :span="12">
                        <el-form-item 
                            id="input-group-4"
                            label-for="input-4"
                            prop="phone" 
                            label="Phone Number">
                            
                            <el-input 
                                style="width:350px;"
                                id="input-4"
                                type="text"
                                placeholder="Phone Number" 
                                v-model="form.phone">
                            </el-input>
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
                name: "",
                address: "",
                email: "",
                phone: "",
            },
            rules: {
                name: [
                    { 
                        required: true, 
                        messgae: 'Please input Name', 
                        trigger: 'blur' 
                    }
                ],
                address: [
                    { 
                        required: true, 
                        messgae: 'Please input Address', 
                        trigger: 'blur' 
                    }
                ],
                email: [
                    { 
                        required: true, 
                        messgae: 'Please input Email', 
                        trigger: 'blur' 
                    }
                ],
                phone: [
                    { 
                        required: true, 
                        messgae: 'Please input Phone Number. Number must be less than 12 characters!', 
                        trigger: 'blur' 
                    }
                ]
            },
            loggedIn: false,
            errors: []
        }
    },

    computed: {
        phoneValid() {
            return this.form.phone.length <= 11 && this.form.phone.length > 0
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

            axios.post('/api/lecturers', {
                name: app.form.name,
                address: app.form.address,
                email: app.form.email,
                phone: app.form.phone,
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(function(response) {
                console.log(response);
                app.$router.push('/lecturers');
            })
            .catch(function(error) {
                console.log(error.response.data);
                app.errors = errors.response.data.errors
            })
        }
    }
}
</script>