<template>
    
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
    computed: {
        codeValid() {
            return this.form.code.length <= 5 && this.form.code.length > 0
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
            
            axios.post('/api/courses', {
                title: app.form.title,
                code: app.form.code,
                description: app.form.description,
                points: app.form.points,
                level: app.form.level,
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