<template>
    <b-row>
        <b-col cols="8">
            <b-card title="Add Course" tag="article">
                <b-form @submit="onSubmit">
                    <!-- Input -->
                    <b-form-group id="input-group-1" label="Title" for="title">

                    </b-form-group>

                    <!-- Submit Button -->
                    <b-button type="submit" variant="primary">
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
            form: {
                title: "",
                code: "",
                description: "",
                points: "",
                level: ""
            }
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()

            let app = this;
            let token = localStorage.getItem('token');
            
            axois.post('/api/courses', {
                title: app.form.title,
                code: app.form.code,
                description: app.form.description,
                points: app.form.points,
                level: app.form.level,

                headers: { Authorization: `Bearer ${token}` }
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            })
        }
    }
}
</script>