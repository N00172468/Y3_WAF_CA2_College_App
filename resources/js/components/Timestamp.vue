<template>
    <div class="block">
            <el-timeline>

                <!-- Timestamp 1 -->
                <el-timeline-item type="success" timestamp="6/12/2019" placement="top">
                    <el-card>
                        <h4>Courses</h4>
                        <p>Successfully added a new course, edited an existing course and deleted an outdated course. New Course: UI/UX Design. Edited Course: Creative Computing. Deleted Course: Product (Industrial) Design.</p>
                    </el-card>
                </el-timeline-item>

                <!-- Timestamp 2 -->
                <el-timeline-item type="success" timestamp="15/1/2020" placement="top">
                    <el-card>
                        <h4>Lecturers</h4>
                        <p>Successfully recruited an additional lecturer, edited lecturer details and deleted information of a retired lecturer. New Lecturer: John Doe. Edited Lecturer: Joe Bloggs. Deleted Lecturer: John Joe.</p>
                    </el-card>
                </el-timeline-item>

                <!-- Timestamp 3 -->
                <el-timeline-item type="warning" timestamp="21/3/2020" placement="top">
                    <el-card>
                        <h4>Enrolments</h4>
                        <p>Must create new enrolment for <a href="https://www.linkedin.com/in/john-carlo-ramos-1a587b195/" style="text-decoration:none;color:white" target="_blank">John Doe</a> in UI/UX Design. Due on 1/4/2020!</p>
                    </el-card>
                </el-timeline-item>

                <!-- Timestamp 4 -->
                <el-timeline-item type="danger" timestamp="22/3/2020" placement="top">
                    <el-card>
                        <h4>ALERT!</h4>
                        <p>A lecturer has retired. Please remove information of lecturer. A new lecturer has taken place for <a href="https://www.instagram.com/jc_ramos_photography/" style="text-decoration:none;color:white" target="_blank">business</a>.</p>
                    </el-card>
                </el-timeline-item>

            </el-timeline>
        </div>
</template>

<script>
export default {
    
}
</script>