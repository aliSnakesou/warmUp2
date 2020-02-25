/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 */

    function solution(roman){
        var symbol=["I","V","X","L","C","D","M"];
        var value=[1, 5, 10, 50, 100, 500, 1000];
        var array=roman.split('');
        var result=0;
        for(var i = 0; i < array.length; i++){
            if(symbol.includes(array[i])){
                result=result+value[symbol.indexOf(array[i])]
            }
        }
        return result;
    }
    
    // 2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
    //     Examples:

    //     toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

    //     toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
     
       function toCamelCase(string){
           if(string.includes("-")){
              var arr=string.split("-");
              var str=arr[0];
              for(var i =  1; i<arr.length;i++){
                  str=str+arr[i][0].toUpperCase()+arr[i].slice(1);
              }
              return str
           }else if(string.includes("_")){
            var arr=string.split("_");
            var str=arr[0];
            for(var i =  1; i<arr.length;i++){
                str=str+arr[i][0].toUpperCase()+arr[i].slice(1);
            }
            return str
       }else{ 
           return "there is no dashes in your input";
          }
       }
    // 3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
    //     Example

    //         filter_list([1,2,'a','b']) == [1,2]
    //         filter_list([1,'a','b',0,15]) == [1,0,15]
    //         filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
function filter_list(array){
    var result=[];
    for(var i =0; i < array.length; i){
        if(typeof(array[i])!=="string"){
            result.push(array[i]);
        }
    }
    return result;
}

