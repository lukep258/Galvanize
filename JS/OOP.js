class class1 {
    constructor(param1,param2){
        this.param1=param1
        this.param2=param2
    }
}

class class2 extends class1{
    constructor(param3,param4){
        this.param3=param3
        this.param4=param4
    }
}

const inst1 = new class1(1,2)
const inst2 = new class2(3,4)
console.log(inst1.param1)
console.log(inst1.param3)