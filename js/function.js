let abc= {
    id :0,
    name   :"Chinmay",
    dob :"10/11"

};
console.table([abc.id,abc.name,abc.dob])
let xyz=abc
xyz.id=1
console.table([abc.id,abc.name,abc.dob])
console.log(`My emp id is ${abc.id} and name = ${abc.name.toUpperCase()} dob is ${abc.dob}`);