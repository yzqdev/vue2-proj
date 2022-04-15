const parse = require("@babel/parser").parse;
const babel=require("@babel/core")
let scriptText = `function square(n) {
    return n * n;
}`;

let visitor = {
    //输出导入文件参数
    ImportDeclaration(path) {
        // console.log(path.node.source.value);
    },
    //修改函数参数
    FunctionDeclaration(path){
        console.log( path.node.params[0]);
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

let ast = parse(scriptText, {
  sourceType: "module",
  // Note that even when this option is enabled, @babel/parser could throw for unrecoverable errors.
  // errorRecovery: true,  //没啥用，碰到let和var对同一变量进行声明时，当场报错！还会中断转换进程
  plugins: [
    "asyncGenerators",
    "classProperties",
    "decorators-legacy", //"decorators",
    "doExpressions",
    "dynamicImport",
    "exportExtensions",
    "flow",
    "functionBind",
    "functionSent",
    "jsx",
    "objectRestSpread",
  ],
});

console.log(result);
