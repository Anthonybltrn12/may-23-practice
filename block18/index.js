const multiply = {
product: (num1, num2) => {
    return num1 * num2
}
}



const odd = {
concat: (arr1, arr2) => {
    let finalArr = []
    for(let i = 0; i <= arr1.length -1 ; i++){
        if(arr1[i] % 2 === 1 || arr2[i] % 2 === 1){
           
           finalArr = arr1.concat(arr2)
        }
    }
    return finalArr
}
}

module.exports = { multiply ,odd}