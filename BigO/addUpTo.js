// Suppose we want to write a function that calculates the sum of all numbers frm 1 up to (and including) some number n.

// approach 1


function addUpTo(n){
    let total = 0;
    for(let i= 1; i<=n; i++){
        total+=i
    }
    return total;
}
let t1 = performance.now();
console.log('approach one =>' ,addUpTo(100000000));
let t2 = performance.now();
console.log('approach one executed in ', (t2-t1)/100, 'seconds')


// approach 2

function addUpTo2(n){
    return n * (n+1) / 2
};
let t3 = performance.now();
console.log('approach two =>',addUpTo2(10000000000));
let t4 = performance.now();
console.log('approach two executed in ', (t4-t3)/100, 'seconds')