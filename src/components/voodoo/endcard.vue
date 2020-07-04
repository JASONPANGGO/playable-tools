<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-container>
          <el-form>
            <el-form-item label="粘贴地址" class="item">
              <el-input v-model="form.name"></el-input>
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
  name: "voodooEndcard",
  components: {},
  data() {
    return {
      input: "",
      form: {
        name: ""
      }
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<style>
.item {
  width: 600px;
}
</style>
