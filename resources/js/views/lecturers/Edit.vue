<template>
<el-row style="margin:auto;">
    <el-col>

        <h3 v-if="!loggedIn">You are not logged in!!</h3>

        <!-- Card -->
        <el-card v-else class="box-card">
        
            <!-- Card Title -->
            <div slot="header" class="clearfix">
                <span>Edit Lecturer</span>
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
                                v-model="lecture.name">
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
                                v-model="lecture.address">
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
                                v-model="lecture.email">
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
                                v-model="lecture.phone">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Row 4 -->
                <el-row>
                    <el-col :span="24">
                        <el-form-item>
                            <el-button @click="onSubmit" type="primary">Save</el-button>
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

    methods: {
        onSubmit(evt) {
            evt.preventDefault()

            let app = this;
            let token = localStorage.getItem('token');
            axios.put(`/api/lecturers/${app.$route.params.id}`, {
                name: app.lecture.name,
                address: app.lecture.address,
                email: app.lecture.email,
                phone: app.lecture.phone,
            },
            {
                headers: { Authorization: "Bearer " + token }
            })
            .then(function(response) {
                app.$router.push('/lecturers');
            })
            .catch(function(error) {
                console.log(error);
            })
        }
    }
}
</script>