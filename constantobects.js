// we can change properties of the object even though they are assigned to constant. 

const customer={
    name:"gowthami",
    age:25
}

// update name property. 
customer.name="Gowthami"

console.log(customer)

// assign a new object to the constant, will throw error.
// customer={
//     name:"Test"
// }