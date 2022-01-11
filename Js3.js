// Expected result :  [7, 7, 7, 6, 92, 11]
// Direction : copy arr1 last three of element without removing default length and fill the rest value with 7

const arr1 = [12, 24, 51, 6, 92, 11];

function result(arr1) {
    var result = arr1.slice(3)
    for(i = 0; i<result; i++){
        result[i]=7;
        result.push();
    }

    return result;
}

console.log(result(arr1));