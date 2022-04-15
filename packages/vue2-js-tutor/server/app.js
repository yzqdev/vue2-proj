const express = require(`express`);
const mysql = require(`mysql2`);
const bodyparser = require(`body-parser`);
const util = require(`./utils/util`);
let app = express();
const port = 30834;
const config = require(`./config`);
let connection = mysql.createConnection(config.connectionParam);
// 解决跨域问题
app.all(`*`, function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header(`Access-Control-Allow-Origin`, `*`);
  //允许的header类型
  res.header(`Access-Control-Allow-Headers`, `content-type`);
  //跨域允许的请求方式
  res.header(`Access-Control-Allow-Methods`, `DELETE,PUT,POST,GET,OPTIONS`);
  if (req.method.toLowerCase() === `options`) res.sendStatus(200);
  //让options尝试请求快速结束
  else next();
});
app.post(`/adduser`, bodyparser.json(), (req, res) => {
  let addSql = `INSERT INTO user  VALUES(?,?,?,?,?)`;

  let re = req.query;
  console.log(req.query.password);
  let addSqlParams = [re.password, re.username, re.sex, re.hobby, re.id];
  connection.query(addSql, addSqlParams, (error, results, fields) => {
    if (error) {
      console.log(`[SELECT ERROR] - `, error.message);
    }
    console.log(`The solution is:`, results);
    res.json(results);
    res.send(results);
  });
});
app.get(`/getuser`, (req, res) => {
  connection.query(`SELECT * from user`, (error, results, fields) => {
    if (error) {
      console.log(`[SELECT ERROR] - `, error.message);
    }
    console.log(`The solution is:`, results, fields);
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`listening on http://${util.getIPAdress()}:${port}`);
});
