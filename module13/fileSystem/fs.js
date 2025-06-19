// const fs = require('fs');
// console.log("task 1")
// const text = "learning file system ";
// fs.writeFileSync('./hello.txt', text);
// console.log("task 3")

// const data = fs.readFileSync('./hello.txt', { encoding: 'utf8' });
// console.log("task 4")
// console.log(data);



//async

const fs = require('fs');

console.log("task 1");

fs.readFile('./hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

    console.log('task 3');