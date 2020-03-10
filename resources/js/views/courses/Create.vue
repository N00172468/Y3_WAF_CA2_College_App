<template>
    <b-row>
        <b-col cols="8">
            <b-card title="Add Course" tag="article">
                <b-form @submit="onSubmit">
                    <!-- Title -->
                    <b-form-group 
                        id="input-group-1" 
                        label="Title" 
                        label-for="input-1">
                        
                        <b-form-input 
                            v-model="form.title"
                            id="input-1"
                            type="text"
                            placeholder="Title"
                            required>
                        </b-form-input>
                    </b-form-group>

                    <!-- Code -->
                    <b-form-group 
                        id="input-group-2" 
                        label="Code" 
                        label-for="input-2">
                        
                        <b-form-input 
                            v-model="form.code"
                            id="input-2"
                            type="text"
                            placeholder="Code"
                            required>
                        </b-form-input>
                    </b-form-group>

                    <!-- Description -->
                    <b-form-group 
                        id="input-group-3" 
                        label="Description" 
                        label-for="input-3">
                        
                        <b-form-input 
                            v-model="form.description"
                            id="input-3"
                            type="textarea"
                            rows="4"
                            max-rows="8"
                            placeholder="Description"
                            required>
                        </b-form-input>
                    </b-form-group>

                    <!-- Points -->
                    <b-form-group 
                        id="input-group-4" 
                        label="Points" 
                        label-for="input-4">
                        
                        <b-form-input 
                            v-model="form.points"
                            id="input-4"
                            type="number"
                            placeholder="Points"
                            required>
                        </b-form-input>
                    </b-form-group>

                    <!-- Level -->
                    <b-form-group 
                        id="input-group-5" 
                        label="Level" 
                        label-for="input-5">
                        
                        <b-form-input 
                            v-model="form.level"
                            id="input-5"
                            type="number"
                            placeholder="Level"
                            required>
                        </b-form-input>
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
            },
            loggedIn: false
        }
    },
    created() {
        if(localStorage.getItem('token')) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()

            let app = this;
            let token = localStorage.getItem('token');
            
            axios.post('/api/courses', {
                title: app.form.title,
                code: app.form.code,
                description: app.form.description,
                points: app.form.points,
                level: app.form.level,

                headers: { Authorization: `Bearer ${token}` }
            })
            .then(function(response) {
                console.log(response);
                app.$router.push('/courses');
            })
            .catch(function(error) {
                console.log(error);
            })
        }
    }
}
</script>