const fs = require('fs')

fs.stat('input.txt', (err, stat) => {
    console.log(stat)
})

fs.exists('output.txt', (flag) => {
    if (flag) 
    {
        fs.unlinkSync('output.txt')
        console.log("file deleted successfully")
    } else {
        console.log("No file exists+")
    }
})
fs.unlinkSync('output.txt')