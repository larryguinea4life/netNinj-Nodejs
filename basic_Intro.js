const fs = require('fs');


// console.log(global); // this global object gets us the properties and global methods available (just like the window object in browsers).
// console.log(__dirname) //this gets us the absolute path of the current folder that our current file is in.
// console.log(__filename) //this gets us the absolute path of the current folder that our current file is in INCLUDING the filename as well

// const os = require('os');
// console.log(os);
// console.log(os.platform(), os.homedir());


// ----------------------reading files---------------------
// fs.readFile('./docs/test.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });



// // -------------------writing files-------------------------
// fs.writeFile('./docs/newTest.txt', 'Hello hello everyone', () =>{
//   console.log('file was written');
// });


// -------------------directories------------------------
// existsSync() is a synchronous method (meaning it will block the code). It will first check if something exist
//"if (fs.existsSync('./myAssets'))" checks if the my "myAssets" folder exists already (or does not exist).
// if (!fs.existsSync('./myAssets')) {
//   fs.mkdir('./myAssets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder was created');
//   });
// } else {
//   fs.rmdir('./myAssets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder deleted');
//   })
// }



// -------------------deleting files----------------------------
// if (fs.existsSync('./docs/deletethis.txt')) {
//   fs.unlink('./docs/deletethis.txt', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('file deleted!');
//   })
// }

// ---------------------STREAMING------------------------------
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunkOfData) => {
//   console.log('---- NEW CHUNK----');
//   //console.log(chunkOfData);
//   writeStream.write('\nNEW CHUNK\n');
//   writeStream.write(chunkOfData);
// });
//---------------------piping-----------------
// piping is a shorter is a shorter way of doing the above
readStream.pipe(writeStream);
