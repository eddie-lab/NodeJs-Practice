const os = require('os')

// info about current users

const user = os.userInfo()
console.log(user)

// method returns systemuptime in min
console.log(`The system uptime is ${os.uptime}minutes`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem:  os.freemem(),
}

console.log(currentOS)