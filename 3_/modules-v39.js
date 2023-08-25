//VIDEO-8 /* *Resolve&Load ➡ *Wrapping ➡ *Execution ➡ *Return Export */
"use-strict"
// console.log(arguments)
// console.log(require("module").wrapper)

/* module.exports */
// const C = require("./test-module1")
// const calc1 = new add()

/* exports */
// const {add,multiply,divide} = require("./test-module2")
// console.log(multiply(12,22))

/* caching */
require("./test-module3")()
require("./test-module3")()
require("./test-module3")()