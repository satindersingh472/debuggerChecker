let user_name = "satinder";
let user_age = 20;
let is_member = true;
let is_rich = true;
let city = "edmonton"
if ((user_name === "admin") || (user_age >= 30 && is_member === true)){
    console.log("The user is admin  either 30 or above and for sure is the member");
} else if ((is_rich === true || city === "calgary") && (is_member === false || city === "edmonton") ){
    console.log("the user is rich either from  calgary and from edmonton either a member or not  ")
} 
else {
    console.log("user is not admin");
}