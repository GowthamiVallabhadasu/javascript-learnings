// nulliying the objects, GC will free up the memory. 

let obj1={
    name:"John"
}

console.log(obj1.name)

let obj2=obj1

// GC didnt not free up the object from memory, because obj2 has reference to it.
obj1=null

