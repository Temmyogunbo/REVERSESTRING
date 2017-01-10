

module.exports = {

reverseString: function(str){
          if(!str)return null;    //if not string return null
          var original=str.toLowerCase();          //if it is a string, convert to small letter
          reverse=original.split('').reverse().join('');   //split the string, reverse the order, and join again
          response=(original===reverse) ? true : reverse;     //if original is the same as reverse as in palindrome, return true else return the reverse string
          return response;
        }
}    




 