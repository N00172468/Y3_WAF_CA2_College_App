<template>
    <b-row>
        <b-col cols="8">
            <b-card title="Add Lecture" tag="article">
                <!-- Form -->
                <b-form @submit="onSubmit">
                    <!-- Name -->
                    <b-form-group
                        id="input-group-1"
                        label="Name"
                        label-for="input-1">

                        <b-form-input
                            v-model="form.name"
                            id="input-1"
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
                            v-model="form.address"
                            id="input-2"
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
                            v-model="form.email"
                            id="input-3"
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
                            v-model="form.phone"
                            id="input-4"
                            type="text"
                            placeholder="Phone Number"
                            required>
                        </b-form-input>

                        <!-- Validation -->
                        <b-form-invalid-feedback :state="phoneValid">
                            Phone Number cannot be above 11 characters!
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="phoneValid">
                            Good to go!
                        </b-form-valid-feedback>
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
                name: "",
                address: "",
                email: "",
                phone: "",
            },
            loggedIn: false,
            errors: []
        }
    },

    computed: {
        phoneValid() {
            return this.form.phone.length <= 11 && this.form.phone.length > 0
        }
    },

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

            axios.post('/api/lecturers', {
                name: app.form.name,
                address: app.form.address,
                email: app.form.email,
                phone: app.form.phone,
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(function(response) {
                console.log(response);
                app.$router.push('/courses');
            })
            .catch(function(error) {
                console.log(error.response.data);
                app.errors = errors.response.data.errors
            })
        }
    }
}
</script>