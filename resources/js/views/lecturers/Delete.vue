<template>
    
</template>

<script>
export default {
    // props: ['id'],

    data() {
        return {
            lecture: [],
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
        
        axios.get(`/api/lecturers/${app.$route.params.id}`, {
            headers: { Authorization: "Bearer " + token }
        })
        .then(function (response) {
            app.course = response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    methods: {
        open() {
            this.$confirm('This will permanently delete the Lecturer. Continue?', 'Warning', {
                confrimButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            })
            .then(() => {
                axios.delete(`/api/lecturers/${this.id}`)
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