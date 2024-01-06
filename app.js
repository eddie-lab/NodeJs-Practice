// npm -global command,comes with node
// npm -- version

// local dependency- use it only in this particular project
// npm i <packageName>

// global dependency- use it in any project
// npm install -g<packageName>


// package.json - manifest file (stores important info about project/package)
// manual approach ( create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)



const lod = require('lodash')

const items = [1,[2,[3,[4]]]]
const newitems = lod.flattenDeep(items)
console.log(newitems)


// git  config --global user.email "you@example.com"
//git config --global user.name "Your Name"