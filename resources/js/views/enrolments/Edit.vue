<template>
    
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