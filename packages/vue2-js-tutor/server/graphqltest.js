const express = require(`express`);
const { buildSchema } = require(`graphql`);
const graphhttp = require(`express-graphql`);
let sc = `
type Account{
name:String sex:String}
type Query{
hello :String
name:String 
tet:Account

}`;
const schema = buildSchema(sc);
const root = {
  hello: () => {
    return `helow owoe`;
  },
  name: () => {
    return `yzq`;
  },
  tet: () => {
    return {
      name: `String`,
      sex: `String`,
    };
  },
};
const app = express();
app.use(`/g`, graphhttp({ schema: schema, rootValue: root, graphiql: true }));
app.listen(3000);
