<template>
    <b-row align-h="center">
        <b-col cols="8">
            <h3 v-if="!loggedIn">You are not logged in!</h3>

            <b-card
                v-else
                title="Edit Enrolment"
                tag="article">

                <b-form @submit="onSubmit">
                    <!-- Date -->
                    <b-form-group
                        id="input-group-1"
                        label="Date"
                        label-for="input-1">

                        <b-form-input
                            v-model="enrolment.date"
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
                            v-model="enrolment.time"
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
                            v-model="enrolment.status"
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
                            v-model="enrolment.course_id"
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
                            v-model="enrolment.lecture_id"
                            id="input-5"
                            placeholder="Select Lecture"
                            required>
                        </b-form-select>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
export default {
    data() {
        return {
            enrolment: {},
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
    
    axios.get(`/api/enrolments/${app.$route.params.id}`, {
        headers: { Authorization: "Bearer " + token }
    })
    .then(function (response) {
        app.enrolment = response.data.data;
    })
    .catch(function (error) {
        console.log(error);
    });

    },

    methods: {
        onSubmit(evt) {
            evt.preventDefault()

            let app = this;
            let token = localStorage.getItem('token');
            
            axios.put(`/api/enrolments/${app.$route.params.id}`, {
                date: app.course.date,
                time: app.course.time,
                status: app.course.status,
                course_id: app.course.course_id,
                lecturer_id: app.course.lecturer_id,
            },
            {
                headers: { Authorization: "Bearer " + token }
            })
            .then(function (response) {
                app.$router.push('/enrolments');
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>