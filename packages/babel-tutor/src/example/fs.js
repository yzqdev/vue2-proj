const fse = require('fs-extra');
fse.readFile('a.vue',   function (err,data ) {
    console.log(data)
    console.log(data.toString())
})
