let list = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
list.splice(list.indexOf('fish'), 1);
console.log(list); //[ 'cat', 'dog', 'parrot', 'horse', 'chicken', 'lion' ]

list = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
list.shift();
console.log(list); //['dog', 'parrot', 'horse', 'fish', 'chicken', 'lion' ]

list = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
list.pop();
list.pop();
console.log(list); //['cat', 'dog', 'parrot', 'horse', 'fish' ]
