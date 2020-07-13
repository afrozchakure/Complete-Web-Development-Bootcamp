// 1. Create a var that stores the name that user enters via prompt
name = prompt('What is your name?')

// 2. Capitalize the first letter of their name
var firstCharUpper = name.slice(0, 1).toUpperCase()

// 3. Turn final characters into lowercase 
var restCharLower = name.slice(1,).toLowerCase()

// Concatenate and raise alert
alert('Hello, ' + firstCharUpper + restCharLower)

