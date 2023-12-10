const testObj1 = {a:1,b:2,c:3}
const testArr1 = [1,2,3]


//spread: clone
const spreadObjClone=()=>{
    const clone = {...testObj1}
    console.log('spreadObjClone',clone)
}

//spread: add item to object
const spreadObjAdd=()=>{
    const clone = {...testObj1,d:4}
    console.log('spreadObjAdd',clone)
}

//spread: remove item from object
const spreadObjSubtract=()=>{
    const {c,...clone} = testObj1
    console.log('spreadObjSubtract',clone)
}

//spread: edit property of object
const spreadObjEdit=()=>{
    const clone = {...testObj1,c:4}
    console.log('spreadObjEdit',clone)
}

//literals: shorthand add to object
const literalShortHand=()=>{
    const a = 1
    const b = 2
    const c = 3
    const testObj2 = {
        a,
        b,
        c
    }
    console.log('literalShortHand',testObj2)
}

//literals: computed add to object
const literalComputed=(key,property)=>{
    return {
        [key]:property
    }//computed properties are returned not assigned
}

//spread: add item to end of array
const spreadArrPush=()=>{
    const clone = [...testArr1,4]
    console.log('spreadArrPush',clone)
}

//spread: add item to front of array
const spreadArrUnshift=()=>{
    const clone = [4,...testArr1]
    console.log('spreadArrUnshift',clone)
}

//spread: edit item in array
const spreadArrEdit=()=>{
    const index = 1
    const clone = [
        ...testArr1.slice(0,index),
        4,
        ...testArr1.slice(index+1,testArr1.length)
    ]
    console.log('spreadArrEdit',clone)
}

//spread: remove item anywhere in array
const spreadArrRemoveAnywhere=()=>{
    const clone = testArr1.filter(elem=>elem!==2)//value not index
    console.log('spreadArrRemoveAnywhere',clone)
}

//spread: remove last item from array
const spreadArrPop=()=>{
    const clone = testArr1.slice(0,-1)
    console.log('spreadArrPop',clone)
}

//spread: remove first item from array
const spreadArrShift=()=>{
    const clone = testArr1.slice(1) //how many to remove
    console.log('spreadArrShift',clone)
}

//destructuring: remove object name from parameter
const destructureKeys=({a,b,c})=>{
    console.log('destructureKeys',a,b,c)
}


const allReferences=()=>{
    spreadObjClone() 
    //ln 10

    spreadObjAdd()
    //ln 16

    spreadObjSubtract()
    //ln 22

    spreadObjEdit() 
    //ln 28

    literalShortHand() 
    //ln 34

    const testObj3 = literalComputed('a',1) 
    console.log('literalComputed',testObj3)
    //ln 47

    spreadArrPush() 
    //ln 54

    spreadArrUnshift() 
    //ln 60

    spreadArrEdit()
    //ln 66

    spreadArrRemoveAnywhere()
    //ln 77

    spreadArrPop()
    //ln 83

    spreadArrShift()
    //ln 89

    destructureKeys(testObj1)
    //ln 95
}


//runs when imported
// allReferences()



//-------EXPORT PRACTICE

//exports this individual function
export const exportedFn=()=>{
    console.log('good export')
}

//object of functions exported by 'export default'
const objofFntoExport = {
    fn1:()=>{console.log('function 1')},
    fn2:()=>{console.log('function 2')},
    fn3:()=>{console.log('function 3')}
}

export class classToExport {
    constructor(x,y,z){
        this.x=x
        this.y=y
        this.z=z
    }
    fn1(){
        console.log(this.x,this.y,this.z)
    }
}

// 'import ES6_notes.js from './ES6_notes.js''  to import
// export default objofFntoExport

export default objofFntoExport
