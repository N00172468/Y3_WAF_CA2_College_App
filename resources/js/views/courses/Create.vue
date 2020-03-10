<template>
    <b-row>
        <b-col cols="8">
            <b-card title="Add Course" tag="article">
                <b-form @submit="onSubmit">
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

        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()

            let app = this;
            let token = localStorage.getItem('token');
            
            axois.post('/api/courses', {}, {})

            headers: { Authorization: `Bearer ${token}` }
        }
    }
}
</script>