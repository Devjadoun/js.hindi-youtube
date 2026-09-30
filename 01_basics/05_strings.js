const name = "devjadoun"
const repoCount = 50

//console.log(name + repoCount + "value"); outdated

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('dev-jad-com')
console.log(gameName[2]) //v
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-6,4);
console.log(anotherString);


const newString2 = "      dev-jad        "
console.log(newString2)
console.log(newString2.trim())

const url = "https://hitesh.com/hitesh%20choudhary.com"
console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'))


console.log(gameName.split('-'));


