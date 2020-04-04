<template>
    <el-button
        @click="open"
        type="danger"
        circle> <!-- "circle" is an Element UI attribute that transforms the button into a circular object -->

        <i class="el-icon-delete"></i>
    </el-button>
</template>

<script>
export default {
    props: ['id'], // Contain the array of ID as a prop

    methods: {
        // Methods once Delete Modal has been opened.
        open() { // Open Modal based on Element UI docs.
            this.$confirm('This will permanently delete the Course. Continue?', 'Warning', {
                confrimButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            })
            .then(() => {
                let app = this;
                let token = localStorage.getItem('token');
                let id = (this.$route.params.id) ? this.$route.params.id : this.id; // This determines whether the user is deleting contents within the Index or Show page.

                axios.delete(`/api/courses/${id}`, { // DELETE request within Axios. Used to allow the user to delete data from application and database.
                    headers: { Authorization: "Bearer " + token }
                }).then(function(){
                    app.$emit('row-deleted'); // This event allows to emit the method throughout other files (See Index and Show files).
                })
                
            })
            .then(() => { // Display message once delete is successful.
                this.$message({
                    type: 'success',
                    message: 'Delete Completed'
                });
            })
            .catch(() => { // Display message once delete has been cancelled.
                this.$message({
                    type: 'info',
                    message: 'Delete cancelled'
                });
            })
        }
    }
}
</script>