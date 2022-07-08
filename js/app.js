let user_name = "satinder";
let user_age = 20;
let is_member = true;
let is_rich = true;
let city = "calgary";
if ((user_name === "admin") || (user_age >= 30 && is_member === true)){
    console.log("The user is admin  either 30 or above and for sure is the member");
} else if ((is_rich === true || city === "calgary") && (is_member === false || city === "edmonton") ){
    console.log(`the user is rich either from ${city} and from edmonton either a member or not`);
} 
else {
    console.log("user is not admin");
    console.log(`user is ${user_name}`);
    console.log(`you are :${user_age}`);
}
let max_volume = 500;
let current_value = 400;
console.log(max_volume/current_value);
console.log(max_volume/current_value * 100);
let user_names = [`aman`, `mandeep`, `arvinder`, `teejay`, `jass`];
let user_ages = [20,30,40,35,45];
let first_user_name = user_names[0];
let last_user_names = user_names[4];
let middle_user_age = user_ages[2];
console.log(first_user_name);
console.log(last_user_names);
console.log(middle_user_age);
user_names.push(`navdeep`);
console.log(user_names);