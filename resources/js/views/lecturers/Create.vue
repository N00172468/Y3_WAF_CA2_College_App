<template>
    
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
            return this.form.code.length <= 11 && this.form.code.length > 0
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