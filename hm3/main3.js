/*Write a JavaScript function to check if given string includes given symbol.*/

let str = 'I have a cat'

let sym = str.indexOf("a")
console.log(sym)

/*Write a JavaScript function to check whether a string is blank or not (string with spaces should be also blank).*/

let blank = function(str) {
    if (str.length===0 && str.indexOf(' '))
    return true;
    else 
    return false;
}
console.log(blank('I have a cat'))
console.log(blank(''))
console.log(blank(' '))

/*Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Nazar Babii")) 
– should be “N.B.” (should convert lower case names to upper)*/

let name = 'viktoriya synytsya'
let name2 = name.split(' ')
/*console.log(name2)*/
 let name3 = name2[0]
 let name4 = name2[1]
 let name5 = name3.charAt(0)
 let name6 = name4.charAt(0)
 console.log(name5.toUpperCase()+'.'+name6.toUpperCase()+'.')

 /*Write a JavaScript function that accept two integers and display the larger.*/

 let fun = function(n1,n2) {
   if (n1>n2)
   return n1;
   if (n2>n1)
   return n2

 }
console.log(fun(5,7))
 /*Write a JavaScript function with conditional statement to sort three numbers.*/
let integer1 = 2
let integer2 = 3
let integer3 = 4
   if (integer1 <= integer2 && integer1 <= integer3)
   {
       if (integer1 <= integer2)
       {
       console.log(integer1+','+integer2+','+integer3)
       }
   
       else
       {
       console.log(integer1+','+integer3+','+integer2)

       } 
   }
   if (integer2 <= integer1 && integer2 <= integer3)
   {
       if (integer2 <= integer1)
       {
        console.log(integer2+','+integer1+','+integer3)   
       }
       else
       {
        console.log (integer2+','+integer3+','+integer1)
       }
    }
    if(integer3 <= integer1 && integer3 <= integer2)
    {
        if(integer3 <= integer1)
        {
        console.log (integer3+','+integer1+','+integer2)    
        }
        else{
        console.log (integer3+','+integer2+','+integer1)        
        }
    }









