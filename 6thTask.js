const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
}

Object.keys(person).forEach(key =>{
    console.log(`${key} : ${person[key]}`)
});

console.log(`\n${'*'.repeat(50)}\n`)

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}



Object.keys(person).forEach(key => {
    if(key === 'location'){
        console.log(`Where to find: ${person[key]}`)
    } else {
        console.log(`${ucFirst(key)}: ${person[key]}`)
}
});
