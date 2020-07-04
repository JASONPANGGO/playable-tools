const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const app = express();

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

app.listen(3000, () => {
	console.log("express server listen on", 3000);
});
