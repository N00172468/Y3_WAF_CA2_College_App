<template>
    
</template>

<script>
export default {
    data() {
        return {
            items: []
        }
    },
    created(){
        let app = this;
        let token = localStorage.getItem('token');
        
        axios.get('/api/enrolments', {
            headers: { Authorization: "Bearer " + token }
        })
        .then(function (response) {
            console.log(response.data);
            app.items = response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}
</script>