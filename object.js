// object literals in JSON structure

let cats={
    name:"Tingu",
    age:1
};

// console.log(cats.name)

// having multi word key 
// the below code will give error
// cats.eye color="green"

cats["eye color"]="Green"
console.table([cats])

// console.log(cats["eye color"])

// when you want to access the key based on user input or some other condition, 
// pass those as key enclosed in []

let key="name" // here name is one of the keys, and Tingu is the value for this "name"

// passing the key
console.log(cats[key])

let key1="age"
// console.log(cats.key1)
// line 27 will throw error because there is no key with "key1" name in cats object. 