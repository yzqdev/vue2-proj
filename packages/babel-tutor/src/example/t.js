const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const fse = require('fs-extra');

let  code = `function mirror(something) {
  return something
}`
const ast = parser.parse(code, {
    sourceType: 'module',
})
const visitor = {
    Identifier (path) {
        console.log(path)
        path.node.name = path.node.name.split('').reverse().join('')
    }
}
traverse(ast, visitor)
const transformedCode = generate(ast).code
console.log(transformedCode)
