<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-container>
          <el-form>
            <el-form-item label="粘贴地址" class="item">
              <el-input v-model="url"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">生成基础包</el-button>
            </el-form-item>
          </el-form>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "voodooPlayable",
  components: {},
  data() {
    return {
      url: ""
    };
  },
  methods: {
    upload() {
      let uploadbtn = this.$refs.upload;
      uploadbtn.click();
    },
    onSubmit() {
      
    }
  }
};
</script>

<style lang="scss" scoped>
#upload {
  height: 0;
  width: 0;
  visibility: hidden;
}
</style>