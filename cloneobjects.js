// cloning or copying an object

let object1={
    color:"red",
    fruit:"apple"
}

// create an empty object
let object2={}


//method 1
//iterate over object 1 and copy the contents to object 2
for(let key in object1){
    object2[key]=object1[key]
}

// both the objects have same content now, but both are not same objects.
// console.log(object1===object2)

//method 2 assign method
// create objects with some contents
let object3={
    taste:"sweet",
    seasonal:"no"
}

let object4={
    cost:"100$ per box"
}


// Object.assign(object1,object3,object4)
// console.log(object1)

// method 3 nestecd cloning
let object5={
    name:"Gowthami",
    age:25,
    // nested object reference
    skills:{
        language:"JavaScript",
        occupation:"Appliction engineer"
    }
}

// assign method
// we are cloning an empty object with the contents of object 5
// but the nested object will still be same object reference for both objects
let object6=Object.assign({},object5)
console.log(object6)

console.log(object5.skills===object6.skills)
object6.skills.language="Java"
console.log(object5.skills.language)
