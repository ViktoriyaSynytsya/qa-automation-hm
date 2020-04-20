/*Write a JavaScript function to get the last element of an array*/

function ar () {
    let array = [1,2,3,4,5]
    let lastItem = array.pop()
    console.log('Last item = ' + lastItem)}
    ar()
	
/*Write a simple JavaScript program to join all elements of the following array into a string*/

let arr = ['Cat', 'Dog', 'Horse']   
console.log(arr.join(""))

/*There are two arrays with individual values, write a JavaScript program to compute the sum 
of each individual index value from the given arrays and save them to third array*/
let array1 = [1,2,14,100]
let array2 = [2,5,7,0,3]
let array3 = [array1[0]+array2[0],array1[1]+array2[1],array1[2]+array2[2],array1[3]+array2[3]]
console.log('Sum = '+ array3)

/*Write a JavaScript program to calculate the area and perimeter of a rectangle. 
Rectangle should be an object with properties width and height and methods getArea() and getPerimeter();*/

let rectangle = {
	width:110,
    height:220
	}
rectangle.getArea = function (){
return this.height * this.width;
}
rectangle.getPerimeter = function () {
return this.height * 2 + this.width * 2;
}
console.log ('Area = '+ rectangle.getArea() + ',' + 'Perimeter = ' + rectangle.getPerimeter())






