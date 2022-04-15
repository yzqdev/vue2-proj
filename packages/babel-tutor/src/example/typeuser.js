const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const template = require('@babel/template').default
const t = require('@babel/types')

const code = `function mirror(something) {
  return something
}`
const ast = parser.parse(code, {
    sourceType: 'module',
})
const visitor = {
    FunctionDeclaration(path) {
        // 在这里声明了一个模板，比用@babel/types去生成方便很多
        const temp = template(`
      if(something) {
        NORMAL_RETURN
      } else {
        return 'nothing'
      }
    `)
     console.log(generate(path.node.body.body[0]).code)
        const returnNode = path.node.body.body[0]
        const tempAst = temp({
            NORMAL_RETURN: "console.log('hello')"
        })
        path.node.body.body[0] = tempAst
    }
}
traverse(ast, visitor)
const transformedCode = generate(ast).code
console.log(transformedCode)
