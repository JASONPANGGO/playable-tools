<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-container>
          <el-form>
            <el-form-item label="附件地址" class="item">
              <el-input v-model="url"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit" :loading="uploading">生成基础包</el-button>
            </el-form-item>
          </el-form>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { getVoodooPlayable } from "../../service/index.js";
export default {
  name: "voodooPlayable",
  components: {},
  data() {
    return {
      url: "",
      uploading: false,
    };
  },
  methods: {
    async onSubmit() {
      this.uploading = true;
      const res = await getVoodooPlayable(this.url)
        .then((e) => {
          let url = window.URL.createObjectURL(new Blob([e.data]));
          let link = document.createElement("a");
          link.style.display = "none";
          link.href = url;
          link.setAttribute("download", "voodoo.zip"); // 自定义下载文件名（如exemple.txt）
          document.body.appendChild(link);
          link.click();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.uploading = false;
        });
      console.log(res);
    },
  },
};
</script>

<style lang="scss" scoped>
#upload {
  height: 0;
  width: 0;
  visibility: hidden;
}
</style>