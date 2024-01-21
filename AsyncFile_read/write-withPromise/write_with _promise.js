const { readFile, writeFile } = require('fs').promises


//const util = require('util');
// Promisify the readFile and writeFile functions

//const readFilePromise = util.promisify(readFile);
//const writeFilePromise = util.promisify(writeFile);
// Alternative method for running, 
// The await will take the method readFilepromise


const start = async () => {
    try {
        // Read the content of the first file
        const first = await readFile('./content/first.txt', 'utf8');

        // Read the content of the second file
        const second = await readFile('./content/second.txt', 'utf8');
        
        // Write into file
        await writeFile('./content/result-mind.txt',
        `This is wonderful : ${first} ${second}`, 
        {flag:'a'})

        // Log the contents of both files to the console
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};

// Invoke the start function to begin the asynchronous operations
start();


// Here we use wrapper function to read and write file async

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
