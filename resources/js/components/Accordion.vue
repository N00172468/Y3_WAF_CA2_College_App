<template>
    <el-collapse accordion> <!-- "accordion" is an Element UI attribute to allow the Collapsable component act as an Accordion -->
            
            <!-- About the Project -->
            <el-collapse-item title="About the Project" name="1">
                <div>
                    Here in EduBoard, you as the administrator will be permitted to manage 
                    the courses, the lecturers and the enrolments of your assigned Institute/University. 
                    Access to the data has been provided for you via RESTAPI 
                    (which is implemented within a Laravel application). 
                </div>
            </el-collapse-item>

            <!-- Dashboard -->
            <el-collapse-item title="Dashboard" name="2">
                <div>
                    Enjoy the unusual yet intriguing dashboard provided within your account. 
                    Feast your eyes on a heavily customised rotating carousel filled with 
                    the courses, lecturers and enrolments table 
                    (Fully interactable: x & y axis scrollable (per table), functional buttons, multiple ways to switch tables and table stops auto switching when hovered over). 
                    On the after-fold, a bespoke timestamp (static for demonstration purposes) and an interactable calendar has also been included.
                </div>
            </el-collapse-item>

            <!-- CRUD -->
            <el-collapse-item title="C.R.U.D Functionalities" name="3">
                <div>
                    As the administrator, you have the ability to 
                    Create, Read, Update and Delete (C.R.U.D) 
                    courses, lecturers and enrolments with ease. 
                    To display specific tables and the datas' full information, 
                    please follow the Navigation Bar above. 
                    Otherwise, please use the custom rotating carousel.
                </div>
            </el-collapse-item>

            <!-- Vue.js -->
            <el-collapse-item title="Vue.js" name="4">
                <div>
                    Vue.js has been used as the chosen frontend framework due to 
                    its ease of use and flexibility 
                    (i.e. simple to organise, legible, ease of development for custom events, use of slots, etc.).
                </div>
            </el-collapse-item>

            <!-- Element UI -->
            <el-collapse-item title="Element U.I" name="5">
                <div>
                    Element U.I is a component library that specialises in Vue.js. 
                    It provides components that other frameworks also provide however, 
                    unlike most popular component libraries (e.g. IBM Carbon), 
                    this puts React/Angular in the sideline while it shows love for Vue. 
                    This allows for simple and satisfying implementation of components within Vue projects. 
                    Element U.I has also been chosen for its alurring design as well as its contemporary design system. 
                    While not as sophisticated as other libraries, 
                    its simplicity adds to the attraction for designers and developers alike. 
                    Note: The dark colourisation is a bespoke theme created by Arattian (see README.md).  
                </div>
            </el-collapse-item>
        
        </el-collapse>
</template>

<script>
export default {
    
}
</script>