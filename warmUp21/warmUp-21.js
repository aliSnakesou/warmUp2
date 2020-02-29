// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

// we will count the number of appearance of every character in the input string into our input text ,and we will push every number of occurance to a new array ,than we will just work on the numbers of the array

function howManyTime(text, str){
  var array1=str.slice("");
  var array2=text.slice("");
  var result=[];
  for(var j =0 ;j<array1.length; j++){

  //this part will count how many time is repeated every character of str into text and push the value to a string
  var count=0;
  for(var i =0; i<array2.length; i++){
    
    if(array2[i]===array1[j]){
      count++
    }

  }
  result.push(count)
  }

  // now we will just return the minimum number of the result array this will be our input :)
  var min=result[0];
  for(var k = 0; k< result.length; k++){
    if(min > result[k]){
     min=result[k];
    }
  }
  return min;
}

