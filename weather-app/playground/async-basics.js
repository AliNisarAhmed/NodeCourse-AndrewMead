// https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/questions/2956062  for API Usage

console.log('starting main()');

setTimeout(() => {
  console.log('First timer');
}, 2000);

setTimeout(() => {
  console.log('2nd timer');
}, 0);

console.log('Finishing main()');