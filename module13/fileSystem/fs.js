// const fs = require('fs');
// console.log("task 1")
// const text = "learning file system ";
// fs.writeFileSync('./hello.txt', text);
// console.log("task 3")

// const data = fs.readFileSync('./hello.txt', { encoding: 'utf8' });
// console.log("task 4")
// console.log(data);



//async

// const fs = require('fs');

// console.log("task 1");

// fs.readFile('./hello.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File content:', data);
// });
 
// fs.writeFile('./hello.txt', 'learning file system 2', (err) => {
//   if (err) {    
//     console.error('Error writing file:', err);
//     return;
//     }   
    
// });

//     console.log('task 3');



 const arr = [4,6,3,7,2];
 
 let max = arr[0];
 for(let i = 1; i < arr.length; i++ ){
   if(arr[i] > max){
       max = arr[i]
   }
 }
 console.log(max)