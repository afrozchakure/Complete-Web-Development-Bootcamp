// jshint esversion:6

// We have included the file system module into our project
const fs = require("fs");

// Copy file1.txt to file2.txt
fs.copyFileSync("file1.txt", "file2.txt");

// We can make use of node to affect file system in our local system

// npm is a package manager for external modules