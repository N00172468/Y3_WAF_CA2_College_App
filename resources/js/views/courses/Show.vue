<template>
    
</template>

<script>
export default {
    data() {
        return {
            course: {},
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
        
        axios.get(`/api/courses/${app.$route.params.id}`, {
            headers: { Authorization: "Bearer " + token }
        })
        .then(function (response) {
            app.course = response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    },
}
</script>