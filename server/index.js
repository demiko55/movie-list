const express = require('express');
const router = require('./router.js');
const app = express();

const PORT = 3000 || process.env.PORT;
app.set('port', PORT);

// https://expressjs.com/en/api.html#express.json
app.use(express.json());//必须使用这一句，否则无法解析请求？？
//express.static is a build-in middleware funciton.It serves static files and is based on serve-static
//app.use用来给path(默认是/)注册中间函数的，处理任何请求，也会处理path下的子路径。
//传递一个静态资源的目录，可用可立即提供文件。
app.use(express.static('client/dist'));


//set up our routes
app.use('/api', router);

app.listen(app.get('port'), () => {
  console.log(`Server listening on port: ${PORT}`);
})