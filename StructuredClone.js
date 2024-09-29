// structured cloning clones the nested objects as well. 

let fruits={
    name:"mango",
    taste:"sweet",
    // nested object
    exports:{
        place1:"India",
        place2:"Bangladesh"
    }
}

let newFruits=structuredClone(fruits)
console.log(newFruits)
console.log(newFruits==fruits)

// update newFruits 
newFruits.exports.place3="Pakistan"

console.log(newFruits.exports.place3)
console.log(fruits.exports.place3)

