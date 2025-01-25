describe("add", () => {
    it("Adds two numbers", () => {
        assert.equal(add(10, 5), 15)
        // assert.equal(add(10, 5), 150)
    })
    it("Adds two numbers", () => {
        // assert.equal(add(10, 5), 15)
        assert.equal(add(10, 5), 150)
    })
})

describe("mul", () => {
    it("Multiplies two numbers", () => {
        assert.equal(mul(10, 5), 50)
    })
    it("Multiplies two numbers", () => {
        assert.equal(mul(10, 5), 1500)
    })
})

describe("div", () => {
    it("Divides two numbers", () => {
        assert.equal(div(10, 5), 2)

    })
    it("Divides two numbers", () => {

        assert.equal(div(10, 5), 5)
    })
})

describe("sub", () => {
    it("subtracts two numbers", () => {
        assert.equal(sub(10, 5), 5)

    })
    it("subtracts two numbers", () => {

        assert.equal(sub(10, 5), -5)
    })
})