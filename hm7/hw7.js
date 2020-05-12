let fs = require("fs");
let randomstring = require("randomstring");
let math = require('math-random')

class Student {
    constructor(name, surname, rate) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
    }

    displayInfo() {
        console.log(`Name: ${this._name};
                Year: ${this._surname};
                Max Speed: ${this._rate};
    `)
    }
}

//let vika = new Student('Vika', 'b', '3')
let vika = new Student(randomstring.generate({
    length: 12,
    charset: 'alphabetic'
  }), 
    randomstring.generate({
    length: 12,
    charset: 'alphabetic'
  }), '100')
 

console.log(vika)
let vikaJson = JSON.stringify(vika);
console.log(vikaJson);

fs.writeFile("vika.txt", vikaJson, function (err) {
    if (err) throw err;
})

fs.readFile("vika.txt", "utf8", function (err, data) {
    if (err) throw err;
    var jsonFromFile = JSON.parse(data)
    jsonFromFile._name = "Kolya";
    fs.appendFile("vika.txt", JSON.stringify(jsonFromFile), function (err) {
        if (err) throw err;
    })
    fs.readFile("vika.txt", "utf8", function (err, data) {
        if (err) throw err;      
        console.log(data)
    })
})
// setTimeout(()=>{
//     fs.readFile("vika.txt", "utf8", function (err, data) {
//         if (err) throw err;      
//         console.log(data)
//     })
// }, 5000)
