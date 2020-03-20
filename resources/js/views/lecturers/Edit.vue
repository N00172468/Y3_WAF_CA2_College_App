<template>
    
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