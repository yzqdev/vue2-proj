let mysql = require(`mysql2`);
const config = require(`expresstutor/config`);

const addTeacher = () => {
  let connection = mysql.createConnection(config.connectionParam);

  connection.connect();

  let addSql = `INSERT INTO teacher  VALUES(2,?,?,?,?)`;
  let addSqlParams = [`xiaomign`, `男`, `吃鱼`, `化学`];
  //增
  connection.query(addSql, addSqlParams, function (err, result) {
    if (err) {
      console.log(`[INSERT ERROR] - `, err.message);
      return;
    }

    console.log(`--------------------------INSERT----------------------------`);
    //console.log('INSERT ID:',result.insertId);
    console.log(`INSERT ID:`, result);
    console.log(
      `-----------------------------------------------------------------\n\n`
    );
  });
};
const createTeacher = () => {
  let connection = mysql.createConnection(connectionParam);

  connection.connect();
  let sql = ` CREATE TABLE teacher (
  id int(2) NOT NULL,
  name varchar(255) DEFAULT NULL,
  sex varchar(255) DEFAULT NULL,
  hobby varchar(255) DEFAULT NULL,
  coursename varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
)`;
  //查
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(`[SELECT ERROR] - `, err.message);
      return;
    }

    console.log(`--------------------------SELECT----------------------------`);
    console.log(result);
    console.log(
      `------------------------------------------------------------\n\n`
    );
  });
};
const selectTeacher = () => {
  let connection = mysql.createConnection(connectionParam);

  connection.connect();
  let sql = `SELECT * FROM teacher`;
  //查
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(`[SELECT ERROR] - `, err.message);
      return;
    }

    console.log(`--------------------------SELECT----------------------------`);
    console.log(result);
    console.log(
      `------------------------------------------------------------\n\n`
    );
  });
};
const updateTeacher = () => {
  let connection = mysql.createConnection(connectionParam);

  connection.connect();
  let modSql = ` UPDATE teacher  SET name = ?, sex=? WHERE id = 1`;
  let modSqlParams = [`小红`, `女`, 2];
  //改
  connection.query(modSql, modSqlParams, function (err, result) {
    if (err) {
      console.log(`[UPDATE ERROR] - `, err.message);
      return;
    }
    console.log(`--------------------------UPDATE----------------------------`);
    console.log(`UPDATE affectedRows`, result.affectedRows);
    console.log(
      `-----------------------------------------------------------------\n\n`
    );
  });
};
const delTeacher = () => {
  let connection = mysql.createConnection(connectionParam);

  connection.connect();
  let delSql = `DELETE FROM teacher where id=?`;
  //删
  let delParam = 2;
  connection.query(delSql, delParam, function (err, result) {
    if (err) {
      console.log(`[DELETE ERROR] - `, err.message);
      return;
    }

    console.log(`--------------------------DELETE----------------------------`);
    console.log(`DELETE affectedRows`, result.affectedRows);
    console.log(
      `-----------------------------------------------------------------\n\n`
    );
  });
};
const dropTeacher = () => {
  let connection = mysql.createConnection(connectionParam);

  connection.connect();
  let delSql = `drop table teacher`;
  //删
  connection.query(delSql, function (err, result) {
    if (err) {
      console.log(`[DELETE ERROR] - `, err.message);
      return;
    }

    console.log(`--------------------------DELETE----------------------------`);
    console.log(`DELETE affectedRows`, result.affectedRows);
    console.log(
      `-----------------------------------------------------------------\n\n`
    );
  });
};

module.exports = {
  createTeacher,
  addTeacher,
  updateTeacher,
  selectTeacher,
  delTeacher,
  dropTeacher,
};
