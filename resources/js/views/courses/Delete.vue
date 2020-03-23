<template>
    <el-button
    @click="open"
        style="float:right;"
        type="danger"
        circle>

        <i class="el-icon-delete"></i>
        <!-- <router-link
            style="text-decoration:none; color:white;" 
            :to="`/courses/edit/${ course.id }`">
                <i class="el-icon-delete"></i>
        </router-link> -->
    </el-button>
</template>

<script>
export default {
    methods: {
        open() {
            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
                confrimButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            })
            .then(() => {
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