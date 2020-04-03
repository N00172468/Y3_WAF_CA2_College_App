<template>
    <el-carousel :interval="3000" type="card" height="600px">
        <!-- Course Table -->
        <el-carousel-item>
            <IndexCourse />
        </el-carousel-item>

        <!-- Lects Table -->
        <el-carousel-item>
            <IndexLects />
        </el-carousel-item>

        <!-- Enrol Table -->
        <el-carousel-item>
            <IndexEnrol />
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import IndexCourse from '../views/courses/Index'
import IndexLects from '../views/lecturers/Index'
import IndexEnrol from '../views/enrolments/Index'

export default {
    components: {
        IndexCourse,
        IndexLects,
        IndexEnrol
    }
}
</script>