let list = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
console.log('initial list >>',list)

list.splice(list.indexOf('fish'), 1);
console.log('list without fish >>',list); //[ 'cat', 'dog', 'parrot', 'horse', 'chicken', 'lion' ]

// list = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
list.shift();
console.log(list); //['dog', 'parrot', 'horse', 'fish', 'chicken', 'lion' ]

// list = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
list.pop();
list.pop();
console.log(list); //['cat', 'dog', 'parrot', 'horse', 'fish' ]
