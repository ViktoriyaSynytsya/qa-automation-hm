let fs = require("fs")
/*let st = json.parse({
    "name": "Viktoriya",
    "surname": "Synytsya",
    "rate": 100

})*/

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

let vika = new Student('Vika', 'b', '3')
console.log(vika)
let vikaJson = JSON.stringify(vika);
console.log(vikaJson);
fs.writeFile("vika.txt", vikaJson, function(err){
    if(err) throw err;
})