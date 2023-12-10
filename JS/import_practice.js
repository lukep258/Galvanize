import objofFntoExport from "./ES6_notes.js" //object of functions
import { exportedFn } from "./ES6_notes.js" //individual function
import { classToExport } from "./ES6_notes.js"

// ES6_notes.fn1()
// ES6_notes.fn2()
// ES6_notes.fn3()
exportedFn()

const testClass=new classToExport(1,2,3)
testClass.fn1()