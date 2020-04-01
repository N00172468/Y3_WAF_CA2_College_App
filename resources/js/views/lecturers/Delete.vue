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
            lecture: [],
            show: true,
            loggedIn: false
        }
    },

    methods: {
        open() {
            this.$confirm('This will permanently delete the Lecturer. Continue?', 'Warning', {
                confrimButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            })
            .then(() => {
                let app = this;
                let token = localStorage.getItem('token');
                let id = (this.$route.params.id) ? this.$route.params.id : this.id;

                axios.delete(`/api/lecturers/${id}`, {
                    headers: { Authorization: "Bearer " + token }
                }).then(function() {
                    app.$emit('row-deleted');
                })
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