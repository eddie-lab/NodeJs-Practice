 const { readFileSync, writeFileSync } = require('fs')
console.log('start')
 const first = readFileSync('./content/first.txt','utf8')
 const second = readFileSync('./content/second.txt','utf8')

 // write to a file
 // flag overwrites

 writeFileSync('./content/result-sync.txt',
 `here is the result :${first}, ${second}`,
 {flag:'a'}
 )

 console.log('Done with this task')
 console.log('starting new task')
