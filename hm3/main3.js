/*Write a JavaScript function to check if given string includes given symbol.*/

function containsSymbol(str, sym) {
    if (str.indexOf(sym) != -1) {
        return true;
    } else {
        return false;
    }
}


let str = 'I have a cat';
let sym = 'a';
console.log("containsSymbol result: " + containsSymbol(str, sym));

/*Write a JavaScript function to check whether a string is blank or not (string with spaces should be also blank).*/

function blank(str) {
    if (str.trim().length === 0) {
        return true;
    }
    else {
        return false;
    }

}
console.log('1 case: ' + blank('I have a cat'))
console.log('2 case: ' + blank(''))
console.log('3 case: ' + blank(' '))

/*Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Nazar Babii")) 
– should be “N.B.” (should convert lower case names to upper)*/

let name = 'viktoriya synytsya'
let name2 = name.split(' ')
/*console.log(name2)*/
let name3 = name2[0]
let name4 = name2[1]
let name5 = name3.charAt(0)
let name6 = name4.charAt(0)
console.log(name5.toUpperCase() + '.' + name6.toUpperCase() + '.')

/*Write a JavaScript function that accept two integers and display the larger.*/

let max = function (n1, n2) {
    if (n1 > n2)
        return n1;
    else
        return n2

}
console.log(max(5, 7))
/*Write a JavaScript function with conditional statement to sort three numbers.*/


function sort(a, b, c) {
    if (a < b && a < c) {
        if (b < c) {
            console.log(a, b, c)
        } else {
            console.log(a, c, b)
        }
    } else if (b < a && b < c) {
        if (a < c) {
            console.log(b, a, c)
        }
        else {
            console.log(b, c, a)
        }
    } else {
        if (a < b) {
            console.log(c, a, b)
        } else {
            console.log(c, b, a)
        }
    }
}
sort(8,6,0)