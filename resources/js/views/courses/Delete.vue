<template>
    <el-button
        @click="open"
        type="danger"
        circle>

        <i class="el-icon-delete"></i>
    </el-button>
</template>

<script>
export default {
    props: ['id'],

    data() {
        return {
            course: [],
            show: true,
            loggedIn: false
        }
    },

    created() {
        // console.log("Delete component!", this.id)
        // if (localStorage.getItem('token')) {
        //     this.loggedIn = true;
        // }
        // else {
        //     this.loggedIn = false;
        // }

        // let app = this;
        // let token = localStorage.getItem('token');
        
        // axios.get(`/api/courses/${app.$route.params.id}`, {
        //     headers: { Authorization: "Bearer " + token }
        // })
        // .then(function (response) {
        //     app.course = response.data.data;
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    },

    methods: {
        open() {
            this.$confirm('This will permanently delete the Course. Continue?', 'Warning', {
                confrimButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            })
            .then(() => {
                axios.delete(`/api/courses/${this.id}`)
            })
            .then(() => {
                // app.$router.push('/courses');

                this.$message({
                    type: 'success',
                    message: 'Delete Completed'
                });
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Delete cancelled'
                });
            })
        }
    }
}
</script>