// fuction inside an object is method

let obj1={
    name:"John",
    sayHello(){
        console.log("my name is "+this.name) // error
    }
}

// copy the obj1 to another object.

let obj2=obj1

// nullify obj1

obj1=null

obj2.name="Gowthami"
obj2.sayHello() // error