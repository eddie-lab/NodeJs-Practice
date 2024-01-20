const { readFile, writeFile } = require('fs');
const util = require('util');

// Promisify the readFile and writeFile functions
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        // Read the content of the first file
        const first = await readFilePromise('./content/first.txt', 'utf8');

        // Read the content of the second file
        const second = await readFilePromise('./content/second.txt', 'utf8');

        // Log the contents of both files to the console
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};

// Invoke the start function to begin the asynchronous operations
start();


//const getText = (path)=>{
// return new Promise((resolve,reject)=>{
//       readFile(path,'utf8', (err,data)=>{
//          if (err) {
//                reject(err)
//        
//            }else {
//                resolve(data)
//            }
//        
//        })
//    })
//}



//getText('./content/first.txt')
//.then((result) => console.log(result))
//.catch((err) => console.log(err))
