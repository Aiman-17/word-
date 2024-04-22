#! /usr/bin/env node

import * as readlineSync from 'readline-sync';
import * as fs from 'fs';

function countWords(text: string): number {
    const words = text.split(/\s+/);
    return words.length;
}

function readTextFromFile(filePath: string): string {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (err) {
        console.error('Error reading file:', err);
        process.exit(1);
    }
}

function main() {
    const userInput = readlineSync.question('Enter a sentence or file path: ');
    
    let text: string;
    if (fs.existsSync(userInput)) {
        // If the user input is a valid file path
        text = readTextFromFile(userInput);
    } else {
        // If the user input is a sentence
        text = userInput;
    }
    
    const wordCount = countWords(text);
    console.log(`Total words: ${wordCount}`);
}

main();


