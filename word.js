#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var fs = require("fs");
function countWords(text) {
    var words = text.split(/\s+/);
    return words.length;
}
function readTextFromFile(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    }
    catch (err) {
        console.error('Error reading file:', err);
        process.exit(1);
    }
}
function main() {
    var userInput = readlineSync.question('Enter a sentence or file path: ');
    var text;
    if (fs.existsSync(userInput)) {
        // If the user input is a valid file path
        text = readTextFromFile(userInput);
    }
    else {
        // If the user input is a sentence
        text = userInput;
    }
    var wordCount = countWords(text);
    console.log("Total words: ".concat(wordCount));
}
main();
