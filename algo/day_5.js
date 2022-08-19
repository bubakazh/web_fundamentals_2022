//ARRAYS

var name = "Troy Manansala"
var age = 33
vAr check = false
var price = 3200

var array = ["Troy Manansala", 33, false, 3200]

//AN ARRAY IS LIKE A PARKING STRUCTURE. IT MAKES ENOUGH SPOTS FOR THE AMOUNT OF DATA THAT ARE IN THE ARRAY.

//THE FOLLOWING IS CALLED THE INDEX
//                   0          1     2     3
var array = ["Troy Manansala", 33, false, 3200]

console.log(array)
//THIS RETURNS ALL THE INFORMATION IN THE ARRAY

console.log(array[0])
//THIS RETURNS ONLY THE DATUM THAT IS INDEXED IN POSITION 0.

myInfo[1]//?

//ARRAYS SHOULD HOLD THE SAME TYPE OF DATA.
//ARRAYS SHOULD HOLD LIKE DATA..
//EG
var numArray [1, 2, 3, 4, 5, 6 ,7, 8]

var priceArray [1.3, 4.5, 5.8, 1120430]
//REGARDING HOLDING LIKE DATA, FOR EXAMPLE IN THE priceArray PERHAPS THE FIRST THREE DATA ARE PRICES OF GROCERIES
//AND THEN THE LAST DATUM IS THE AVG PRICE OF HOUSING. NGNGNG

//MANIPULATE AN ARRAY
var charArray = []

//ADD A VALUE
console.log(charArray) //THIS WILL NOT HAVE ANY OUTPUT
charArray.push("a") //PUSH ADDS THINGS TO THE ARRAY
charArray.push("b")
charArray.push("c") //PUSH ADDS THINGS TO THE END OF THE ARRAY

//REMOVE A VALUE
charArray.pop() //POP REMOVES THE LAST DATUM INDEXED IN THE ARRAY

//LENGTH OF ARRAY
console.log(charArray.length) //THIS WILL GIVE US HOW MANY DATA ARE IN THE ARRAY, BUT REMEMBER INDICES START AT 0.
console.log(charArray.length - 1) //SINCE INDICES START AT 0, IF WE SUBTRACT ONE FROM THE LENGTH OF THE ARRAY, WE GET THE "LAST" INDEX VALUE

//ITERATE THROUGH AN ARRAY
for (let i = 0; i < charArray.length; i++) {
    console.log(charArray[i]);

}

//EG
var nameArray = ["Troy", "Daniel", "John", "Ricky", "Ash", "Jordan", "Wendy", "Val"]

for (let index = 0; index < nameArray.length; index++) {
    console.log(nameArray[index]);
    
}
//WILL OUTPUT THE THINGS IN THE ARRAY

//CHANGING SOMETHING IN THE ARRAY
//array   index   new value.
nameArray[3] = "Pretty Ricky"

//ITERATING THROUGH AND FINDING THE MAXIMUM
funtion printMaxofArray(arr){
    var max = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max)
}

//TRY TO RE-WRITE THIS CODE TO LOOK FOR MINIMUM

//WHENEVER WE'RE SEARCHING FOR A MIN OR MAX MAYBE START WITH THE FIRST VALUE OF THE ARRAY.
