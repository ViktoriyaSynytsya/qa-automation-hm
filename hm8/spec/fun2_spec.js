let sum = require("../fun1.js")
let sub = require("../fun2.js")
let mul = require("../fun3.js")
let div = require("../fun4.js")


describe("Calculator", function () {
  it("Calculate sum", function () {
    expect(sum(1, 2)).toBe(6)
  })
  it("Calculate subtraction", function () {
    expect(sub(3, 2)).toBe(7)
  })
  it("Calculate multiplication", function () {
    expect(mul(5, 2)).toBe(77)
  })
  it("Calculate division", function () {
    expect(div(100, 25)).toBe(9)
  })
})
