<template>
    <el-carousel :interval="3000" type="card" height="600px"> <!-- ":intervals" is the amount of miliseconds will pass until the next card rotates -->
        <!-- Course Table -->
        <el-carousel-item>
            <IndexCourse /> <!-- Displaying Courses Table -->
        </el-carousel-item>

        <!-- Lects Table -->
        <el-carousel-item>
            <IndexLects /> <!-- Displaying Lecturers Table -->
        </el-carousel-item>

        <!-- Enrol Table -->
        <el-carousel-item>
            <IndexEnrol /> <!-- Displaying Enrolments Table -->
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