const fs = require('fs')
const zlib = require('zlib')
const ToLowerCasePipe = require('./word_split_pipe')

const readStream = fs.createReadStream('input_stream.txt')
const outputStream = fs.createWriteStream('output_stream.txt')

readStream.on('data', (chunk) =>{
    console.log(chunk.toString())
})


readStream.on('end', () =>{
    console.log(`Read Stream Ended.`)
})

readStream.on('error', (err) =>{
    console.log(`ERROR: READ STREAM: ${err}`)
})

readStream.on('close', () =>{
    console.log(`Read Stream Closed.`)
})

outputStream.write("Hello")
outputStream.write("world")
outputStream.write("Nodejs")



readStream.pipe(outputStream)

readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('stream.gz'))

readStream.pipe(new ToLowerCasePipe)
.pipe(fs.createWriteStream('lower_stream.txt'))


// outputStream.end()