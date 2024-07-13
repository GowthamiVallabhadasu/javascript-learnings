
let userName=prompt("Who's there?")

if(userName=="admin"){
    let password=prompt("Enter passoword")
    if(password==="admin"){
        alert("Welcome!")
    }
    else {
        alert("Wrong password")
    }
}
else if(userName =="" || userName==null){
    alert("Enter user name")
}

else{
    alert("I dont know you")
}

