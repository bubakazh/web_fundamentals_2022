//CONDITIONAL STATEMENTS
for (let i = 0; i < 10; i++){
    console.log(i)
}

var myName = "Troy"
if (myName === "Troy") {
    console.log("You are indeed Troy.")
}
//IF STATEMENTS LOOK FOR CERTAIN THINGS TO BE TRUE.
//ELSE STATEMENTS ARE WHAT CAN BE CALLED A CATCH ALL STATEMENT; THIS WILL BE THE OUTPUT FOR ALL INPUTS OR RESULTS THAT ARE OUTSIDE OFTHE CONDITIONS SET BY THE IF STATEMENT
//ELSE IF STATEMENTS MUST COME AFTER AN INITIAL IF STATEMENT, AND THEY PROVIDE ANOTHER CONDITION TO LOOK FOR.
else if (myName === "Spike") {
    console.log("スパイク！も～お前、自分の名前もう忘れたの？馬鹿かお前？！")
}
else{ 
    console.log("君、誰なん？")
}
var first = ""
var last = ""
var email = ""
var password = ""
var confirmPassword = ""

//FIRST NAME MUST EXIST AND MUST BE LONGER THAN THREE CHARACTERS
if (first.length < 3) {
    console.log("First name must be longer.")
}

//LAST NAME MUST EXIST, LONGER THAN 3 CHARS
if (last.length < 3) {
    console.log("Last name must be longer.")
}
//EMAIL MUST EXIST AND NOT BE IN SYSTEM ALREADY.
if (email.length < 0) {
    console.log("Please enter a valid email address.")
}
//PASSWORD MUST BE AT LEAST 8 CHARACTERS LONG
if () {
    
}
//CONFIRM PASSWORD MUST MATCH PASSWORD


