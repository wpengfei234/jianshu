let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: false}))//解码
app.use(bodyParser.json())//转成json格式


//获取json数据
app.get('/dataList',(req,res) => {
	fs.readFile('./static/data/data.json','UTF-8',(err,data) => {
		res.send(JSON.parse(data));
	})
})


app.listen(8000, () => {
	console.log('服务器启动成功');
})
