let calc = require("../fun.js");


describe("Calculator", function () {
  it("Calculate sum", function () {
    let op = '+'
    expect(calc[op](1, 2)).toEqual(7)
  })
  it("Calculate sum", function () {
    let op = '-'
    expect(calc[op](10, 2)).toEqual(8)

  })
  it("Calculate sum", function () {
    let op = '*'
    expect(calc[op](2, 3)).toEqual(6)

  })
  it("Calculate sum", function () {
    let op = '/'
    expect(calc[op](10, 2)).toEqual(5)

  })
})