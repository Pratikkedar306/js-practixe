const ID = Symbol("ID");

const user = {
    Name: "Chinmay",
    [ID]: "AKCJ",
    Email: "akkcj@gmail.com",
    Dob: "16/09/2002"
};


user.greeting = function () {
   console.log( "Hello");
};

user.gr1 = function () {
     return `Hello ${this.Name}, your ID is ${this[ID]}. Enjoy Your Gaming!`;
};


console.log(user);


console.log(user.greeting());


console.log(user.gr1());
