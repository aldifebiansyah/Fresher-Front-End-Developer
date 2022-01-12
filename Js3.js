// Expected result :  [7, 7, 7, 6, 92, 11]
// Direction : copy arr1 last three of element without removing default length and fill the rest value with 7

const arr1 = [12, 24, 51, 6, 92, 11];

function result(arr1) { 
    for(i = 0; i<arr1.length; i++){
        if(i<=2){
            arr1.splice(i,1, 7);
        }
    }
    return arr1
}

console.log(result(arr1));