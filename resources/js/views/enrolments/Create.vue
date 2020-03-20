<template>
    <b-row>
        <b-col cols="8">
            <b-card title="Add Enrolment" tag="article">
                <b-form @submit="onSubmit">
                    <!-- Date -->
                    <b-form-group
                        id="input-group-1"
                        label="Date"
                        label-for="input-1">

                        <b-form-input
                            v-model="form.date"
                            id="input-1"
                            type="date"
                            placeholder="Date"
                            required>
                        </b-form-input>
                    </b-form-group>

                    <!-- Time -->
                    <b-form-group
                        id="input-group-2"
                        label="Time"
                        label-for="input-2">

                        <b-form-input
                            v-model="form.time"
                            id="input-2"
                            type="time"
                            placeholder="Time"
                            required>
                        </b-form-input>
                    </b-form-group>

                    <!-- Status -->
                    <b-form-group
                        id="input-group-3"
                        label="Status"
                        label-for="input-3">

                        <b-form-input
                            v-model="form.status"
                            id="input-3"
                            type="text"
                            placeholder="Status"
                            required>
                        </b-form-input>
                    </b-form-group>

                    <!-- Course -->
                    <b-form-group
                        id="input-group-4"
                        label="Course I.D"
                        label-for="input-4">

                        <b-form-select
                            v-model="form.course_id"
                            id="input-4"
                            placeholder="Select Course"
                            required>
                        </b-form-select>
                    </b-form-group>

                    <!-- Lecture -->
                    <b-form-group
                        id="input-group-5"
                        label="Lecture I.D"
                        label-for="input-5">

                        <b-form-select
                            v-model="form.lecture_id"
                            id="input-5"
                            placeholder="Select Lecture"
                            required>
                        </b-form-select>
                    </b-form-group>
                </b-form>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
export default {
    data() {
        return {
            form: {
                date: "",
                time: "",
                status: "",
                course_id: "",
                lecturer_id: ""
            },
            loggedIn: false,
            errors: []
        }
    },

    // computed: {
    //     codeValid() {
    //         return this.form.code.length <= 5 && this.form.code.length > 0
    //     }
    // },

    created() {
        if(localStorage.getItem('token')) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
            app.$router.push('/');
        }
    },

    methods: {
        onSubmit(evt) {
            evt.preventDefault()

            let app = this;
            let token = localStorage.getItem('token');
            
            axios.post('/api/enrolments', {
                date: app.form.date,
                time: app.form.time,
                status: app.form.status,
                course_id: app.form.course_id,
                lecturer_id: app.form.lecturer_id,
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(function(response) {
                console.log(response);
                app.$router.push('/enrolments');
            })
            .catch(function(error) {
                console.log(error.response.data);

                app.errors = errors.response.data.errors
            })
        }
    }
}
</script>