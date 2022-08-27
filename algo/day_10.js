
var arr = [ "1" , "2" , "3" , "4" , "5"]
// function reverseArray(arr){
//     var revArr = [];
//     for(i = arr.length-1; i >= 0; i--){
//         revArr.push(arr[i]);
//     }
//     console.log(arr);
//     console.log(revArr);
//     return revArr;
// }
// reverseArray(arr);

//the challenge solutions
//shifting values left without creating a new array

function shiftArrayValsLeft(arr){
    for(var i = 1; i < arr.length; i++){
        arr[i-1] = arr[i];
    }
    // method 1
    //arr.pop();
    //arr.push(0);

    //method2
    arr[arr.length - 1] = 0;
}

function reverseArray(arr){
    console.log(arr);
    for(var i = 0; i < Math.floor(arr.length/2); i++){
        //swapping values. we need to create a third variable to hold one of the values.
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr);
    return arr;
}
reverseArray(arr);