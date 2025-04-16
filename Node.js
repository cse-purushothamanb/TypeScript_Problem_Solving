console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 2);


setImmediate(() => {
  console.log('setImmediate');
});

process.nextTick(() => {
  console.log('nextTick');
});

console.log('End');

print().then(console.log);

async function print() {
    return "Async Function!!";
}
