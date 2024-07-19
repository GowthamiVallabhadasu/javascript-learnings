// Password verification

let userName="admin"
let password="admin123"
do{

    let PromptUserName= prompt("Enter user name")
    let PromptPassword =prompt("Enter the password for "+userName)
    if(PromptPassword!=password)
        document.write("Worng password")
     
       
}
while(PromptUserName !=userName)
