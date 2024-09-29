// constructor is called when an object is created with new keyword. 

function User(name,age){
    this.name=name,
    this.age=age
    console.log("My name is "+this.name +" and age is "+this.age)

}

let obj1=new User("Gowthami",25)
let obk2=new User("Tingu",1.5)

