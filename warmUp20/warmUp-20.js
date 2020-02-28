// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseStr(str){
  var string="";
  var array=str.split(" ");
  var result=[];
  var i=array.length;
  // we will return the array result with reversed word 
  while(i--){
    result.push(array[i])
  }
  //  we will concatinate the result so the out put will be string
 for(var j =0; j < result.length; j++){
   string=string+" "+result[j];
 }
 return string;
}