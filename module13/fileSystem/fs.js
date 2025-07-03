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




//  const arr = [4,6,3,7,2, 9];
 
//  let max = arr[0];
//  for(let i = 1; i < arr.length; i++ ){
//    if(arr[i] > max){
//        max = arr[i]
//    }
//  }
//  console.log(max);





//  let name = "Tanim Ahmmed"

// console.log(name.split(" ").reverse().join(" "))




// let arr = [2, 4 , 6 , 8]

// let sum = arr[0];

// for (let i = 1; i < arr.length ; i++ ){
//     sum += arr[i];
// }
// console.log(sum)







// const arr = [2, 4 ,3, 6 , 8]

// let even = 0 ;

// for (let i = 0; i < arr.length ; i++ ){
//    if(arr[i] %2 == 0 ){
//        even ++;
//    }
// }
// console.log("running")

























// function findSecondMax(arr){
    
//     let max = arr[0];
//     let secondMax = -Infinity;

//      for(let i = 1; i < arr.length; i++ ){
//         let temp = arr[i]

//         if(temp > max){
//             secondMax = max;
//             max =temp;
//         } else if (temp > secondMax && temp < max){
//             secondMax = temp;
//         } 
//      }

//       if (secondMax === -Infinity){
//             return "no valid second max element found"
//         } 

//      return secondMax;
// }


// console.log(findSecondMax([1]))



// function findSecondMax(arr){
//     let max = arr[0];
//     let secondMax = -Infinity;

//     for(let i =1; i < arr.length; i++ ){
//         let temp = arr[i];

//         if(temp > max){
//             secondMax = max;
//             max = temp;
//         } else if (temp > secondMax && temp < max){
//             secondMax = temp;
//         }
//     }
//     if(secondMax === -Infinity){
//         return "no second max found "
//     }
//     return secondMax;
// }


// console.log(findSecondMax([3]))


//  function sumOfArr(arr){
    
//     let sum = arr[0];

//     for(i = 1; i < arr.length ; i++){
//         sum += arr[i];
//     }
//     return sum;
//  }

//  console.log(sumOfArr([5,6,5,6]))

// function arrMax(arr){
//     let max = arr[0]

//     for(i = 1; i < arr.length ; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max;
// }


// console.log(arrMax([3,8,3,7]))



// function countVawels(str){
//     let count = 0;
//     for(let i = 0; i < str.length ; i++){
//           let ch = str[i].toLowerCase();

//         if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
//             count ++;
//         }
//     }
//     return count
// }


// console.log(countVawels('Tanim'))



// function secondMax(arr){
//     let max = arr[0];
//     let secMax = -Infinity;

//     for(i =1 ; i < arr.length ; i++){

//         let temp = arr[i];

//         if(arr[i]> max){
//             secMax = max
//             max = arr[i]
//         }
//         else if(arr[i] <max && arr[i] > secMax){
//             secMax = arr[i]
//         }
//     }

//     return secMax;
// }


console.log(secondMax([1,4,6,7,6,5]))




































