const mysql = require(`mysql2`);
const config = require(`expresstutor/config`);

const addUser = () => {
  let connection = mysql.createConnection(config.connectionParam);

  connection.connect();

  let addSql = `INSERT INTO user  VALUES(?,?,?,?)`;
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
const createUser = () => {
  let connection = mysql.createConnection(config.connectionParam);

  connection.connect();
  let DROPsql = `DROP TABLE
IF
\tEXISTS USER;
`;
  let createsql = `CREATE TABLE USER (ID INT(4) NOT NULL,
\tNAME VARCHAR ( 255 ),
\tsex VARCHAR ( 255 ),
\thobby VARCHAR ( 255 ),
\tcoursename VARCHAR ( 255 ),
PRIMARY KEY ( id ) 
)`;
  //查
  connection.query(createsql, function (err, result) {
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
const selectUser = () => {
  let connection = mysql.createConnection(connectionParam);

  connection.connect();
  let sql = `SELECT * FROM user`;
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
const updateUser = () => {
  let connection = mysql.createConnection(connectionParam);

  connection.connect();
  let modSql = ` UPDATE user  SET name = ?, sex=? WHERE id = 1`;
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
const delUser = () => {
  let connection = mysql.createConnection(connectionParam);

  connection.connect();
  let delSql = `DELETE FROM user where id=?`;
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
const dropUser = () => {
  let connection = mysql.createConnection(connectionParam);

  connection.connect();
  let delSql = `drop table user`;
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
  createUser,
  addUser,
  updateUser,
  selectUser,
  delUser,
  dropUser,
};
