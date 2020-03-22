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
                    width="240">
                </el-table-column>

                <!-- Email -->
                <el-table-column
                    fixed
                    prop="email"
                    label="Email"
                    width="240">
                </el-table-column>

                <!-- Phone -->
                <el-table-column
                    fixed
                    prop="phone"
                    label="Phone Number"
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
                            @click="`/lecturers/edit/${items.id}`"
                            index="`/lecturers/edit/${items.id}`"
                            type="warning">
                            
                            <router-link 
                            style="text-decoration:none; color:white;" 
                            :to="`/lecturers/edit/${items.id}`">
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
        <b-col cols="12"> -->
            <!-- Table -->
            <!-- <b-table-simple hover responsive> -->
                <!-- Headers -->
                <!-- <b-head>
                    <b-tr>
                        <b-th>Name</b-th>
                        <b-th>Address</b-th>
                        <b-th>Email</b-th>
                        <b-th>Phone</b-th>
                    </b-tr>
                </b-head>
                <br/> -->
                <!-- Body -->
                <!-- <b-body>
                    <b-tr v-for="item in items" :key="item.id">
                        <b-td>{{ item.name }}</b-td>
                        <b-td>{{ item.address }}</b-td>
                        <b-td>{{ item.email }}</b-td>
                        <b-td>{{ item.phone }}</b-td>
                        <b-td><router-link :to="`/lecturers/edit/${item.id}`">Edit</router-link></b-td>
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

    created() {
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
    }
}
</script>