const express = require("express");
const multer = require("multer");
const upload = multer({
  dest: "uploads/"
});
const app = express();
const path = require("path")
const playable = require("./voodooPlayableWithBgm/index")
const endcard = require("./voodooEndcardWithBgm/index")
const PORT = 3000

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.post("/upload", upload.single("psd"), (req, res) => {

  res.send("ok");
});

app.get("/voodooPlayable", async (req, res) => {
  const url = req.query.url
  if (!url) res.status(404)
  else {
    try {
      console.log(url, '!')
      await playable(url)
      const filePath = path.join(__dirname, "./voodooPlayableWithBgm/voodoo.zip")
      res.setHeader("Content-Type", "application/octet-stream")
      res.sendFile(filePath)
    } catch (error) {
      console.log(error)
    }
  }
})

app.get("/voodooEndcard", async (req, res) => {
  const url = req.query.url
  if (!url) res.status(404)
  else {
    try {
      console.log(url, '!')
      await endcard(url)
      const filePath = path.join(__dirname, "./voodooEndcardWithBgm/voodoo.zip")
      res.setHeader("Content-Type", "application/octet-stream")
      res.sendFile(filePath)
    } catch (error) {
      console.log(error)
    }
  }
})

app.listen(PORT, () => {
  console.log("express server listen on", PORT);
});