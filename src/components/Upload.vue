<template>
<v-card class="mx-auto" max-width="400" min-height="300" :loading="isLoading" v-ripple>
    <v-card-text class="d-flex align-center justify-center pa-4 mx-auto">点击或拖拽文件到此处上传</v-card-text>
    <v-card-actions class="d-flex align-center justify-center pa-4 mx-auto">
        <v-icon class="ma-5">mdi-cloud-upload</v-icon>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    name: "Upload",
    data() {
        return {
            isLoading: false
        };
    },
    
};
</script>

<style>
</style>
