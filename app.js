const fs = require('fs');
const http = require('http');
const jsdom = require("jsdom");

let FileContent;
let originalHTMLFileContent;
let originalMDFileContent;

// Reading files asynchronously
/*fs.readFile('SzakmaiNap.html', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file SzakmaiNap.html: ' + err);
        return;
    }
    originalHTMLFileContent = data;
    console.log('SzakmaiNap.html: ' + originalHTMLFileContent);
});*/

// Reading files synchronously
// This one reads the html
try {
    const data = fs.readFileSync('SzakmaiNap.html', 'utf8');
    console.log('File: SzakmaiNap.html');
    originalHTMLFileContent = data;
} catch (err) {
    console.error('Error reading file SzakmaiNap.html:', err);
}

// This one reads the md
try {
    const data = fs.readFileSync('SzakmaiNap.md', 'utf8');
    console.log('File : SzakmaiNap.md');
    originalMDFileContent = data;
} catch (err) {
    console.error('Error reading file SzakmaiNap.md:', err);
}

//Function for creating an HTML DOM doc
function createDom(text) {
    const domDoc= new jsdom.JSDOM(text, "text/html");
    console.log(domDoc.window.document.querySelector("p").textContent);
    return domDoc;
}

/*
fs.readFile('SzakmaiNap.md', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file SzakmaiNap.md: ' + err);
        return;
    }
    FileContent = data;
    console.log('SzakmaiNap.md');
});
*/

// extract picture paths from already memory loaded markdown files
function pathExtractorMD(text) {
    let Array = text.split("![](");

    console.log("Pictures's paths: ")
    for (let i = 0; i < Array.length; i++ ) {
        Array[i] = Array[i].split(")")[0];
        console.log("    " + Array[i]);
    }

    return Array;
}

const listOfPictures = pathExtractorMD(originalMDFileContent);

let SzakmaiNapDom = createDom(originalHTMLFileContent);

const otherListOfPictures = SzakmaiNapDom.window.document.querySelector("img");

console.log(otherListOfPictures);

console.log('Reading file... (this would run first if we would use async fs read!)');

http.createServer((req, res) => {
    res.writeHead(200, {'contentType': 'text/plain'});
    res.end(originalHTMLFileContent);
}).listen(8080);
