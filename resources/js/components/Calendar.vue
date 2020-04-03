<template>
    <el-calendar style="background:#222933; color:#556eab;" v-model="value"></el-calendar>
</template>

<script>
export default {
    data() {
        return {
            value: new Date()
        }
    }
}
</script>