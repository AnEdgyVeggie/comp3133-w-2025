console.log("Week 1 - Buffer Examples")

// let b1 = new Buffer('hello there')
let b1 = Buffer.from("A Hello")

console.log(b1)
console.log(b1[0])
console.log(b1.toString('ascii'))
console.log(b1.toString('utf8'))
console.log(b1.toString('hex'))
console.log(b1.toString('base64'))
console.log(b1.toString('ucs-2'))

console.log(b1.includes("He"))

console.log(b1.length)

// Alloc

let b2 = Buffer.alloc(10, 'B')
console.log(b2)
b2[0] = 65
// b2[0] = 'A'
console.log(b2[0])
console.log(b2.toString())
console.log(b2)


let b3 = Buffer.allocUnsafe(20)
console.log(b3)
b3.fill('C')
console.log(b3)
console.log(b3.toString())

let b4 = Buffer.from('') // emoji bullshit
console.log(b4)
console.log(b4.toString())
console.log(b4[0])=