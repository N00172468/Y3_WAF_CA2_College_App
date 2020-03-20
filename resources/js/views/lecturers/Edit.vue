<template>
    <b-row align-h="center">
        <b-col cols="8">
            <h3 v-if="!loggedIn">You are not logged in!</h3>

            <b-card
                v-else
                title="Edit Lecture"
                tag="article">

                <!-- Form -->
                <b-form @submit="onSubmit">
                    <!-- Name -->
                    <b-form-group
                        id="input-group-1"
                        label="Name"
                        label-for="input-1">

                        <b-form-input
                            id="input-1"
                            v-model="lecture.name"
                            type="text"
                            placeholder="Name"
                            required>
                        </b-form-input>
                    </b-form-group>

                    <!-- Address -->
                    <b-form-group
                        id="input-group-2"
                        label="Address"
                        label-for="input-2">

                        <b-form-input
                            id="input-2"
                            v-model="lecture.address"
                            type="text"
                            placeholder="Address"
                            required>
                        </b-form-input>
                    </b-form-group>

                    <!-- Email -->
                    <b-form-group
                        id="input-group-3"
                        label="Email"
                        label-for="input-3">

                        <b-form-input
                            id="input-3"
                            v-model="lecture.email"
                            type="email"
                            placeholder="Email"
                            required>
                        </b-form-input>
                    </b-form-group>

                    <!-- Phone -->
                    <b-form-group
                        id="input-group-4"
                        label="Phone Number"
                        label-for="input-4">

                        <b-form-input
                            id="input-4"
                            v-model="lecture.phone"
                            type="text"
                            placeholder="Phone Number"
                            required>
                        </b-form-input>
                    </b-form-group>

                    <!-- Submit Button -->
                    <b-button 
                        type="submit"
                        variant="primary"
                        >
                        Submit
                    </b-button>
                </b-form>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
export default {
    data() {
        return {
            lecture: {},
            show: true,
            loggedIn: false
        }
    },

    created() {
        if(localStorage.getItem('token')) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }

        let app = this;
        let token = localStorage.getItem('token');
        axios.get(`/api/lecturers/${app.$route.params.id}`, {
            headers: { Authorization: "Bearer " + token }
        })
        .then(function(response) {
            app.lecture = response.data.data;
        })
        .catch(function(error) {
            console.log(error);
        })
    },

    methods: {
        onSubmit(evt) {
            evt.preventDefault()

            let app = this;
            let token = localStorage.getItem('token');
            axios.put(`/api/lecturers/${app.$route.params.id}`, {
                name: app.lecture.name,
                address: app.lecture.address,
                email: app.lecture.email,
                phone: app.lecture.phone,
            },
            {
                headers: { Authorization: "Bearer " + token }
            })
            .then(function(response) {
                app.$router.push('/lecturers');
            })
            .catch(function(error) {
                console.log(error);
            })
        }
    }
}
</script>