function possibleSubArrayy(array, subLength, fixedIndex, count, sequence) {
    count++
    if(count < subLength) {
        for(let i = fixedIndex+1; i<=array.length-subLength+1; i++ ){

           possibleSubArrayy(array, subLength, i, count, sequence+array[i])
        }
      
   } else {
    for(let j = fixedIndex + 1; j < array.length; j++){
        console.log(sequence+array[j])

    }
   }


}

possibleSubArrayy([1,2,3,4,5], 3, 0, 1, "1")
