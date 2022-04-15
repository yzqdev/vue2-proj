var fs = require('fs');
let babel = require('@babel/core');
let t = require('@babel/types');
// let template = require('@babel/template');
let traverse = require('@babel/traverse').default
let babylon =require("babylon")

// 读取需要修改的源代码内容
var content = fs.readFileSync('./config.js').toString();
let paramName;
//访问数据的选项
let visitor = {
    //输出导入文件参数
    ImportDeclaration(path) {
        // console.log(path.node.source.value);
    },
    ExportDefaultDeclaration(path){
        console.log('export')
        console.log(path.node)
    },
    //修改函数参数
    FunctionDeclaration(path){
        const param = path.node.params[0];
        paramName = param.name;
        param.name = "x";
    },
    Identifier(path) {
        if (path.node.name === paramName) {
            path.node.name = "x";
        }
    }
}

// 通过 plugin 转换源代码 parse 出来的AST 抽象语法树，并且返回结果
let result= babel.transform(content, {
    plugins: [
        { visitor}
    ]
});

console.warn(`res: ${result.code}`);
// 把新代码写入新文件.
 fs.writeFileSync('newRoute.ts', result.code);
