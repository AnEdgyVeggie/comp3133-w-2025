const csv = require("csv-parser")
const fs = require('fs')

const initializeFile = (filename) => {
    const header = Buffer.from(`${filename}, Year, Population\n`)
    fs.writeFileSync(filename.toLowerCase()+".txt", header, (error) => {
        if (error) {
            console.log("==================\nThere was an error: \n" + error + "\n==================")
            return
        }
    })
}

const writeToFiles = () => {
    fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {
        
        if (row.country.toLowerCase() === "canada") {
            console.log(row)
            fs.appendFile("canada.txt", `Canada ${row.year} ${row.population}\n`, err => {
                console.log(err)
            })
        } else if (row.country.toLowerCase() === "united states") {
            console.log(row)
            fs.appendFile("united states.txt", `United States ${row.year} ${row.population}\n`, err => {
                console.log(err)
            })
        }
    })
    .on('end', () => {
        console.log("end")
    })
}

initializeFile("Canada")
initializeFile("United States")
writeToFiles()