// L1
console.log('🥪 Synchronous 1');

// L2
setTimeout((_) => console.log('🍎 Timeout 2'), 0);

// L3
Promise.resolve().then((_) => console.log('🍍 Promise'));

// L4
console.log('🥪 Synchronous 4');
