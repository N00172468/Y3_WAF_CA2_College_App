<template>
    
</template>

<script>
import Delete from './Delete'

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

    components: {
        Delete
    }
}
</script>