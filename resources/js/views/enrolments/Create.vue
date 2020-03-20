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