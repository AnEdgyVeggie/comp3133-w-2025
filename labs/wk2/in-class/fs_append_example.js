const fs = require('fs')

async function addHeader(fileName) {
    try {
        await fs.promises.appendFile(fileName, 'StudentID, firstName, LastName')
        console.log('Student Header Added')
    } catch (err) {
        console.log("Error while adding header to file")
    }
}


async function appendData(fileName, sid, fnm, lnm) {
    try {
        await fs.promises.appendFile(fileName, `${sid},${fnm},${lnm}`)
        console.log("Student Record Added")
    } catch (error){
        console.log("Error while appending student data")
    }
}

const file = 'student.csv'
addHeader(file)
appendData(file, 1, 'Pritesh', 'Patel')